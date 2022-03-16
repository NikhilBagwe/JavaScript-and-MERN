## keypress event :

- Returns info on which key was pressed.

```html
<body>
    <button class="mainButton">Click me</button>
    <div class="container">
      <button id="one">Button 1</button>
      <button id="two">Button 2</button>
      <button id="three">Button 3</button>
    </div>
</body>
```

```javascript
const body = document.body

body.addEventListener('keypress', (e) => {
  console.log(e.key)
})
```

## mouseover event :

- When you hover on the selected HTML element, an event occurs.

```javascript
const button = document.querySelector('.mainButton')

button.addEventListener('mouseover', () => {
  console.log('Mouseover event occurred!!!')
})
```
