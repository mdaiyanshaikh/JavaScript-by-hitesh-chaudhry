// primitive 
// 7 types : String,boolean,number,BigInt,null,undefined,symbol

const city = "kolkata"
let isLoggedIn = false
let num = 12
let numValue = 12.03
let outsideTemp = null;
let myName;

const id = Symbol('123')
const yourid = Symbol('123')
console.log(id === yourid); // false
console.log(typeof id);

/* false reason : Even though both have same '123', they are NOT equal because:
                 Every Symbol is unique.
                Symbol('123') creates a new unique value
                Symbol('123') again creates another unique value
                They are never equal ❌
                */
 const bigNumber = 23564896546n //  BigInt  
 //console.log(typeof bigNumber);
             


//  non - primitive (Reference)
// 3 types : array,objects,functions

let superheroes = ["superman","batman","spiderman","ironman"]

let myObj = { 
    fullName:"maria khan",
    age:16,
    class:10,
    stream:"Arts",
}

let myFunction = function(){
    console.log("declaring function");
    
}

// note: Non-Primitive always return type - Object

// Note : JavaScript is always call by value
// But non-primitives behave like call by reference because they store references

// Yes, JavaScript is dynamically typed
//You don’t need to declare the data type of a variable. 
// The type is decided automatically at runtime, and it can even change later.

