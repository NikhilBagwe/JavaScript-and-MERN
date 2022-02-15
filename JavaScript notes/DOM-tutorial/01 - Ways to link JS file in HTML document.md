# 1. Adding JS file in "head" section :
  
- Here when the browser gets the HTML file, it will start parsing it.
- During parsing when the browser reaches line containing '<script src="script.js"></script>' , it will start loading JS file.
- At this point the parsing of HTML file will stop.
- On loading JS file, the browser will execute it. 
- Suppose we have used multiple HTML elements in our JS code like 'header', 'nav', etc. but on executing JS code, it won't find this elements as the browser stopped parsing HTML file.
- For browser the 'header' element won't exist as it is yet to be parsed.
- It will throw an error.
  
```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <script src="script.js"></script>
    <title>My Website</title>
  </head>
  <body>
    
      <!-- some code -->

  </body>
</html>
 
```
  
# 2. Adding JS file at the end of "body" element :
  
- Here the browser will parse the entire HTML file until it reaches 'sript' tag.
- On reaching script tag, it will load the JS file and execute it.
- Since the HTML elements are parsed, JS file will be executed without error.

```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>My Website</title>
  </head>
  <body>
    
      <!-- some code -->
      <script src="script.js"></script>
  </body>
</html>
 
```

# 3. Adding JS file in "head" section using "async" keyword :

- While parsing HTML, when the browser reaches 'script' tag, on seeing 'async' the browser will start parsing as well as loading the JS file at the same time.
- So loading and parsing takes palce at same time.
- After sometime, JS file gets loaded, the browser will stop parsing half-way and start executing JS file.
- Still there are high chances of error during JS execution as the entire HTML is not parsed.

```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <script src="script.js" async></script>
    <title>My Website</title>
  </head>
  <body>
    <header class="header">
      <nav class="nav container">
        <h1 class="logo">Website</h1>
        <ul class="nav-items">
          <li class="nav-item"><a href="#home">Home</a></li>
          <li class="nav-item"><a href="">Todo</a></li>
          <li class="nav-item"><a href="">Sign Up</a></li>
        </ul>
      </nav>
      <div class="headline">
        <h2 id="main-heading">
          Manage your tasks <span style="display: none">Hello</span> <!-- Suppose on reaching here the loading of JS file stops, thus parsing also stops half-way  -->
        </h2>
        <button class="btn btn-headline">Learn More</button>
      </div>
    </header>

  </body>
</html>
 
```

# 4. Adding JS file in "head" section using "defer" keyword : BEST way

- Here the browser will perform parsing of HTML and loading of JS file simultaneously. This saves time.
- When the JS file is loaded, the browser won't stop parsing.
- Instead it will parse the whole HTML file first and since the JS file is loaded, it will start executing it saving time. 

```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <script src="script.js" defer></script>
    <title>My Website</title>
  </head>
  <body>
    
      <!-- some code -->

  </body>
</html>
 
```
