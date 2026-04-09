// IIFE - Immediately Invoked Function Expression
// ()()  - syntax first () means -> function defintion
//               second () means -> function execution


(function chai() {
    // name IIFE
    console.log(`Database Connected`);
    
})();  // IIFE syntax

// note Immediate Execution
//      Creates a New Scope: Variables declared inside an IIFE are not accessible outside
//      Doesn't Pollute Global Scope

// another example with arrow function with value

( (myName) => {
    // simple IIFE - means IIFE without name
    console.log(`Database Connected ${myName}`);
    
})('mKhan')
