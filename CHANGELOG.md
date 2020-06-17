# Change Log
All notable changes to this project will be documented in this file.


## [Unreleased]
<<<<<<< HEAD
 Fix of Angular WebSocket Code during installation long running
 Fix the filterImage bug in edit container page OK
 Fix the .data bug (delete when .data is empty)
 Different vertical size image canvas
 New terminal on a new tab in visual editor

## [3.6.1] - 2020 - 04 - 25
- Fixed error in subnet change

## [3.6.0] - 2020 - 04 - 22
- Added snippet function in Dockerfile
- Implemented private git repository support
- Added monitoring support
- Added managed services support

## [3.5.1] - 2020 - 04 - 17
- Added network graph enchancements
- Added tags guide in description

## [3.4.0] - 2019 - 12 - 21
- New theme by diterlizzi
## [3.3.2] - 2019 - 12 - 17  
- Added back button to edit network or element  
- Save compose upon editing of nodes / networks
## [3.3.0] - 2019 - 12 - 05
- Host network support
- Default oneline
- Single page hacktools
- Redirect stderr to stdout when run oneline (see dirhunt)
Versioning of Docker Security Playground 



## [3.2.4] - 2019 - 11 - 23  
- Added dockersecplayground username in tag of docker build
## [3.2.3] - 2019 - 09 - 08
- Fixed pty exception crashes when col or row is null



## [3.2.0] - 2019 - 09 - 08
- Added ctf and exec default actions for images  
- Vagrant with vbguest
## [3.1.1] - 2019 - 08 -29
- Added git and copy support
- Fixed executable file
## [3.1.0] - 2019 - 08 -27
- Added .dockerfiles and Dockerfile build feature
- Fixed test environment
## [3.0.0] - 2019 - 08 -03
### Added  
New Graph editor created  
Alignment of toolbar
### Changed
Integrated the lab graph inside the single page application (no graph_editor / graph_action pages)  
Refactored HackTools 
### Removed   
Old graph pages 



## [2.3] - 2019-03-12
Image checking added and progress bar for images implemented
Added anchor to images
Added reference from images path to lab

## [2.2] - 2018-11-29
Multiple repositories support added

## [2.1] - 2018-10-01
 Fix space names network allowed bug


## [2.0] - 2018-09-01
 Hack tools implemented
 

## [1.6] - 2017-01-19
 Fix bug of docker images with cmd label
 Docker network ip visibility implemented
 Docker compose file visibility implemented
## [1.5] - 2017-07-07
 In all the code "Drawed" variables are changed to "ToDraw" variables;
 Strange error lowercases in util/ws_handlers.js fixed.
 
## [1.4.2] - 2017-05-17
ALL Cap inserted, daemon for the process in order to execute backgdound process such as bots

## [1.4.1] - 2017-05-16    
### Changed    
Fix the pull repository bug.
## [1.4] - 2017-05-15  
### Added   

Long opts and short parameters in interface with docker wrapper images, now it's possible to insert boolean flag (such as -v, -h) they are transformed in checkbox on interface
### Changed  
The arguments are not with the following convention : --key=value but with "--key value", so it isn't necessary to insert wrapper bash scripts for default Linux commands such ass iptable but only the labels

## [1.3.2] - 2017-05-13
### Added
  - Implemented optional choices of capabilities, no static CAP_NET cap, but flexible with docker wrapper images convention
  - Moved the installation of base images inside a script in scripts directory (scripts/install_deps_images.sh), this will be runned during the dependents installation.

## [1.3.1] - 2017-05-12
### Changed
Add a check during editor of a container. The user cannot exit from editor if he doesn't click edit or cancel, this make more comprehensible for the user if the container  is modified
## [1.3.0] - 2017-05-12
### Changed
In graph_editor there was a bug: when an image was changed the ports weren't resetted. Now this issue is resolved.

## [1.2.0] - 2017-05-11
### Added
   - Added the installation script for Ubuntu: "/scripts/ubuntu_deps_install.sh"
=======
### Added
Add jon erickson container to containers
Add v1.0 image version to all labs
### Changed
SSH Example Fixed

>>>>>>> f312cd1fc66474ac913ced2a6369cfa49cad8a4f
