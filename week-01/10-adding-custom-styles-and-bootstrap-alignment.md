# 10. Exercise: Adding Custom Styles & Bootstrap Alignment Classes
## Google Fonts
* https://fonts.google.com/

## External style sheet
`css/styles.css`

* CSS Linear Gradient Generator

### Custom styles
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NuCamp: A Better Way to Camp</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <style type="text/css" media="screen">
      body {
        font-family: "Open Sans", sans-serif;
      }

      h1,
      h2,
      h3 {
        font-family: "Lobster", cursive;
      }

      h2 {
        color: #3046c5;
      }

      header h2 {
        color: #cec8ff;
      }

      .jumbotron {
        padding: 30px;
        background-image: linear-gradient(to right, #563700, #3046c5, #60106b);
        margin-bottom: 2rem;
        background-color: #e9ecef;
        /* border-radius: 0.3rem; */
        color: white;
        border-radius: 0;
      }

      footer {
        background-image: linear-gradient(#cec8ff, white);
      }

      .row-content {
        padding: 50px 0;
        border-bottom: 1px ridge;
        min-height: 200px;
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
      <div class="row row-content">
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
        <div class="row row-content">
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
        <div class="row row-content">
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

## Alignment
* [bootstrap 5 alignment rules](https://getbootstrap.com/docs/5.0/utilities/text/#text-alignment)

## Finish Code
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NuCamp: A Better Way to Camp</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <style type="text/css" media="screen">
      body {
        font-family: "Open Sans", sans-serif;
      }

      h1,
      h2,
      h3 {
        font-family: "Lobster", cursive;
      }

      h2 {
        color: #3046c5;
      }

      header h2 {
        color: #cec8ff;
      }

      .jumbotron {
        padding: 30px;
        background-image: linear-gradient(to right, #563700, #3046c5, #60106b);
        margin-bottom: 2rem;
        background-color: #e9ecef;
        /* border-radius: 0.3rem; */
        color: white;
        border-radius: 0;
      }

      footer {
        background-image: linear-gradient(#cec8ff, white);
      }

      .row-content {
        padding: 50px 0;
        border-bottom: 1px ridge;
        min-height: 200px;
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
      <div class="row row-content align-items-center">
        <div class="col-sm-4 order-sm-last col-md-3">
          <h2 class="text-end">Discover & Review</h2>
        </div>
        <div class="col">
          <h3>Our Campsites</h3>
          <p>
            Explore our growing database of curated campsites and leave your own
            reviews!
          </p>
        </div>
      </div>

      <div class="row row-content align-items-center">
        <div class="col-sm-4 col-md-3">
          <h2>Featured Campsites</h2>
        </div>
        <div class="col">
          <h3>React Lake Campground</h3>
          <p>
            Nestled in the foothills of the Chrome Mountains, this campground on
            the shores of the pristine React Lake is a favorite for fly fishers.
          </p>
        </div>
      </div>

      <div class="row row-content align-items-center">
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
        <div class="row row-content">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sites</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a href="http://instagram.com/">Instagram</a>
            <a href="http://facebook.com/">Facebook</a>
            <a href="http://twitter.com/">Twitter</a>
            <a href="http://youtube.com/">YouTube</a>
          </div>
          <div class="col-sm-4 text-center">
            Tel: 1-206-555-1234<br />
            Email: campsites@nucamp.co
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
```


