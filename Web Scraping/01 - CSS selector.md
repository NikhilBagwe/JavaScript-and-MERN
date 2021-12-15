## Element Selector :

- Selects all elements with the given tag.
```css
p {
  color : blue;
}
```

## Descendant Selector :

- Selects 'li' elements present inside 'div' tag and changes there color to blue.
```css
div ol {
  color : blue;
}
```

## Children Selector :

- Selects 'div' which directly contains 'p' and then 'span' i.e div>p>span and changes there color to blue.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
        /* children selector */
        div>p>span    {
            color: blue;
        }
    </style>
</head>

<body>

    <!-- select "I'm the direct son" and make it blue -->
    <div>
        <p>
            <span>I'm the direct son</span>
        </p>
    </div>

    <div>
        <span>
            <p>
                <span>I'm the indirect son</span>
            </p>
        </span>
    </div>
  
</body>

</html>
```

## Class Selector :

- Selects 'div' which has the corressponding class name and changes there color to blue.
```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* class selector */
        .some-class {
            color: blue;
        }
    </style>
</head>

<body>
    <!-- Select the p tag with class = some-class and make them blue  -->
    <p>Random</p>
    <p>Random</p>
    <p>Random</p>

    <p class="some-class">Select me and next guy</p>
    <p class="some-class">Yes me!</p>

</body>

</html>
```

## Classes Descendant Selector :

```html
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    /* classes desendent */
     .c1 span .c2 {
      color: blue;
    }
  </style>
</head>

<body>
  <!-- Select "I'm here. find me" and make it blue  -->

  <div class="c1">
    <div>
        <span>
          <div class="c2">I'm here. find me</div>
        </span>
    </div>
  </div>

  <span>
    <div class="c2">Dont select me</div>
  </span>
</body>

</html>
```

## Attribute Selector

- Selects the element having the given attribute value.
```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    /* attribute selector */
    input[value="Select me"] {
        color: blue;
    }
</style>

<body>

    <!-- Select input element with the value "Select Me" and 
        make its background blue  -->

    <form>
        <input type="button" value="Click Me">
        <input type="button" value="Select me">
    </form>

</body>

</html>
```
