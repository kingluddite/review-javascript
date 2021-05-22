# Node and NPM
## Node.js
* Node.js is technology that allows you to run JavaScript code directly on your computer instead of only inside a browser
* `npm`, the Node Package Manager, is the default package manager for `Node.js`
* **note** `npm` is installed automatically when you install `Node.js`

### What is a package manager?
* A package manager allows developers to download and install prepared packages that contain tools, libraries, and frameworks

## Install Node.js
* Download and install Node.js version `14.9.0`
    **important note** Use `15.10.0` if you have a Mac with an M1 chip
* `npm` is automatically installed when you install Node

### macOS specific instructions
`$ touch ~/.bash_profile`

* [Troubleshooting errors and fixes](https://learn.nucamp.co/mod/page/view.php?id=3931)

### Install Node and NPM
`$ node -v`

`$ npm -v`

* In this exercise, you installed the Node.js runtime environment to your computer (which includes NPM, the Node package manager)
* You then used CLI commands to confirm that both installations were successful
* If your installation was successful, the above commands should result in seeing the installed version 14.9.0 for Node and 6.14.8 (or higher) for NPM

## 2. Exercise Using npm
* open bash terminal
* drag folder
* npm init -y
* creates package.json
* code .
* change entry point to index.html
* change description
* turn on autosave in VS code

`$ npm install lite-server --save-dev`
