// Array 
// JavaScript arrays are resizable and can contain a mix of different data types.

// declaring array
let myArr = [0,1,2,3,4,5]
let myHeroes = ["ironman","spiderman"]

// console.log(myArr[1]);

// Array Methods

// myArr.push(6) // Adds 6 to the end of the array.
// myArr.push(7)
// myArr.pop() // Removes the last element from the array
//console.log(myArr);

// myArr.unshift(9) // Adds 9 to the beginning of the array.
// myArr.shift() // Removes the first element from the array
// console.log(myArr);

// console.log(myArr.includes(100));
// Checks if 100 exists in the array
// Returns true or false
// console.log(myArr.indexOf(3));
// Finds the index (position) of element 3

const newArr = myArr.join()
// console.log(myArr); // type -> object
// console.log(newArr); // type -> string

// slice splice

let array = [0,1,2,3,4,5]

// console.log("A",array);

// slice -> returns portion, end not included, no change in original
 const slice_op = array.slice(1,3)  
//  console.log(slice_op);
//  console.log("B",array);

 // splice -> removes elements, modifies original array
 const splice_Op = array.splice(1,3)
//  console.log(splice_Op);
//  console.log("C",array);


const marvelHeros = ["thor","spiderman","ironman"]
const dcHeros = ["superman","batman","flash"]

// experiment 

//marvelHeros.push(dcHeros)
//console.log(marvelHeros); // problem array inside array [ 'thor', 'spiderman', 'ironman', [ 'superman', 'batman', 'flash' ] ]

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// spread operator  -> Take all values and spread them out.
// const allHeros = [...marvelHeros, ...dcHeros]
// console.log(allHeros);
// console.log(allHeros[0]);

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const simpleArray = arr.flat(Infinity) It converts multi-level arrays into a single-level array
// console.log(simpleArray);

console.log(Array.isArray("mkhan")); // false bcz it is a string
console.log(Array.from("mkhan")); // it will convert into array [ 'm', 'k', 'h', 'a', 'n' ]
console.log(Array.from({name:"ayan"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

// make this var into array
// -> we will use Array.of to do this

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]












 
 
 
 









