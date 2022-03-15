# Event :

- JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. 
- When the page loads, it is called an event. When the user clicks a button, that click too is an event. 

# Ways to create events in JS :

## 1. Add events directly in the HTML file as an attribute of the given HTML element on which you need to call the event.

```html
<button
    class="btn btn-headline"
    onclick="console.log('you clicked me')"
>
    Learn More
</button>
```

## 2. Here we assign the function directly to click event. But this method is not good as we can assign the function to it only once.

```javascript
const btn = document.querySelector('.btn-headline')
console.dir(btn) // displays the 'btn' as an object.

btn.onclick = function () {
  console.log('you clicked me!')
}
```

## 3. Using addEventListener method :

```javascript
const btn = document.querySelector('.btn-headline')

function clickMe() {
  console.log('you clicked me!!')
}

btn.addEventListener('click', clickMe)
```

- The 'this' keyword will be set to the HTML element itself, when calling a normal function inside addEventListener.

```javascript
const btn = document.querySelector('.btn-headline')

btn.addEventListener('click', function () {
  console.log(this)
  console.log('you clicked me!!')
})
```
- In case of arrow function, 'this' will be set to window object.

```javascript
const btn = document.querySelector('.btn-headline')

btn.addEventListener('click', () => {
  console.log(this)
  console.log('you clicked me!!')
})
```


