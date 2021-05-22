# Bootstrap Basics

## Intro to Bootstrap and Front End Frameworks
* What is a front end framework?
    - A front end framework or library is concerned with building the presentation layer of a website (the content and style)
    - Bootstrap is most popular front end UI framework
    - Mainly CSS-based, along with support from JavaScript

## Why Bootstrap?
* Don't reinvent the wheel
* Keeps code consistent and maintainable
* Bootstrap created in 2011
* Free open source collection of CSS and JavaScript files
    - Contain classes and utilities you can use in your projects
    - Makes it simple to create:
        + Responsive
        + Mobile First
            * [What is Mobile First](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
        + Aesthetically pleasing
        + Easily customizable
            * Other Similar UI frameworks
                - Materialize
                - Bulma
                - Semantic UI
                - [Pure](https://purecss.io/)
        + Excellent documentation
        + Great to have bootstrap projects on your resume
        + Introduces you to key UI concepts like:
            * modals
            * breadcrumbs
            * buttons
            * Lots more

### Bootstrap button class
* [link to btn class](https://github.com/twbs/bootstrap/blob/079f2cd90c247225eb71dff4d514faf50f653416/dist/css/bootstrap.css#L2877-L2895)

### Quick start
* What is minified CSS?
* Show simple HTML with `btn` class applied and not applied:

```
<button>Default HTML button</button>
<button class="btn">Bootstrap button</button>
<button class="btn btn-dark">Bootstrap button</button>
<button class="btn btn-dark btn-lg">Bootstrap button</button>
```

### Versions of Bootstrap
* Bootstrap 5
* Searching docs for "buttons" (Great!)

### You can view the classes CSS code to learn
* Bootstrap CSS is written very well, great to learn from

## Exercise: Bootstrap Project Setup
* Inside `NucampFolder/Bootstrap`
    - Open in VS Code
        + Windows
            * Right click + Open with Code
    - macOS
        + Drag folder to VS Code icon in Dock
* Open integrated Terminal in VS Code
    - `ctrl` + backtic

`$ mkdir 01-week-exercise-02-bootstrap-project-setup`

`$ npm init -y`

## Using the correct version number of packages we install
* This is a good practice
* But let's use the latest version and deal with issues if they happen (as would happen in the real world)

### Install `lite-server`
* Use just for development
    - It is a dev-dependency
    - [What is difference between a dependency and a dev dependency?](https://medium.com/@stalonadsl948/dependencies-vs-devdependencies-926e096a3dee)

`$ npm install lite-server --save-dev` (or `$ npm i lite-server -D`)

* **note** Bootstrap 5 is designed to be used without jQuery
* Bootstrap uses `Popper.js` (https://popper.js.org/)

`$ npm i jquery popper bootstrap`

## node_modules
* Show devDependencies and dependencies in `package.json`
* Add custom description
* Add `main` entry point to be `index.html`

### Add script for lite-server
`package.json`

* JSON
    - Double quotes are required

```
// MORE CODE
"description": "Explain what you are building",
"main": "index.html",
"scripts": {
    "lite": "lite-server",
    "start": "npm run lite"
}
"author": "John Doe",

 // MORE CODE

```

* We can delete the test script?
    - [Why are tests needed developments](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing)

## Checking out node_modules
* `node_modules/dist/css`
    - Look at `bootstrap.css`
* We do not need to edit this folder
* Inside the `dist` folder
* When you install using npm this is how you can now use these files in your project
