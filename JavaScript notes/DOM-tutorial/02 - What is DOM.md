# DOM - Document Object Model :

- On parsing HTML file, browser will create an object called  'document'. 
- Browser will add it inside 'window' object. 
- You can do console.dir(window.document) to see the document object.

## We can do following things using document obj :

### Select an HTML element using 'getElementById' :

- In return it will give an object which is representation of the element in object form and will be stored in 'heading'

```javascript
// Shows it is an obj
console.log(typeof document.getElementById('main-heading'))

const heading = document.getElementById('main-heading')
// prints the HTML line
console.log(heading)
// prints the JS object of that element
console.dir(heading)
```

### querySelector & querySelectorAll :

```javascript
const heading = document.querySelector('.header')
console.log(heading)

// Returns a nodelist - An array like obj on which indexing and length property can be used
const navItem = document.querySelectorAll('.nav-item')
console.log(navItem)
```

### textContent property : Display and change text of element :

- displays text that is even hidden i.e display property is set to 'none'

```javascript
const mainHeading = document.getElementById('main-heading')
console.log(mainHeading.textContent)

// change text
mainHeading.textContent = 'Changed'
```

### 'style' object :

- used to change CSS properties of elements.
- present inside 'document' obj.

```javascript
const mainHeading = document.querySelector('div.headline h2')
console.log(mainHeading.style)
mainHeading.style.backgroundColor = 'blue'
```

### getElementsByClassName : Returns an HTML Collection

- we cant use forEach method to iterate through HTML collection.

```javascript
const navItems = document.getElementsByClassName('nav-item')
for (let i = 0; i < navItems.length; i++) {
  const navItem = navItems[i]
  navItem.style.backgroundColor = 'red'
}
```
