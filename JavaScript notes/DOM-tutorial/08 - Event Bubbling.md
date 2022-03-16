# Event Bubbling or Event Propagation :

- When we click on 'child', the browser checks whether it's parent element has the same event listener on it or not. 
- In our case, grandparent, parent and child have same event listener so the browser automatically calls the grandparent's, parent's event listnener when we click on child element. 
- This behaviour of JS is called as Event Bubbling or Event Propagation.

```html
<body>
    <main>
      <div class="grandparent box">
        Grandparent
        <div class="parent box">
          Parent
          <div class="child box">Child</div>
        </div>
      </div>
    </main>
</body>
```

```javascript
const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

child.addEventListener('click', () => {
  console.log('You clicked on child')
})

parent.addEventListener('click', () => {
  console.log('You clicked on parent')
})

grandparent.addEventListener('click', () => {
  console.log('You clicked on grandparent')
})
```

# Capture events :

- First JS runs capture events and then event bubbling is performed.

```javascript
const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// Capture events :

child.addEventListener(
  'click',
  () => {
    console.log('Captured child')
  },
  true
)

parent.addEventListener(
  'click',
  () => {
    console.log('Captured parent')
  },
  true
)

grandparent.addEventListener(
  'click',
  () => {
    console.log('Captured grandparent')
  },
  true
)

child.addEventListener('click', () => {
  console.log('Bubble child')
})

parent.addEventListener('click', () => {
  console.log('Bubble parent')
})

grandparent.addEventListener('click', () => {
  console.log('Bubble grandparent')
})

```
