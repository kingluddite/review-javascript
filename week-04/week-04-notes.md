# Week 4 notes
## jQuery
* Created in 2006
* Used for:
    - DOM manipulation
    - Event Listeners
    - Handling cross-browser issues
    - Lots more
* In the Decline as modern browsers/JavaScript have improved
* jQuery usage is slowly becomining obsolete
* From stats in 2019 jQuery is still used in 74% of all websites
* Bootstrap JavaScript components are designed to be manipulated with jQuery

## jQuery
* Add play and pause buttons into Carosel

### Adding buttons
At bottom of carousel (under Previous and Next buttons)

`index.html`

```
// MORE CODE

              <span class="carousel-control-next-icon"></span>
              <span class="sr-only">Next</span>
            </a>
            <div class="btn-group" id="carouselButton">
              <button class="btn btn-danger btn-sm" id="carouselPause">
                <i class="fa fa-pause"></i>
              </button>
              <button class="btn btn-danger btn-sm" id="carouselPlay">
                <i class="fa fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

// MORE CODE
```

### Custom styles for buttons
`styles.css`

```
// MORE CODE
#carouselButton {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 100;
}
```

### Program to buttons to work using jquery
* `$` let's you know you are writing jQuery
* jQuery ready method: tells the browser when the document is finished loading and ready to run a script, run whatever is inside this code block `aka { ... }`
* Below is the shorthand and recommended version to use for making sure your code has loaded and is ready to have the DOM manipulated

```
// MORE CODE

  <script>
    $(function () {
      
    });
  </script>

// MORE CODE
```

* Or you will see it written like this (same thing)

```
// MORE CODE

  <script>
    $(document).ready(function () {
      
    });
  </script>

// MORE CODE
```

## Carousel
* Default is 5000 milliseconds

`index.html`

* [carousel Bootstrap docs](https://getbootstrap.com/docs/4.0/components/carousel/#carouseloptions)
* [jquery click docs]()

```
// MORE CODE
  <script>
    $(function () {
      // work with tooltip
      $('[data-toggle="tooltip"]').tooltip();

      // carousel
      // speed up time between slides to 2 seconds
      // this is from bootstrap documentation
      $(".carousel").carousel({ interval: 2000 });
      // Pause the carousel
      // click is from jQuery documentation
      $("#carouselPause").click(function () {
        $(".carousel").carousel("pause");
      });
      // play the carousel
      $("#carouselPlay").click(function () {
        $(".carousel").carousel("cycle");
      });
    });
  </script>
</html>
```

## Troubleshooting:
* **note:** An issue has been discovered with the carousel pause button on touchscreens
* To fix this issue, you can replace this line:

```
$(".carousel").carousel( { interval: 2000 } );
```

* with:

```
$(".carousel").carousel( { interval: 2000, pause: "false" } );
```

## Use git to add and commit

## Change 2 buttons to 1 button (refactor and improve usability)
1. Delete the group div and play button

* Change this:

```
// MORE CODE

            <div class="btn-group" id="carouselButton">
              <button class="btn btn-danger btn-sm" id="carouselPause">
                <i class="fa fa-pause"></i>
              </button>
              <button class="btn btn-danger btn-sm" id="carouselPlay">
                <i class="fa fa-play"></i>
              </button>
            </div>

// MORE CODE
```

* To this

```
// MORE CODE

  <button class="btn btn-danger btn-sm" id="carouselPause">
    <i class="fa fa-pause"></i>
  </button>

// MORE CODE
```

* This messes up our styling:

```
#carouselButton {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 100;
}

```

So we rename our `id`

```
// MORE CODE

            <button class="btn btn-danger btn-sm" id="carouselPause">

// MORE CODE
```

* To this:

```
<button class="btn btn-danger btn-sm" id="carouselButton">

```

## Fix button functionality
* We will toggle play and pause
* Update our code from this:

```
// MORE CODE

      $("#carouselPause").click(function () {
        $(".carousel").carousel("pause");
      });
      // play the carousel
      $("#carouselPlay").click(function () {
        $(".carousel").carousel("cycle");
      });

// MORE CODE
```

* To this:

```
// MORE CODE
      $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
          $(".carousel").carousel("pause");
          $("#carouselButton").children("i").removeClass("fa-pause");
          $("#carouselButton").children("i").addClass("fa-play");
        } else {
          // play the carousel
          $(".carousel").carousel("cycle");
          $("#carouselButton").children("i").removeClass("fa-play");
          $("#carouselButton").children("i").addClass("fa-pause");
        }
      });
    });
  </script>
</html>
```

## Sass
* Syntactically Awesome Style Sheets
* Sass vs Less (Sass is winning)
  - https://trends.google.com/trends/explore?date=all&geo=US&q=%2Fm%2F054k6n_,%2Fm%2F0gjd0jv
* Bootstrap 3 used Less
* Bootstrap 4 uses Sass

### Sass Variants
* Sass and scss (sassy CSS)
* Minor syntax differences - you can use either
* [Review web site](https://sass-lang.com/)
* Sass Features

## Sass exercise
* Create `css/styles.scss`
* Copy all `styles.css` into `styles.scss`
* DRY programming principle
* Sass variables

`css/styles.scss`

```
$color-primary: #3046c5;
$color-secondary: #5637dd;
$color-pale: #cec8ff;
$color-mid: #901cad;
$color-dark: #60106b;
$color-black-transparent: rgba(0, 0, 0, 0.5);

$body-font: "Open Sans", sans-serif;
$header-font: "Lobster", cursive;

body {
  font-family: $body-font;
}

h1,
h2,
h3 {
  font-family: $header-font;
}

h2 {
  color: $color-primary;
}

header h2 {
  color: $color-pale;
}

footer {
  background-image: linear-gradient(#cec8ff, white);
  padding: 20px 0;
}

.jumbotron {
  margin: 0;
  padding: 30px;
  background-image: linear-gradient(
    to right,
    $color-secondary,
    $color-primary,
    $color-dark
  );
  color: white;
}

.row-content {
  padding: 50px 0;
  border-bottom: 1px ridge;
  min-height: 200px;
}

.navbar {
  background-color: $color-mid;
}

/* .tab-content { */
/*   border: 1px solid #ddd; */
/*   border-top: none; */
/*   padding: 10px; */
/* } */

.carousel-caption {
  background-color: $color-black-transparent;
}

.carousel {
  border: solid $color-secondary;
}

#carouselButton {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 100;
}
```

## Sass Nesting
```
header {
  h2 {
    color: $color-pale;
  }
}
```

## Compile .scss to .css
* Next, use NPM to install a sass compiler. 
* IMPORTANT! Check your Node version using the node -v command. 
* Type the following into your bash terminal from inside your project folder: 
* If your Node version is a `14.x` version, enter:

`$ npm install --save-dev node-sass@4.14.1`

* If your Node version is a `15.x` version, enter:

`$ npm install --save-dev node-sass@5.0.0`

## Both gave me errors
* Now I install `$ npm i sass -D`

`package.json`

```
// MORE CODE

  "scripts": {
    "lite": "lite-server",
    "start": "npm run lite",
    "scss": "node-sass -o css/ css/"
  },

// MORE CODE
```

* Make sure you code passes [JSON validation](https://jsonlint.com/)
* JSON requirements - https://www.w3schools.com/js/js_json_syntax.asp
* Backing up files
  - If you rename css you can keep track of it (or you can use git which will keep track of it in a different snapshop)

## Run Sass
`$ npm run scss`

## Dart Sass
* [docs for dart sass](https://sass-lang.com/dart-sass)
* Make sure it matches your folder structure

`package.json`

```
// MORE CODE

  "scripts": {
    "lite": "lite-server",
    "start": "npm run lite",
    "sass": "sass assets/css/styles.scss assets/css/styles.css"
  },

// MORE CODE
```

`$ npm run sass`

## Optimizing Your files for Deployment
* Automation through NPM scripts
* Making files smaller so they can be downloaded faster
* Image Compression & Minification
  - Look inside node_modules for bootstrap
    + to see `.min` example in `dist` folder
    + Compare files sizes with `$ ls -l`
    + Comparent both `css` folder and `js` folder for min vs not min files
* We'll minify all text code files
  - svg, css, html, and JavaScript files
  - We also uglify JavaScript files
    + Where we also shorten the variable names (this process aka "mingling")

## Tools that help automate these processes
* Grunt
* Gulp
* Webpack
* Snowpack (brand new!)
* We can use NPM script (in package.json) to automate the process for us

# Make all javascript external

## Add dev dependencies
* Recommended to shut down server when installing dependencies

`$ npm i -D onchange@7.0.0`

`$ npm install -D -E parallelshell@3.0.1`

* Then install the package parallelshell with the following command, including the `-E` flag
* The `-E` flag lets `npm` know that we want to install `parallelshell` at the exact `3.0.1` version this time and all times in the future
* This is important here because the `3.0.2` version of `parallelshell` contains a bug that we wish to avoid
* Add the following two scripts to the script object in package.json. The syntax will be slightly different based on your operating system:

**macOS:**

```
    "watch:scss": "onchange 'css/*.scss' -- npm run scss",
    "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"
  },
```

**Windows:**

```
   "watch:scss": "onchange \"css/*.scss\" -- npm run scss",
    "watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""
  },
```

* Here's my code:

```
// MORE CODE

  "scripts": {
    "lite": "lite-server",
    "start": "npm run lite",
    "sass": "sass assets/css/styles.scss assets/css/styles.css",
    "watch:scss": "onchange 'assets/*.scss' -- npm run sass",
    "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"
  },

// MORE CODE
```

* Make sure to update the start script:

```
// MORE CODE

  "scripts": {
    "lite": "lite-server",
    "start": "npm run watch:all",

// MORE CODE
```

## Run it
`$ npm start`

* Now, whenever you make any changes to `styles.scss` file, it will automatically be compiled to the corresponding .css file 
* You can test this by making a small change to your `styles.scss` file, and you'll be able to see the recompilation happen in real time 

* This is the working scripts:

`package.json`

```
// MORE CODE

  "scripts": {
    "lite": "lite-server",
    "start": "npm run watch:all",
    "sass": "sass assets/css/styles.scss assets/css/styles.css",
    "watch:scss": "onchange 'assets/css/*.scss' -- npm run sass",
    "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"
  },

// MORE CODE
```

* We need the fontawesome icon files

`$ npm i -D copyfiles`

`package.json`

```
// MORE CODE

  "scripts": {
    "copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",

// MORE CODE
```

## For image optimization
`$ npm i -D imagemin-cli` (will compress our images - we can also minify svg images)

**NOTE:** Some MacOS students have encountered issues with imagemin-cli not installing its plugins due to issues with global permissions on MacOS. If this happens, try:

`$ sudo npm install imagemin-cli@5.1.0 --save-dev --unsafe-perm=true --allow-root`

`package.json`

```
// MORE CODE

  "scripts": {
    "copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",
    "imagemin": "imagemin assets/img/* -o dist/img",

// MORE CODE
```

## usemin
`$ npm i -D usemin-cli`

* Will install 3 modules
  - uglifyjs
  - cleancss
  - htmlminifier

`package.json`

```
// MORE CODE

    "usemin": "usemin contactus.html -d dist --htmlmin -o dist/contactus.html && usemin aboutus.html -d dist --htmlmin -o dist/aboutus.html && usemin index.html -d dist --htmlmin -o dist/index.html",

// MORE CODE
```

## For CSS
`index.html`

```
// MORE CODE

    <!-- build:css css/main.css -->
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="node_modules/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="node_modules/bootstrap-social/bootstrap-social.css"
    />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <!-- endbuild -->

// MORE CODE
```

* We wouldn't surround google fonts as that is not a local file so same for aboutus.html and contactus.html

# Surround the JavaScript script too
```
// MORE CODE

    <!-- build:css css/main.css -->
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="node_modules/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="node_modules/bootstrap-social/bootstrap-social.css"
    />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <!-- endbuild -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>

// MORE CODE
```

## Automate Dist Folder Cleanup
`$ npm i -D rimraf`

* This utility simply deletes the `dist` folder, if it exists, and all files in it, effectively "cleaning" it

`package.json`

```
// MORE CODE

    "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'",
    "clean": "rimraf dist"

// MORE CODE
```

## Build the distribution folder
`package.json`

```
// MORE CODE

  "clean": "rimraf dist",
  "build": "npm run clean && npm run imagemin && npm run copyfonts && npm run usemin"
},

// MORE CODE
```


## Build the distribution folder aka `dist`
`$ npm run build`

## real world
* This is one way
* There are lots of other ways
* Not canonical
* Can use a module bundler like Webpack
* Or Task runners like Grunt and Gulp

## Adding `dist` to your `.gitignore`
`.gitignore`

```
node_modules
dist
```

## Deploy to netlify
1. Clone your repo from github
2. `$ npm i`
3. Run the build `$ npm run build`
4. Drag build folder to netlify's deploy box in the dashboard
5. Change site name
6. Talk about domain adding a domain

* Manual vs continuous deployment

## Other common places to deploy
* Github Pages
* Vercel
* Heroku
* AWS
* Digital Ocean
* Firebase

Answer to code challenge
https://codepen.io/minae/pen/yLBRxyY

While loop
```
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

## do while loop
* The difference is code in a do while loop will always execute at least once
* The code in a while loop has a chance to never execute if the condition is false at the beginning 

```
do {
  // stuff to do
} while (condition); // need a semi-colon at the end
```

```
let i = 0;
do {
  console.log("the iterator is", i);
  i++;
} while (i > 0 && i < 10);
```

Break out of current iteration (continue)
break out of while loop completely (break)

```
let i = 0;
let earlyEscapeNum = 6;
while (i < 10) {
  if (i === earlyEscapeNum) {
    break;
  }
  console.log("the iterator is", i);
  i++;
}
```

## continue

```
let i = 0;
let earlyEscapeNum = 6;
while (i < 10) {
  if (i === earlyEscapeNum) {
    continue;
  }
  console.log("the iterator is", i);
  i++;
}
```

* Avoid infinite loops

`for (let i = 10; i <= 10; i--) {}` // DON'T DO THIS INFINITE LOOP

* Show visual loop app

## For loop
* The for loop was an improvement on the while loop
* Less typing

## Backwards loop
```
for (let i = 10; i > 0; i--) {
  console.log("The iterator is", i);
}
```

## Arrays (these are all non mutating methods (aka non destructive methods))
myArr.indexOf (-1 means item wasn't in array or a number of the index where it found the first match in the array)
myArr.includes true or false whether an array includes an element
concat() (creates a new array; does not mutate original arrays)
join()

## mutator methods
* pop()
* push()
* shift()
* unshift()

## Solution to JavaScript challenge
https://codepen.io/minae/pen/dybgQWv
