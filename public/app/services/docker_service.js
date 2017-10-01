DockerAPIService : function DockerAPIService($log, $http, containerManager, Notification)
{
	
	var api = '/dsp_v1/docker_network/' ;
	var api_docker = '/dsp_v1/docker_images/' ;

	// Returns a stub rappresentation of images
	function stubImages()
	{
		return [
	{
	name: 'daindragon2/debian_networking',
	description: 'a Debian networking image',
	//exposedPorts : [22,80],
	icon: 'assets/docker_image_icons/host.png' ,
	action: "NOT ALREADY IMPLEMENTED"
	}, 
	{
	name: 'daindragon2/debian_telnet',
	description: 'a Debian ftp server ',
	//exposedPorts : [21],
	icon: 'assets/docker_image_icons/server.png', 
	action: "NOT ALREADY IMPLEMENTED" 

	},
	{
	name: 'daindragon2/debian_ftp',
	description: 'a Debian ftp server ',
	//exposedPorts : [21],
	icon: 'assets/docker_image_icons/server.png', 
	action: "NOT ALREADY IMPLEMENTED" 

	}
		]

	};
	


	return {
		saveLab:function saveLab(labName, cld, clnd, nl, graphJSON) {
			var data = {
				networkList : nl,
				canvasJSON : graphJSON,
				clistToDraw : cld,
				clistNotToDraw : clnd
			}	
			return $http.post(api+labName, 
				data
				)
			
		},
		loadLab : function loadLab(repoName,labName, successCB) {
			$http.get(api+repoName+"/"+labName)
				.then(function successCallback(response) {   
					successCB(response.data.data)
					console.log(response.data.data)
				},
					function errorCallback(response) {   
						Notification({message:"Error loading lab!"}, 'error'); 
				})		
		},
		getDockerImages : function getDockerImages()
		{
			return $http.get(api_docker) 
			//return stubImages()	

		}, 


	}
}
