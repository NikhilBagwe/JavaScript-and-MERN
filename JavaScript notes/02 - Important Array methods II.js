// -- Sort -------------------------------------------------------------------------------------------------------------------------------------------------------------

// sort method mutates the original array instead of creating a new array like map,reduce,etc. methods
// JS sorts an array assuming/changing all its elements as string even though the array may contain numbers.
// It picks up the first character of every string and as per it's ASCII values it sorts it.
// Advantage -> You can easily sort an array containing strings as per the dictionary order i.e a to z.
// strings starting with capital letters will always be present at first on sorting the array, as the ASCII values for captial letter starts from 'A'=65 to 'Z'=90 
// which are smaller as compared to that of Small letters which start from 'a'=97 to 'z'=122

const numbers = [5, 9, 1200, 410, 3000];
numbers.sort();
console.log(numbers); // [ 1000, 20, 26, 3000, 34 ] - not desired o/p

// Disadvantage -> We cannot sort numbers directly.
// Solution - To sort numbers, we need to pass a callback function into sort.

numbers.sort((a, b) => a-b);
console.log(numbers);

// What exactly is happening ?
// When the callback func returns a positive number we have exchange positions of a and b 
// (a, b) = 1200,410 
// a-b ---> 790
// a-b ---> gives postive number so exchange positions ---> b, a
// 410 , 1200

// When the callback func returns a negative number we keep the  positions of a and b as it is.
// (a, b) = 5, 9 
// a-b ---> -4
// a-b ---> gives negative so keep as it is ----> a,b
// 5, 9 

// For sorting in ASCENDING order :
sort((a, b) => a-b);
// For sorting in DESCENDING order :
sort((a, b) => b-a);



//---- Find ------------------------------------------------------------------------------------------------------------------------------------------------------------

// find method returns the first occurrence in the array matching the given condition in the callback function. 
// We use find method, to find unique data such as 'userId'

const arr = ['bird', 'dog', 'cat', 'whale'];

const ans = arr.find(string => string.length === 3);

console.log(ans); // dog



//---- Every ------------------------------------------------------------------------------------------------------------------------------------------------------------

// every method is used to check whether all the elements in the array satisfy the given callback func condition. 
// When all the elements from array satisfy the given condition, then only the 'every' method returns a 'true'

const numbers = [2,4,6,9,10];

const ans = numbers.every((number)=>number%2===0);

console.log(ans); // false



//---- Some ----------------------------------------------------------------------------------------------------------------------------------------------------------

// some method is used to check whether atleast any one element in the array satisfy the given callback func condition. 
// Returns true if an element satisfy the given condition

const numbers = [3,5,8,9];

const ans = numbers.some((number)=>number%2===0);

console.log(ans); // true



//---- Fill -----------------------------------------------------------------------------------------------------------------------------------------------------------

// fills an array with given number/character
const numbers = new Array(10).fill(0);

console.log(numbers);

// Used to edit an existing array by updating it at certain places

const arr = [1,2,3,4,5,6,7];
arr.fill(0, 3, 6); // (number to be filled, start index, end index)
console.log(arr);



//---- Splice -------------------------------------------------------------------------------------------------------------------------------------------------------

// splice method mutates the original array
// It is used to delete, insert in array
// Format is splice(start index, delete_count, )

const items = ['item1', 'item2', 'item3'];

// delete only - it also returns the deleted item
// const deletedItems = items.splice(1, 2);
// console.log(items); // o/p -> [ 'item1' ]
// console.log('DeletedItems :' ,deletedItems);

// insert only
// items.splice(1, 0, 'inserted item');
// console.log(items);

// insert and delete
items.splice(1, 2, 'inserted item1', 'inserted item2');
console.log(items);
