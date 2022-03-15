# Adding event listener to multiple elements:

## HMTL code:

```html
<body>
    <div class="container">
      <button id="one">Button 1</button>
      <button id="two">Button 2</button>
      <button id="three">Button 3</button>
    </div>
</body>
```

## JS :

```javascript
const allButtons = document.querySelectorAll('.container button')

allButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    console.log(this.textContent)
  })
})

```
