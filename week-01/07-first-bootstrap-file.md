# First Bootstrap File
## Create the home page
* Create new file `index.html`
    - DOCTYPE
    - html root element
    - language is in english `lang="en"`
    - head element
        + utf-8 encoding
        + title of page (SEO)
    - body
        + header, footer (semantic)
        + page content (div elements - block level)

`index.html`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>NuCamp: A Better Way To Camp</title>
</head>

<body>

    <header>
        <div>
            <h1>NuCamp</h1>
            <h2>a better way to camp</h2>
        </div>
    </header>

    <div>
        <h2>Discover & Review</h2>
        <h3>Our Campsites</h3>
        <p>Explore our growing database of curated campsites and leave your own reviews!</p>
    </div>

    <div>
        <h2>Featured Campsites</h2>
        <h3>React Lake Campground</h3>
        <p>Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.</p>
    </div>

    <div>
        <h2>Our Community Partners</h2>
        <h3>Bootstrap Outfitters</h3>
        <p>Bootstrap Outfitters supplies you with gear you need at prices you can't beat.</p>
    </div>

    <footer>
        <div>
            <h5>Links</h5>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sites</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div>
            <h5>Social</h5>
            <a href="http://instagram.com/">Instagram</a>
            <a href="http://facebook.com/">Facebook</a>
            <a href="http://twitter.com/">Twitter</a>
            <a href="http://youtube.com/">YouTube</a>
        </div>
        <div>
            Tel: 1-206-555-1234<br />
            Email: campsites@nucamp.co
        </div>
    </footer>

</body>

</html>
```

## Google Foo helps!
* Example
    - Google Query "Do HTML meta tags need to come first?"
    - [Stackoverflow](https://stackoverflow.com/questions/5572471/in-head-which-comes-first-meta-or-title)
    - Google Query "Why html viewport"?
        + [MDN resource](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

## Add bootstrap JavaScript
* Order is important

```
// MORE CODE

<!-- jQuery must come first, then Popper.js, then the Bootstrap JavaScript plugins.-->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
// MORE CODE
```

`.gitignore`

```
node_modules
```

* No need to commit as they are already available via NPM

## Local Repo 

`$ git init`

`$ git add .`

`$ git commit -m 'Initialize repo'`

## Create Remote repo and push to github

## Getting Started with Bootstrap
### How to open nucampsite project folder
* Open VS Code inside `2-Bootstrap folder`
    - File > Open Folder (Windows)
    - File > Open... (macOS)
* Navigate to `2-Boostrap` folder and highlight the nucampsite folder by clicking it once
    - Click `Select Folder` (Windows)
    - Click `Open` (macOS)
* When complete you should see `NUCAMPSITE` in VS Code

### Opening the correct folder is important
* By opening the root folder of the project you're working on, you will prevent many potential accidents or mistakes
    - Example - creating or moving files outside of your project folder
* This also guarantees that when you open the integrated terminal in VS Code, you will be in the right location to start your server and install packages
* **note** If you run commands from the wrong folder location, you will get errors
    - Show how to open Integrated Terminal in current folder inside VS Code
* Other ways to open folder in VS Code
    - Right click in Desktop or File Explorer and "open with code" (windows)
    - Drag/drop file onto VS Code icon in Dock
    - `$ code .` to open VS code to same folder wher the terminal is pointing
