# Adding JS file in <head> section :
  
- Here when the browser gets the HTML file, it will start parsing it.
- During parsing when the browser reaches line containing '<script src="script.js"></script>' , it will start loading JS file.
- At this point the parsing of HTML file will stop.
- On loading JS file, the browser will execute it. 
- Suppose we have used multiple HTML elements in our JS code like <header>, <nav>, etc. but on executing JS code, it won't find this elements as the browser stopped parsing HTML file.
- For browser the <header> element won't exist as it is yet to be parsed.
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
