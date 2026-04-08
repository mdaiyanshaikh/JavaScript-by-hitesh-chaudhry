//

const user = {
    userName:"Maria Khan",
    price:999,

    welcomeMessage: function(){
        // console.log(`${this.userName}, welcome to website`);
        // console.log(this); // this talk about current context / value
        
        
    }
   //  user.welcomeMessage()  ->Syntax Error: Cannot put this inside object
}

/* user.welcomeMessage()
user.userName = "Inaya noor" // ithis always points to the current object at the time of function execution.
user.welcomeMessage()
*/
// console.log(this); // output -> {} In Node.js, the global this (outside any function) refers to an empty object {}

                                //   This empty object is actually module.exports 




  function chai() {
    let username = "khan"
    console.log(this.username); // undefined
    /*
    why undefined 
    this does NOT have access to local variables declared with 
    let, const, or var inside a function!

    Why can't this access local variables?
    Because local variables are stored in a different place!
    */ 


   //console.log(this); // inside function 'this keyword' Points to: GLOBAL object (FULL of stuff)
    
  }  
  // chai()   
  

  //  ---------------------------- *** ------------------------------------------

  


//  Basics Arrow function
// explicit return
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,5));


// implicit return

/* Note : Implicit return = returning a value without using the return keyword. 
The arrow function returns automatically! */

const addTwo = (num1,num2) => num1 + num2
console.log(addTwo(10,10));

  


