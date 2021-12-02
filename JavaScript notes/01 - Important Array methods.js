//-- ForEach -----------------------------------------------------------------------------------------------------------------

const arr = [2, 4, 6, 8];

function myFunc(number, index){
    console.log(`index is ${index} and number is ${number}`);
}

// Instead of using for loop and calling myFunc on each element everytime, we can use forEach which takes the myFunc as a callback function or we can define 
// myFunc as an anonymous function inside forEach like the following example

// arr.forEach(function(number, index){
//     console.log(`index is ${index} and number is ${number}`);
// });

arr.forEach(myFunc);



//-- Map -----------------------------------------------------------------------------------------------------------------

// Takes a callback function
// Iterates on each element of the given array, calls function on it and stores the result into a new array

const numbers = [2, 4, 6, 8];

function square(number){
    return number*number;
}

const squareNumber = numbers.map(square);

console.log(squareNumber);

// If suppose instead of returning the square of number, you are printing it, then 'undefined' is returned which is stored in 'ans' array given below.
// So make sure you always return something while using map

const ans = numbers.map(number => console.log(number*number));
console.log(ans);



//-- Filter -----------------------------------------------------------------------------------------------------------------

// Takes a callback function
// the callback function must always return a 'boolean' value as depending on the whether true or false , the element gets added to the new array.

const numbers = [1, 2, 13, 4, 6, 9, 8];

function isEven(number){
    return number%2===0;
}

const evenNumber = numbers.filter(isEven);

console.log(evenNumber);



//-- Reduce -----------------------------------------------------------------------------------------------------------------

// Takes a callback function
// the callback function has two paramenters -> accumulator and currentvalue. 
//In the first iteration, 'accumulator' stores the value at 0th index of array and currentValue stores the value at 1st index.
// In second iteration the 'accumulator' stores the value returned by first iteration and currentValue stores value at 2nd index and so on.
// In below example we calculated sum of array using reduce.

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);

// Dry run
// accumulator , currentValue,  return 
// 1               2              3    <- first iteration
// 3               3              6
// 6               4              10
// 10              5              15
// 15              6              21

// We can also pass initial value of 'accumulator' at start as given below where we pass '100' so the sum will be = 121
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 100);

// Real world example -> when we shop on online websites like amazon, when we purchase multiple things we add them to our cart. The website has to display us our
// total amount for which 'reduce' can be used.

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000
