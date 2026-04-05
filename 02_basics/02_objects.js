// singleton - Singleton means only one object is created, 
// and the same object is reused instead of creating multiple objects.

// object literals
// Object literal means directly writing an object with key–value pairs

const jsUser = {
    myName:"maria khan",
    age:15,
    location:"kolkata",
    email:"mariakhan@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser);

jsUser.age = 16
// console.log(jsUser);

// now am using "freeze" in my obejct so that no value can be change or re-wrire

 //Object.freeze(jsUser)
// trying to change value
jsUser.age = 13
// console.log(jsUser); // so no change in the object

// jsUser.greeting1 = function() {
//     console.log("hey from JS");
    
// }
// console.log(jsUser.greeting1());


// jsUser.greeting2 = function() {
//     console.log(`hey from JS ,${this.myName}`);
    
// }
// console.log(jsUser.greeting2());







// suppose you have to use symbol data type in your obeject and then print
// how to do

// const mySymbol = Symbol("key1")
// const obj = {
//     [mySymbol]:"key1",
//     city:"city of joy"
// }

// console.log(obj[mySymbol]); // key1
// console.log(typeof mySymbol); // symbol
// console.log(typeof obj[mySymbol]); // string

// ****************   ********************* ***************************

// const tinderUser = new Object() // singleton object
// console.log(tinderUser); // {}
// const tinderuser = {} // not singleton object
// console.log(tinderuser); // {}


const phoneUser = {}
phoneUser.id = "123abc"
phoneUser.name = "mkhan"
phoneUser.isLoggedIn = false
// console.log(phoneUser);

const regularUser = {
    email:"maria321@gmail.com",
    fullname:{
        userFullName:{
            fisrtName:"maria",
            lastName:"khan"
        }
    }
}

// console.log(regularUser.fullname);

// ----------       ***        -----------

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
const obj3 = {
    5:"a",
    6:"b"
}

// merge all objects
// Object.assign()  -> merges objects and copies properties into a target object

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

// spread operator

const obj4 = {...obj1,...obj2}
// console.log(obj4);

console.log(Object.keys(phoneUser));
console.log(Object.values(phoneUser));
console.log(Object.entries(phoneUser));

console.log(phoneUser.hasOwnProperty("isLoggedIn")); // true
console.log(phoneUser.hasOwnProperty("isLogged")); // false






