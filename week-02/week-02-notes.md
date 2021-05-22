# Navigation

## Types of Breadcrumbs

- `Location` (we are using this in this course)
  - Static
  - Show where the page is located in the website hierarchy
    - Example: Library > Events
- `Attribute`
  - Give information that categorizes the current page based on attributes chosen by the user
    - Example: Rugs > Round
- `Path`
  - Show users the steps they took to get to the current page
  - aka "history trail"
  - Tend to be confusing and thus the least often used

## Best Practive

- Have logo in navbar that is a link to the home page
- Be consistant on nav for entire website
- Avoid complex navigation
- Keep terms atomic and informative
- Try to let the user know where they are currently in the hierarchy of the website

* This makes link to top of page

```html
<!-- MORE -->

<li><a href="#">Home</a></li>

<!-- MORE -->
```

`index.html`

```
// MORE CODE

    <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
      <div class="container">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#nucampNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nucampNavbar">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutus.html">About</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Sites</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

// MORE CODE
```

## Font Awesome
* Install font awesome

`$ npm i font-awesome`

## Link to it

`index.html`

```
// MORE CODE

    <link
      rel="stylesheet"
      href="./node_modules/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <title>NuCamp: A Better Way To Camp</title>
  </head>

  <body>

// MORE CODE
```

## Buttons
* Download contactus.html

`contactus.html`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />

    <!-- Additional CSS must be placed after Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="node_modules/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Lobster|Open+Sans"
    />
    <link rel="stylesheet" href="css/styles.css" />

    <title>NuCamp: A Better Way To Camp</title>
  </head>

  <body>
    <header class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>NuCamp</h1>
            <h2>a better way to camp</h2>
          </div>
        </div>
      </div>
    </header>

    <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
      <div class="container">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#nucampNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nucampNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html"
                ><i class="fa fa-home fa-lg"></i> Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutus.html"
                ><i class="fa fa-info fa-lg"></i> About</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa fa-list fa-lg"></i> Sites</a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"
                ><i class="fa fa-address-card fa-lg"></i> Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Contact</li>
          </ol>
          <h2>Contact Us</h2>
          <hr />
        </div>
      </div>

      <div class="row row-content align-items-center">
        <div class="col-sm-4">
          <h5>Our Address</h5>
          <address>
            1 Nucamp Way<br />
            Seattle, WA 98001<br />
            U.S.A.
          </address>
        </div>
        <div class="col">
          <i class="fa fa-phone"></i> 1-206-555-1234<br />
          <i class="fa fa-envelope-o"></i> campsites@nucamp.co
        </div>
      </div>

      <div class="row row-content">
        <div class="col-12">
          <h2>Send us your Feedback</h2>
          <hr />
        </div>
        <div class="col-md-10">Form goes here</div>
      </div>
    </div>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li><a href="index.html">Home</a></li>
              <li><a href="aboutus.html">About</a></li>
              <li><a href="#">Sites</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
            <a href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
            <a href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
            <a href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
          </div>
          <div class="col-sm-4 text-center">
            <i class="fa fa-phone fa-lg text-primary"></i> 1-206-555-1234<br />
            <i class="fa fa-envelope-o fa-lg text-primary"></i>
            campsites@nucamp.co
          </div>
        </div>
      </div>
    </footer>

    <!-- jQuery must come first, then Popper.js, then the Bootstrap JavaScript plugins.-->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

## Bootstrap Social Library
* Install

`$ npm i bootstrap-social`

* Link Bootstrap social to all 3 of pages

## Add phone and email
* `role` attribute accessibility 

```
// MORE CODE

      <div class="row row-content align-items-center">
        <div class="col-sm-4">
          <h5>Our Address</h5>
          <address>
            1 Nucamp Way<br />
            Seattle, WA 98001<br />
            U.S.A.
          </address>
        </div>
        <div class="col">
          <a role="button" href="tel:+1231231122" class="btn btn-link">
            <i class="fa fa-phone"></i> 1-206-555-1234</a
          ><br />
          <a role="button" href="mailto:email@example.com" class="btn btn-link">
            <i class="fa fa-envelope-o"></i> campsites@nucamp.co</a
          >
        </div>
      </div>

// MORE CODE
```

## Add social icons
```
// MORE CODE

          <div class="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a
              class="btn-btn-social-icon btn-instagram"
              href="http://instagram.com/"
              ><i class="fa fa-instagram"></i
            ></a>
            <a
              class="btn-btn-social-icon btn-facebook"
              href="http://facebook.com/"
              ><i class="fa fa-facebook"></i
            ></a>
            <a
              class="btn-btn-social-icon btn-twitter"
              href="http://twitter.com/"
              ><i class="fa fa-twitter"></i
            ></a>
            <a class="btn-btn-social-icon btn-google" href="http://youtube.com/"
              ><i class="fa fa-youtube"></i
            ></a>
          </div>

// MORE CODE
```

* Live Demo of social buttons for Bootstrap
  - [live demo](http://lipis.github.io/bootstrap-social/)

## Use same code for phone and email in footer
```
// MORE CODE

          <div class="col-sm-4 text-center">
            <a role="button" href="tel:+1231231122" class="btn btn-link">
              <i class="fa fa-phone"></i> 1-206-555-1234</a
            ><br />
            <a
              role="button"
              href="mailto:email@example.com"
              class="btn btn-link"
            >
              <i class="fa fa-envelope-o"></i> campsites@nucamp.co</a
            >
          </div>
        </div>
      </div>

// MORE CODE
```

## Forms
```
        <div class="col-md-10">Form goes here</div>

```

* **note** For radio inputs the `name` is actually `different` than the `id` because radio buttons must share one name for the entire set but an `id` can not be repeated more than once (this is an exception to `id`s and `name` being named the same)

### Add a form
```
// MORE CODE

<div class="row row-content">
        <div class="col-12">
          <h2>Send us your Feedback</h2>
          <hr />
        </div>
        <div class="col-md-10">
          <form>
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <label for="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <label for="areaCode">Area Code</label>
            <input
              type="text"
              name="areaCode"
              id="areaCode"
              placeholder="Area Code"
            />
            <input type="tel" name="telNum" placeholder="Tel. number" />
            <label for="Email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
            May we contact you?
            <input type="radio" name="contactYes" value="yes" />
            <label for="contactYes">Yes</label>
            <input type="radio" name="contactNo" value="no" />
            <label for="contactYes">Yes</label>
            <label for="feedbac">Your Feedback</label>
            <textarea id="feedback" name="feedback" rows="8"></textarea>
            <button type="submit">Send Feedback</button>
          </form>
        </div>
      </div>
// MORE CODE
```

## Style form (using bootstrap classes)
* We use a nested grid
  - So grids can be nested
  - For nested grids we don't need another `.container`
    + We just add a `.row`
    + We divide each row into column

## Final form
```
// MORE CODE

<form>
            <div class="row">
              <label for="firstName" class="col-md-2">First Name</label>
              <div class="col-md-10">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div class="row">
              <label for="lastName" class="col-md-2">Last Name</label>
              <div class="col-md-10">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="row">
              <label for="areaCode" class="col-md-2">Contact Tel.</label>
              <div class="col-5 col-md-3">
                <input
                  type="text"
                  name="areaCode"
                  id="areaCode"
                  placeholder="Area Code"
                />
              </div>
              <div class="col-7">
                <input type="tel" name="telNum" placeholder="Tel. number" />
              </div>
            </div>
            <div class="row">
              <label for="Email" class="col-md-2">Email</label>
              <div class="col-md-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="row">
              <div class="col offset-md-2">
                May we contact you?
                <input
                  type="radio"
                  id="contactYes"
                  name="contactYes"
                  value="yes"
                />
                <label for="contactYes">Yes</label>
                <input
                  type="radio"
                  id="contactNo"
                  name="contactNo"
                  value="no"
                />
                <label for="contactNo">No</label>
              </div>
            </div>
            <div class="row">
              <label for="feedback" class="col-md-2">Your Feedback</label>
              <div class="col-md-10">
                <textarea id="feedback" name="feedback" rows="8"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="offset-md-2 col-md-10">
                <button type="submit">Send Feedback</button>
              </div>
            </div>
          </form>
// MORE CODE
```

## Add Bootstrap Form Component Classes
* Add `.form-group` class to parents of input+labels
* And add `.form-control` to the inputs
  - Skip radio inputs with `.form-control`
  - Add `.col-form-label` (this will cause labels to center vertically with their associated input fields)
    + Skip `.col-form-label` on radio buttons

### Form radio buttons (and checkboxes)
* `.form-check` (works for both check boxes and radio inputs)
* Surround radio buttons with `<div class="form-check"></div>`
* And to have radio buttons inline use `.form-check-inline`
  - We also add for radio buttons `.form-check-input` for input
  - And `.form-check-label` for labels

## Final Forms
```
<form>
            <div class="row form-group">
              <label for="firstName" class="col-md-2 col-form-label"
                >First Name</label
              >
              <div class="col-md-10">
                <input
                  type="text"
                  id="firstName"
                  class="form-control"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div class="row form-group">
              <label for="lastName" class="col-md-2 col-form-label"
                >Last Name</label
              >
              <div class="col-md-10">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="row form-group">
              <label for="areaCode" class="col-md-2 col-form-label"
                >Contact Tel.</label
              >
              <div class="col-5 col-md-3">
                <input
                  type="text"
                  name="areaCode"
                  id="areaCode"
                  class="form-control"
                  placeholder="Area Code"
                />
              </div>
              <div class="col-7">
                <input
                  type="tel"
                  name="telNum"
                  class="form-control"
                  placeholder="Tel. number"
                />
              </div>
            </div>
            <div class="row form-group">
              <label for="Email" class="col-md-2 col-form-label">Email</label>
              <div class="col-md-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="row form-group">
              <div class="col offset-md-2">
                May we contact you?
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    id="contactYes"
                    name="contactYes"
                    class="form-check-input"
                    value="yes"
                  />
                  <label for="contactYes" class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    id="contactNo"
                    class="form-check-input"
                    name="contactNo"
                    value="no"
                  />
                  <label for="contactNo" class="form-check-label">No</label>
                </div>
              </div>
            </div>
            <div class="row form-group">
              <label for="feedback" class="col-md-2 col-form-label"
                >Your Feedback</label
              >
              <div class="col-md-10">
                <textarea id="feedback" name="feedback" rows="8"></textarea>
              </div>
            </div>
            <div class="row form-group">
              <div class="offset-md-2 col-md-10">
                <button type="submit" class="btn btn-primary">
                  Send Feedback
                </button>
              </div>
            </div>
          </form>
```

## Final contactus.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />

    <!-- Additional CSS must be placed after Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="node_modules/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Lobster|Open+Sans"
    />
    <link
      rel="stylesheet"
      href="./node_modules/bootstrap-social/bootstrap-social.css"
    />
    <link rel="stylesheet" href="assets/css/styles.css" />

    <title>NuCamp: A Better Way To Camp</title>
  </head>

  <body>
    <header class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>NuCamp</h1>
            <h2>a better way to camp</h2>
          </div>
        </div>
      </div>
    </header>

    <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
      <div class="container">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#nucampNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nucampNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                <i class="fa fa-home fa-lg" aria-hidden="true"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutus.html"
                ><i class="fa fa-info fa-lg" aria-hidden="true"></i> About</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sites.html"
                ><i class="fa fa-list fa-lg" aria-hidden="true"></i> Sites</a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="contactus.html"
                ><i class="fa fa-address-card fa-lg" aria-hidden="true"></i>
                Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Contact</li>
          </ol>
          <h2>Contact Us</h2>
          <hr />
        </div>
      </div>

      <div class="row row-content align-items-center">
        <div class="col-sm-4">
          <h5>Our Address</h5>
          <address>
            1 Nucamp Way<br />
            Seattle, WA 98001<br />
            U.S.A.
          </address>
        </div>
        <div class="col">
          <a role="button" href="tel:+1231231122" class="btn btn-link">
            <i class="fa fa-phone"></i> 1-206-555-1234</a
          ><br />
          <a role="button" href="mailto:email@example.com" class="btn btn-link">
            <i class="fa fa-envelope-o"></i> campsites@nucamp.co</a
          >
        </div>
      </div>

      <div class="row row-content">
        <div class="col-12">
          <h2>Send us your Feedback</h2>
          <hr />
        </div>
        <div class="col-md-10">
          <form>
            <div class="row form-group">
              <label for="firstName" class="col-md-2 col-form-label"
                >First Name</label
              >
              <div class="col-md-10">
                <input
                  type="text"
                  id="firstName"
                  class="form-control"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div class="row form-group">
              <label for="lastName" class="col-md-2 col-form-label"
                >Last Name</label
              >
              <div class="col-md-10">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="row form-group">
              <label for="areaCode" class="col-md-2 col-form-label"
                >Contact Tel.</label
              >
              <div class="col-5 col-md-3">
                <input
                  type="text"
                  name="areaCode"
                  id="areaCode"
                  class="form-control"
                  placeholder="Area Code"
                />
              </div>
              <div class="col-7">
                <input
                  type="tel"
                  name="telNum"
                  class="form-control"
                  placeholder="Tel. number"
                />
              </div>
            </div>
            <div class="row form-group">
              <label for="Email" class="col-md-2 col-form-label">Email</label>
              <div class="col-md-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="row form-group">
              <div class="col offset-md-2">
                May we contact you?
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    id="contactYes"
                    name="contactYes"
                    class="form-check-input"
                    value="yes"
                  />
                  <label for="contactYes" class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    id="contactNo"
                    class="form-check-input"
                    name="contactNo"
                    value="no"
                  />
                  <label for="contactNo" class="form-check-label">No</label>
                </div>
              </div>
            </div>
            <div class="row form-group">
              <label for="feedback" class="col-md-2 col-form-label"
                >Your Feedback</label
              >
              <div class="col-md-10">
                <textarea id="feedback" name="feedback" rows="8"></textarea>
              </div>
            </div>
            <div class="row form-group">
              <div class="offset-md-2 col-md-10">
                <button type="submit" class="btn btn-primary">
                  Send Feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li><a href="index.html">Home</a></li>
              <li><a href="aboutus.html">About</a></li>
              <li><a href="#">Sites</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a
              class="btn-btn-social-icon btn-instagram"
              href="http://instagram.com/"
              ><i class="fa fa-instagram"></i
            ></a>
            <a
              class="btn-btn-social-icon btn-facebook"
              href="http://facebook.com/"
              ><i class="fa fa-facebook"></i
            ></a>
            <a
              class="btn-btn-social-icon btn-twitter"
              href="http://twitter.com/"
              ><i class="fa fa-twitter"></i
            ></a>
            <a class="btn-btn-social-icon btn-google" href="http://youtube.com/"
              ><i class="fa fa-youtube"></i
            ></a>
          </div>
          <div class="col-sm-4 text-center">
            <a role="button" href="tel:+1231231122" class="btn btn-link">
              <i class="fa fa-phone"></i> 1-206-555-1234</a
            ><br />
            <a
              role="button"
              href="mailto:email@example.com"
              class="btn btn-link"
            >
              <i class="fa fa-envelope-o"></i> campsites@nucamp.co</a
            >
          </div>
        </div>
      </div>
    </footer>

    <!-- jQuery must come first, then Popper.js, then the Bootstrap JavaScript plugins.-->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

## Boostrap Tables and Cards
* Basic HTML table
  - HTML character entity (always starts with ampersand `&`)
  - 3 rows + 6 cells
  - You can also set up a `thead`
  - VS Code Find and Replace tool 

# simple HTML table
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Table</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Extra Small</th>
          <th>Small</th>
          <th>Medium</th>
          <th>Large</th>
          <th>Extra Large</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Viewport Width</th>
          <td>&lt;576px</td>
          <td>&gt;576px</td>
          <td>&gt;768px</td>
          <td>&gt;992px</td>
          <td>&gt;1200px</td>
        </tr>
        <tr>
          <th>Column Class Prefix</th>
          <td>.col-</td>
          <td>.col-sm</td>
          <td>.col-md</td>
          <td>.col-lg</td>
          <td>.col-xl</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

* Add bootstrap table classes

```
// MORE CODE

  <body>
    <table class="table">
      <thead>

// MORE CODE
```

* But won't work unless you connect to Bootstrap CSS!

```
// MORE CODE

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Table</title>
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />
  </head>
  <body>
    <table class="table">

// MORE CODE
```

* .table-striped
* .table-dark
* Make table header light `.thead-light`
* Or make table `.table-light` and `.thead-dark`
* By default table rows have borders
  - If you want all cells to have borders use `.table-bordered`
    + color of border hard to see
    + Make table smaller with `table-sm`
    + Just scroll large tables (not whole page)
      * horizontal scrollbar not appearing (because I had `.table-sm` - remove it and you will see the scrool)
      * W3Schools - https://www.w3schools.com/bootstrap4/bootstrap_tables.asp

## Bootstrap Cards
* Lorem Ipsem (filler text)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div class="card">
      <div class="card-body">Basic card</div>
    </div>
  </body>
</html>

```

## Cards in Bootstrap Grid
```
>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card border-info">
            <h3 class="card-header bg-info text-light">Card Header!</h3>
            <div class="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              fugiat ea laborum similique officia magni incidunt, dicta, sit
              alias iusto optio accusantium mollitia nam eius fugit quibusdam
              esse quidem! Corporis.
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

* Dive deeper into bootstrap 4 cards - https://www.w3schools.com/bootstrap4/bootstrap_cards.asp

## Tables and Cards Exercise
* Need to give site footer a class

```
// MORE CODE

.site-footer {
  background-image: linear-gradient(#cec8ff, white);
  padding: 20px 0;
}

// MORE CODE
```

* So we can use generic footer elsewhere without a conflict

`index.html`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" />
    <!-- Additional CSS must be placed after Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="./node_modules/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="node_modules/bootstrap/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="./node_modules/bootstrap-social/bootstrap-social.css"
    />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <title>NuCamp: A Better Way To Camp</title>
  </head>

  <body>
    <header class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-3 col-md-2 align-self-center">
            <img src="img/logo.png" alt="" />
          </div>
          <div class="col">
            <h1>NuCamp</h1>
            <h2>a better way to camp</h2>
          </div>
        </div>
      </div>
    </header>

    <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
      <div class="container">
        <a href="#"><img src="img/logo.png" height="30" width="30" alt="" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nucampNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nucampNavbar">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fa fa-home fa-lg" aria-hidden="true"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutus.html"
                ><i class="fa fa-info fa-lg" aria-hidden="true"></i> About</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa fa-list fa-lg" aria-hidden="true"></i> Sites</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contactus.html"
                ><i class="fa fa-address-card fa-lg" aria-hidden="true"></i>
                Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row row-content align-items-center">
        <div class="col-sm-4 order-sm-last col-md-3">
          <h2 class="text-sm-right">Discover & Review</h2>
          <div class="col">
            <div class="media">
              <img
                class="d-flex mr-3 img-thumbnail"
                src="img/breadcrumb-trail.jpg"
                alt="breadcrumb"
              />
            </div>
            <div class="media-body align-self-center">
              <h3>Our Campsites</h3>
              <p class="d-none d-sm-block">
                Explore our growing database of curated campsites and leave your
                own reviews!
              </p>
            </div>
          </div>
        </div>

        <div class="row row-content align-items-center">
          <div class="col-sm-4 col-md-3">
            <h2>Featured Campsites</h2>
          </div>
          <div class="col">
            <h3>React Lake Campground</h3>
            <p class="d-none d-sm-block">
              Nestled in the foothills of the Chrome Mountains, this campground
              on the shores of the pristine React Lake is a favorite for fly
              fishers.
            </p>
          </div>
        </div>

        <div class="row row-content align-items-center">
          <div class="col-sm-4 order-sm-last col-md-3">
            <h2 class="text-sm-right">Our Community Partners</h2>
          </div>
          <div class="col">
            <div class="media">
              <img
                class="d-flex mr-3 img-thumbnail"
                src="img/bootstrap-thumb.png"
                alt="thumb"
              />
              <div class="media-body align-self-center">
                <h3>Bootstrap Outfitters</h3>
                <p class="d-none d-sm-block">
                  Bootstrap Outfitters supplies you with gear you need at prices
                  you can't beat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li><a href="index.html">Home</a></li>
              <li><a href="aboutus.html">About</a></li>
              <li><a href="#">Sites</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a
              class="btn-btn-social-icon btn-instagram"
              href="http://instagram.com/"
              ><i class="fa fa-instagram"></i
            ></a>
            <a
              class="btn-btn-social-icon btn-facebook"
              href="http://facebook.com/"
              ><i class="fa fa-facebook"></i
            ></a>
            <a
              class="btn-btn-social-icon btn-twitter"
              href="http://twitter.com/"
              ><i class="fa fa-twitter"></i
            ></a>
            <a class="btn-btn-social-icon btn-google" href="http://youtube.com/"
              ><i class="fa fa-youtube"></i
            ></a>
          </div>
          <div class="col-sm-4 text-center">
            <a role="button" href="tel:+1231231122" class="btn btn-link">
              <i class="fa fa-phone"></i> 1-206-555-1234</a
            ><br />
            <a
              role="button"
              href="mailto:email@example.com"
              class="btn btn-link"
            >
              <i class="fa fa-envelope-o"></i> campsites@nucamp.co</a
            >
          </div>
        </div>
      </div>
    </footer>
  </body>

  <!-- jQuery must come first, then Popper.js, then the Bootstrap JavaScript plugins.-->
  <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
  <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</html>
```

## Code Challenge
* https://codepen.io/kingluddite/pen/vYxEvZX?editors=1000

