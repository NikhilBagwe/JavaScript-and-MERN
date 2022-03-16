# Event Delegation :

- If we add an event listener on parent, we don't need to add event listeners on it's childs separately as the event listener is delegated to the children elements.
- In below example we are adding event listener on 'grandparent'. So whenever we click on 'parent' or 'child' element, the event listener will be triggered.
- In case of Event object, when we check its 'target' property, it will be set to the element on which you clicked rather than the parent element to which event listener was attached. 

### HTML code same as prev file no. 08
```javascript
const grandparent = document.querySelector('.grandparent')

grandparent.addEventListener('click', (e) => {
  console.log('You clicked somewhere!!')
  console.log(e.target)
})
```
