// Iterables - those on which we can apply a 'for of' loop
// eg: array, stirng are iterable

const firstName = 'nikhil';  // Valid iterable
for(let char of firstName){
    console.log(char);
} 

const users = {
    'user1' : 'nik',
    'user2' : 'om',
    'user3' : 'raj'
}
for(let user of users){  // throws error as objects are not iterable
    console.log(user);
} 


// Array like objects - those which have 'length' property and can be accessed by their index
// eg: string
const name = 'rohan';
console.log(name.length);
console.log(name[1]);
