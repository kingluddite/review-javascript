# Responsive Bootstrap
## 4. Responsive Web Design
* Design "Mobile first" then larger devices
* Responsive Web Design
    - Dynamically adjusts its content based on your device size

### Test it out
####  Open Chrome Dev Tools
* Keyboard shortcuts are important (save you time)
* `cmd` + `Option` + `j` (macOS)
* `f12` (windows and Firefox)
* `cmd` + Option + `i` (Firefox) (macOS)

#### Toggle device toolbar
* Change sizes to see differences

#### The Viewport
* The visible area of a webpage given in width and height in pixels
    - **note** It is not always the same as screen resolution (especially on mobile devices):
        + iPhone X screen resolution is 1125 x 2436 pixels
        + iPhone X viewport size is 375 x 812 pixels
            * How is this possible?
                - Because screen resolution also takes into account pixel density, (or PPI - pixels per inch)
* Viewport (does not take up the entire browser window) does not include parts of the browser such as the address bar, scrollbar, bookmarks bar, et cetera
* The `viewport` meta tag is new in HTML5
    - You need to have this on all your HTML pages
    - It initializes a webpage to be optimized for multiple web devices
        + It gives the browser instructions on how to control the pages dimensions and scaling
        + It sets the page's width to be the width of the current device being used to view your page `content="width=device-width,`
        + And it sets the current scale to `1` which is the initial zoom level of the webpage

`<meta name="viewport" content="width=device=width, initial-scale=1" />`

* **note** Once the viewport meta tag is set you are able to use `media queries`

#### Responsive design with media queries & breakpoints
* Media queries are key concept to responsive design
* Media queries let you access the current size of the viewport and to setup the CSS rules based on the devices current size using the `@media` rule
* `breakpoints` are used in media queries
    - What is a breakpoint?
        + A custom viewport width at which you want to change the appearance of the website
        + Boostrap has this built in (you don't need to construct any media queries)
* Example of media querie with breakpoint

```
// MORE CODE

.simple ul {
  display: flex;
  flex-direction: column;
}

.simple ul li {
  margin-bottom: 0.5rem;
  text-align: center;
}

.simple ul li:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .simple ul {
    flex-direction: row;
    justify-content: space-between;
  }
  .simple ul li {
    margin-bottom: 0;
  }
}

// MORE CODE
```

* Bootstrap has breakpoints set up for `small`, `medium`, `large` and `extra-large`

```
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```

```
####### Bootstrap 5 Breakpoints #######

Breakpoint            Class infix   Dimensions
X-Small               None           <576px
Small                 sm             >=576px
Medium                md             >=768px
Large                 lg             >=992px
Extra large           xl             >=1200px
Extra extra large     xxl            >=1400px
```

## The Bootstrap Grid
* Create a grid layout for a page to control where elements are placed
* Similar to HTML table (used to be only way to layout a page but now there are better layout tools that Bootstrap uses)
* Tables are used only for tabular data
* Bootstrap Grid is designed to be:
    - mobile-first, responsive layout
    - Based mostly on CSS Flexbox and CSS Grid using media queries to set breakpoints

### Demo
## Emmet tip:
`.container>.row.col*12{$}` + tab

* [emmet cheat sheet](https://docs.emmet.io/cheat-sheet/)
* [emmet tutorial youtube video](https://www.youtube.com/watch?v=uCNgWcKrFfQ)

* Make sure to include bootstrap min CSS (and make sure you have viewport meta tag)
    - You must have both to use media queries (and use Bootstrap's grid)
* Important Bootstrap classes
    - container
    - row
    - col
* You need the following to create a Bootstrap Grid
    - We will use the `div` tag with our Bootstrap Grid
    - All content must go inside a `col` (column)
    - The container is there just to hold the `rows`
    - The `rows` are there just to hold the `col`
        + Never have content between the row or container tabs (only col)

```
<div class="container">
  <div class="row">
      <div class="col">1</div>
  </div>
</div>
```

* Style the Grid to make it easy to see

```
// MORE CODE

.container {
  border: 5px solid blue;
}
.row {
  border: 5px solid green;
}
.row div {
  border: 5px solid red;
}

// MORE CODE
```

* `container` vs `container-fluid`
    - `container-fluid` stretches the full width of the viewport size
    - The width of the container class is fixed only changes with different viewort widths are hit

### Boostrap Grid Columns
* Each bootstrap row can have between 1 and 12 columns
    - Everything adds up to 12
    - (if you only have 1 column than that is spanning across 12 columns)

### Show grid with 12 columns
```
// MORE CODE

    <div class="container">
      <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
        <div class="col">4</div>
        <div class="col">5</div>
        <div class="col">6</div>
        <div class="col">7</div>
        <div class="col">8</div>
        <div class="col">9</div>
        <div class="col">10</div>
        <div class="col">11</div>
        <div class="col">12</div>
      </div>
    </div>

// MORE CODE
```

## Be specific with col spans using a number like this:
* It all adds up to 12

```
// MORE CODE

  <div class="container">
      <div class="row">
        <div class="col-4">hello</div>
        <div class="col-8">world</div>
      </div>
    </div>
// MORE CODE
```

* Bootstrap uses autolayout to calculate missing numbers like:
    - It will know to use 8 for the second column (12 - 4 = 8)

```
// MORE CODE

  <div class="container">
      <div class="row">
        <div class="col-4">hello</div>
        <div class="col">world</div>
      </div>
    </div>
// MORE CODE
```

* When you resize the viewport
    - The column widths change automatically for different viewport sizes
    - This is possible because they pick up a percentage of the rows rather than a fixed width

## Breakpoints
* If the viewport is sized medium and up than this column will take out 6 out of the 12 total columns
    - (medium and up means it will apply to large and extra large breakpoints as well)
    - For anything below medium size will use autolayout instead of specifying a number 
```
// MORE CODE

  <div class="container">
      <div class="row">
        <div class="col">col 1</div>
        <div class="col col-md-6">col 2</div>
        <div class="col">col 3</div>
      </div>
    </div>

// MORE CODE
```

* Here is a variation with another breakpoint

```
// MORE CODE

  <div class="container">
      <div class="row">
        <div class="col">col 1</div>
        <div class="col col-md-6 col-lg-8">col 2</div>
        <div class="col">col 3</div>
      </div>
    </div>

// MORE CODE
```

`index.html`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <style type="text/css" media="screen">
      .container {
        border: solid blue;
      }
      .row {
        border: solid yellow;
      }
      .row div {
        border: solid lightgreen;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
        <div class="col">4</div>
        <div class="col">5</div>
        <div class="col">6</div>
        <div class="col">7</div>
        <div class="col">8</div>
        <div class="col">9</div>
        <div class="col">10</div>
        <div class="col">11</div>
        <div class="col">12</div>
      </div>
    </div>
  </body>
</html>
```
