# callback hell :

- Callback hell is a block where the use of function callbacks in asynchronous code becomes obscure or difficult to follow.
- The code structure looks like a pyramid, making it difficult to read and maintain.
- This is a big issue caused by coding with complex nested callbacks.
- Also called as Pyramid of doom.
- We can avoid the callback hell with the help of 'Promises'. Promises in javascript are a way to handle asynchronous operations.

## Example :

```html
<body>
    <div class="container">
      <!-- h1.heading$*7{Hello World} -->
      <h1 class="heading1">Hello World</h1>
      <h1 class="heading2">Hello World</h1>
      <h1 class="heading3">Hello World</h1>
      <h1 class="heading4">Hello World</h1>
      <h1 class="heading5">Hello World</h1>
      <h1 class="heading6">Hello World</h1>
      <h1 class="heading7">Hello World</h1>
    </div>
</body>
```

```javascript
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')
const heading6 = document.querySelector('.heading6')
const heading7 = document.querySelector('.heading7')

// callback hell or pyramid of doom
setTimeout(() => {
  heading1.textContent = 'one'
  heading1.style.color = 'violet'
  setTimeout(() => {
    heading2.textContent = 'two'
    heading2.style.color = 'purple'
    setTimeout(() => {
      heading3.textContent = 'three'
      heading3.style.color = 'red'
      setTimeout(() => {
        heading4.textContent = 'four'
        heading4.style.color = 'pink'
        setTimeout(() => {
          heading5.textContent = 'five'
          heading5.style.color = 'green'
          setTimeout(() => {
            heading6.textContent = 'six'
            heading6.style.color = 'blue'
            setTimeout(() => {
              heading7.textContent = 'seven'
              heading7.style.color = 'brown'
            }, 1000)
          }, 3000)
        }, 2000)
      }, 1000)
    }, 2000)
  }, 2000)
}, 1000)

```
