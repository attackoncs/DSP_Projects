const WebSocket = require('ws');
const installationHandler = require('./ws_installation.js');
const dockerActions = require('./ws_docker_actions.js');
const wsGitHandler = require('./ws_git_manager');
const AppUtils = require('../util/AppUtils');

const log = AppUtils.getLogger();

let bufferLine;
let counterLine = 0;
const MAXLINES = 15;


function sendResponse(ws, err) {
  log.info('[WEB SOCKET Response]');
  let resp;
  if (err) {
    log.error(`Web socket error: ${err}`);
    resp = {
      status: 'error',
      code: err.code || 500,
      message: err.message,
    };
  } else {
    log.info('Web socket success response');
    resp = {
      status: 'success',
      message: 'success',
    };
  }

  if (ws.readyState === WebSocket.OPEN) { ws.send(JSON.stringify(resp)); }
}
function sendProgressMessage(ws, message) {
  const resp = {
    message,
    status: 'progress',
  };
  if (ws.readyState === WebSocket.OPEN) { ws.send(JSON.stringify(resp)); }
}

function manageInstallation(ws, jsonMessage) {
  installationHandler.installation(jsonMessage.config,
  // End callback
(err) => {
  sendResponse(ws, err);
},
// Called during installation
(dataline) => {
  // In order to reduce overhead ws.send use a buffer
  if (counterLine < MAXLINES) {
    bufferLine += dataline;
    counterLine += 1;
  } else {
    counterLine = 0;
    sendProgressMessage(ws, bufferLine);
    bufferLine = '';
  }
});
}


function manageDockerUp(ws, jsonMessage) {
  const body = jsonMessage.body;
  const params = jsonMessage.params;
  dockerActions.composeUp(params, body, (err) => {
    sendResponse(ws, err);
  }, (dataline) => {
    sendProgressMessage(ws, dataline);
  });
}

function manageDockerDown(ws, jsonMessage) {
  const body = jsonMessage.body;
  const params = jsonMessage.params;
  dockerActions.composeDown(params, body, (err) => {
    sendResponse(ws, err);
  }, (dataline) => {
    sendProgressMessage(ws, dataline);
  });
}

function manageSyncGithub(ws, jsonMessage) {
  wsGitHandler.synchronizeLocalGithub(jsonMessage.body, (err) => sendResponse(ws, err));
}


function manageUpdateProjects(ws) {
  wsGitHandler.updateProjects((err) => {
    sendResponse(ws, err);
  });
}

exports.init = function init(server) {
  const wss = new WebSocket.Server({
    server,
    perMessageDeflate: false,
  });

  wss.on('connection', (ws) => {
    // You might use location.query.access_token to authenticate or share sessions
    // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
    ws.on('message', (message) => {
      const jsonMessage = JSON.parse(message);
      switch (jsonMessage.action) {
        case 'installation' :
          manageInstallation(ws, jsonMessage);
          break;
        case 'docker_up' :
          manageDockerUp(ws, jsonMessage);
          break;
        case 'docker_down' :
          manageDockerDown(ws, jsonMessage);
          break;
        case 'synchronize_github' :
          manageSyncGithub(ws, jsonMessage);
          break;
        case 'update_projects' :
          manageUpdateProjects(ws, jsonMessage);
          break;
        default:
          log.error(`in web socket message: ${jsonMessage.action} is no registered`);
          sendResponse(ws, new Error(`${jsonMessage.action} is not registered`));
          break;
      }
    });
  });
};
