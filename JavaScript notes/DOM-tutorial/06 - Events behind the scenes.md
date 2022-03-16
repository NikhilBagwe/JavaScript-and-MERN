# Event object :

- The event object contains a number of properties that describes the event that occurred.
- An event listener is an object that "listens" for events from a GUI component, like a button. 
- An event, like a button click, is represented as an object.
- When the user generates an event, the system creates an event object which is then sent to the listener that has been registered for the GUI component.

## Html code:

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
console.log('Script starts')

const allButtons = document.querySelectorAll('.container button')

// using event object 'e' to access text inside buttons
allButtons.forEach(function (button) {
  button.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'yellow'
    e.target.style.color = 'blue'
    console.log(e.currentTarget.textContent)
  })
})

console.log('Script ends')
```

## Explanation of code :

- Browser has 2 things :
  1. JS engine - contains GEC, FEC, call stack 
  2. Web APIs
- In above code we are adding event listener on all 3 buttons using forEach.
- But since JS is single threaded, it cannot wait and check that when the user is going to click the button and then it has to run the callback function as JS has to execute next lines of code.
- So here JS takes help of browser APIs and asks them to look when a button is clicked, then return its callback function to JS for execution.
- Suppose the user clicked all the 3 buttons one after another. The 3 callback functions returned from the action performed, has to wait in a queue called 'Callback Queue' to enter callstack.
- The Event loop looks after the call satck as well has the callback queue containing callback functions.
- Until the call stack becomes empty i.e completes execution of GEC, event loop won't let anyone interfere the callstack's process.
- When callstack becomes empty, the event loop puts one callback function at a time from the queue into callstack for execution.
- Inshort, first the whole JS file is executed i.e GEC and then the callback functions from callback queue are executed one by one.



