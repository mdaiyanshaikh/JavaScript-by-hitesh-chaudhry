// JavaScript Execution Context
// JS is single threaded

// execution step 
//{Js code } - > Global execution context
/*

Global execution context
Function execution context
Eva execution context

*/  

// Js code run in two phases
// 1. memory creation phase -> Allocates memory for variables/functions
//                               Stores entire function body
//                                NO code runs

// 2. Execution Phase -> Executes code line by line , assigning actual values to variables.

// let understand through example

let val1 = 10
let val2 = 5
function addNum(val1,val2){
    let total = val1 + val2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(4,7)

// cycle 1
// 1. sbse pehle global execution hoga - jiske andar 'this' ko allocate kiya jayega
/* 2. Memory Phase - 
                    val1 -> undefined
                    val2 -> undefined
                    addNum - > defination {everything inside curly braces}
                    result1 -> undefined
                    result2 -> undefined
*/

// cycle 2 - execution phase
/* 
           val <- 10
           val <- 5
 result    addNum -> new variable environment + execution thread -> jitni baar function execute hoga 
                                                                    utni baar yeah banega 
                                                                    (new variable environment + execution thread )
                    
                    Memory Phase -> val1 = undefined
                                    val2 = undefined
                                    total = undefined
                                    
                    execution context val1 = 10
                                      val2 = 5
                                      total = 15 - > this total will go to the global context                
 */



// ---------------------------    ***********      ---------------------------

// Call stack 
// The Call Stack is a mechanism that keeps track of function calls in your JavaScript code. 
// It works like a stack data structure (LIFO - Last In, First Out), 
// meaning the last function that gets called is the first one to finish and be removed.