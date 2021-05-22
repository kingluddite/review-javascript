# Bootstrap Grid
## Starter file
`index.html`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NuCamp: A Better Way to Camp</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
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
      <p>
        Explore our growing database of curated campsites and leave your own
        reviews!
      </p>
    </div>

    <div>
      <h2>Featured Campsites</h2>
      <h3>React Lake Campground</h3>
      <p>
        Nestled in the foothills of the Chrome Mountains, this campground on the
        shores of the pristine React Lake is a favorite for fly fishers.
      </p>
    </div>

    <div>
      <h2>Our Community Partners</h2>
      <h3>Bootstrap Outfitters</h3>
      <p>
        Bootstrap Outfitters supplies you with gear you need at prices you can't
        beat.
      </p>
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

## The Header with Bootstrap Grid
```
// MORE CODE

    <header>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>NuCamp</h1>
            <h2>a better way to camp</h2>
          </div>
        </div>
      </div>
    </header>

// MORE CODE
```

## Main section
```
// MORE CODE

    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <h2>Discover & Review</h2>
        </div>
        <div class="col">
          <h3>Our Campsites</h3>
          <p>
            Explore our growing database of curated campsites and leave your own
            reviews!
          </p>
        </div>
      </div>

      <div class="row">
        <div class="row">
          <div class="col-sm-4 col-md-3">
            <h2>Featured Campsites</h2>
          </div>
          <div class="col">
            <h3>React Lake Campground</h3>
            <p>
              Nestled in the foothills of the Chrome Mountains, this campground
              on the shores of the pristine React Lake is a favorite for fly
              fishers.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 col-md-3">
          <h2>Our Community Partners</h2>
        </div>
        <div class="col">
          <h3>Bootstrap Outfitters</h3>
          <p>
            Bootstrap Outfitters supplies you with gear you need at prices you
            can't beat.
          </p>
        </div>
      </div>
    </div>

// MORE CODE
```

## Footer section
* Convert to 3 columns in same row

```
// MORE CODE

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-2">
            <h5>Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sites</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-6 col-sm-5">
            <h5>Social</h5>
            <a href="http://instagram.com/">Instagram</a>
            <a href="http://facebook.com/">Facebook</a>
            <a href="http://twitter.com/">Twitter</a>
            <a href="http://youtube.com/">YouTube</a>
          </div>
          <div class="col-sm-4">
            Tel: 1-206-555-1234<br />
            Email: campsites@nucamp.co
          </div>
        </div>
      </div>
    </footer>

// MORE CODE
```

## Test with lite-server
`$ npm start`

# Boostrap Order-* Classes
* Use `order-*` classes to change the order of columns in a row

```
// MORE CODE

>
      <div class="row">
        <div class="col-sm-4 order-sm-last col-md-3">
          <h2>Discover & Review</h2>
        </div>
        <div class="col">
          <h3>Our Campsites</h3>
          <p>
            Explore our growing database of curated campsites and leave your own
            reviews!
          </p>
        </div>
      </div>

// MORE CODE

<div class="row">
  <div class="row">
    <div class="col-sm-4 col-md-3">
      <h2>Featured Campsites</h2>
    </div>
    <div class="col">
      <h3>React Lake Campground</h3>
      <p>
        Nestled in the foothills of the Chrome Mountains, this campground
        on the shores of the pristine React Lake is a favorite for fly
        fishers.
      </p>
    </div>
  </div>
</div>

// MORE CODE
```

* Will only apply to sm viewports and up
* Makes this appear on small viewports and up as the last column

## Bootstrap Offset-* classes
* Use `offset-*` classes to force a Bootstrap column to the right

```
// MORE CODE

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sites</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

// MORE CODE
```

## jumbotron
* Use to call extra attention to a section of the page that shows key messages
* Class removed in Bootstrap 5
* Google Foo!
    - * [stackoverflow](https://stackoverflow.com/questions/63141494/how-to-create-jumbotron-in-bootstrap-5)

```
// MORE CODE

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
// MORE CODE
```

## list-unstyled
* Removes default list item styles (the bullet points in this case)

```
// MORE CODE

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sites</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

// MORE CODE
```

## Final Code
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NuCamp: A Better Way to Camp</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <style type="text/css" media="screen">
      .jumbotron {
        padding: 2rem 1rem;
        margin-bottom: 2rem;
        background-color: #e9ecef;
        border-radius: 0.3rem;
      }
    </style>
  </head>
  <body>
    <header class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>NuCamp</h1>
            <h2>a better way to camp</h2>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-sm-4 order-sm-last col-md-3">
          <h2>Discover & Review</h2>
        </div>
        <div class="col">
          <h3>Our Campsites</h3>
          <p>
            Explore our growing database of curated campsites and leave your own
            reviews!
          </p>
        </div>
      </div>

      <div class="row">
        <div class="row">
          <div class="col-sm-4 col-md-3">
            <h2>Featured Campsites</h2>
          </div>
          <div class="col">
            <h3>React Lake Campground</h3>
            <p>
              Nestled in the foothills of the Chrome Mountains, this campground
              on the shores of the pristine React Lake is a favorite for fly
              fishers.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 order-sm-last col-md-3">
          <h2>Our Community Partners</h2>
        </div>
        <div class="col">
          <h3>Bootstrap Outfitters</h3>
          <p>
            Bootstrap Outfitters supplies you with gear you need at prices you
            can't beat.
          </p>
        </div>
      </div>
    </div>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sites</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-6 col-sm-5">
            <h5>Social</h5>
            <a href="http://instagram.com/">Instagram</a>
            <a href="http://facebook.com/">Facebook</a>
            <a href="http://twitter.com/">Twitter</a>
            <a href="http://youtube.com/">YouTube</a>
          </div>
          <div class="col-sm-4">
            Tel: 1-206-555-1234<br />
            Email: campsites@nucamp.co
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
```

