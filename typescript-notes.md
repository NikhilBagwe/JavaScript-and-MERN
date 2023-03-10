# Intro :

- Typescript is superset of Javascript.
- But it's not like it gives extra features to JS.
- TS allows you to write JS in a more precise manner so there are less errors at runtime.
- TS provides **TYPE SAFETY**
- TS is a Development tool i.e your project still runs in JS
- It is not a 100% standalone language itself, but a wrapper around JS. Still it is a programming language.

# Type Safety :

- JS allows us to add a variable of number data type with string which it shouldn't allow.

```js
console.log(2+'2');    // 22
console.log(null + 2); // 2
```

- TS will allow you to stop this weird behaviour by giving Type Safety.

# What TS provides you ?

- Static Checking : The syntax of the language is constantly being analyzed by the IDE when you are writing code even without running the code even once.
- It is the only thing TS provides you with.
- JS dosen't has static checking. Thus, we only get errors after running the JS file at runtime.

# Install TS on system :

```js
npm install -g typescript

tsc -v  // Check TS installed or not

tsc intro.ts  // To compile a TS file to generate it's corresponding JS file
```

# TS Types :

- Number
- Boolean
- String
- Undefined 
- Null 
- Void
- Object
- Array
- Tuples
- Any
- Never
- Unknown

# Number :

- JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number.

```js
let userId : number = 3368
```
- Now when you try accessing the methods for 'userId' variable, the methods only related to 'number' type will be displayed.

# Type Inference :

- Now it is pretty obvious when we declare a variable type number and assign a number - 3368 to it.
- So we can avoid it.
- TS is smart enough to automatically detect that you have placed a number into it so it's type is number.
- NOTE : There places where we have to specifty TYPE using colon.

```js
let userId = 3368

userId = "nikhil"  // Error : Type 'string' is not assignable to type 'number'
```

# Any :

- When you declare a variable and at that point you don't know which type of value is going to be assigned to it, TS automatically assigns 'any' to it.
- It is a really bad case and must be avoided.

```js
let hero;

function getHero(){
    return "thor"
}

hero = getHero()

console.log(hero)
```
- From above code we can see any type of value can be returned from the function getHero(). 
- It may be boolean, string, etc. 
- Thus, if any other developer changes the return type it may break the code during the API call or something similar.
- "any" is basically a marker/placeholder in TS which tells TS to basically turn off the Type checking for that variable to which "any" is assigned.
- It kills the whole purpose of TS as Type checking is disabled.

# Functions :

```js
function addTwo(num : number){
    return num + 2
}

let loginUser = (name : string, id : number) => {
    return id + 2
}

console.log(addTwo(5))
```

- If I don't specify the type of passed parameter "num", TS will consider "any" for it which can lead to problems.

## Better way to write functions in TS :

- But still the function can return any value.
- Thus we specify the return type of func as below :

```js
function addTwo(num : number) : number{
    return num + 2
}

const hello = (s : string) : string => {
    return " "
}
```
- It is a goood practice in TS to explicitly mention return type of func.







