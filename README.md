## Cordova starter with react
This boilerplate provide you a few command that help you easy to start with cordova project. By default this starter has included code-push plugin, that helps you deploy your update on the flight (do not waiting for approval from apple or google).  
This project is cloned from [my-cordova-react-boilerplate](https://github.com/uhlryk/my-cordova-react-boilerplate), but it has a big change from origin so I decided to separated, you can refer them for more information.


## Technical stacks
These are some stacks you need to know before working around on this:  
- React, Redux, Gulp, imagemagick  
- [Cordova](https://cordova.apache.org/docs/en/latest/platform_plugin_versioning_ref/)  
- [Code Push](https://microsoft.github.io/code-push/)  
- [cordova-icon](https://www.npmjs.com/package/cordova-icon)  
- [cordova-splash](https://www.npmjs.com/package/cordova-splash)  


## Installation
After clone this project and install npm packages, this script will be run `gulp prepare-build`, it will build source code and prepare ios project, if you want to add android project you can run `cordova prepare android`


## Commands
I have provided some command that helps you start fast:
- `gulp prepare-build`  
- `gulp start-dev`  
- `gulp release-ios`  
- `gulp release-android`  
- `npm run gen-icon`  
- `npm run gen-splash`  
- And any cordova commands  
