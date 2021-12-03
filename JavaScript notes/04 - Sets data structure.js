/*
Sets :
- It is iterable.
- Stores unique elements only
- No index-based access to elements
- Order of elements is not guranteed
- Store different data types into it
*/

const numbers = new Set([1, 2, 3, 3]);
numbers.add(4);
console.log(numbers);

// Suppose if you add the same array given below twice into the set, it will addd it only once
const items = ['item1', 'item2', 'item3'];
numbers.add(items);
numbers.add(items);
console.log(numbers);

// But if you add the 'items' array by writing it inside add function , then javascript will treat them as two diff. arrays as they will have different
// memory addresses inside memory.
numbers.add(['item1', 'item2', 'item3']);
numbers.add(['item1', 'item2', 'item3']);
console.log(numbers);

// Check if a number is present inside the set
if(numbers.has(2)) console.log('2 is present');

// Extracting unique elements from an array
const nums = [1, 2, 2, 3, 4, 5, 5, 6];
const uniqueNums = new Set(nums);
console.log(uniqueNums);
