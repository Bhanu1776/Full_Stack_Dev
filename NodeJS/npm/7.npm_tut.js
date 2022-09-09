console.log('All about Node package manager');
// NPM is the package manager for JS, as like pip for python .. NPM helps us to manage the packages in NodeJs.

//* NPM
// To know the npm version ==> npm --version
// To know the node version ==> node --version
// npm init ==> To initialize a node package manager in a certain directory .. Answer all the foll questions!
// After initialization a new package.json file must be created in the directory.. where we can find all the details of our package stored over there..
// To install npm packages ==> npm install axios   or else    npm i axios
// To install npm package of specified version ==> npm install axios@0.20.1



//* JSON
// As JSON doesn't support writing comments :(
// As its data-only format language 
// Dependencies ==> are the package references that are used by your library without which it cannot work and to be installed along with your library installation automatically.
// dev dependencies ==> There are times when we want to install the packages only for development purposes, not for production purposes. In that case, dev dependencies are useful.
// Example ==> npm install nodemon --save-dev
// Nodemon ==> A useful extension to run JS programs, It automatically restarts whenever any changes detected in a file..
// simply run nodemon ./1.Basics_Node.js .. now I don't have to restart manually every time I make changes in a file ..
// "axios": "^0.27.2" ==> ^ is used to install specified version only
// "axios": ">0.20.2" ==> > is used if we want to install latest version greater to specified version ..
// "axios": "~0.20.2" ==> ~ is used to install latest released version

// By any chance if we delete node modules folder, we can simply get back by ==> npm install 


//* Versioning in npm packages
//! Major.Minor.Patches
// 0.20.2       -- This version can be identified by a minor release hotfix with patches 
// 1.1.0        -- This is major release 


//! Troubleshooting 
//* IF any permission error occurs while installing any npm package 
// Simply, reach out to this location (/usr/local/lib/) and change the permission of node-modules folder
// Type chmod 777 node-modules
// Thats it! Now you are good to GO!!