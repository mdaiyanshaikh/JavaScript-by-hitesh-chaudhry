// SCOPE

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// VAR
// var a =300
// if(true){
//     var a = 30
// }
// console.log(a); // problem a is declare 300 as global scope but its still giving output 30 which is scope var

// Let

// let x = 500
// if(true){
//    let x = 100
//    console.log("inner",x);
   
// }
// console.log("Outer",x); // 500 // 'let' is block scoped, so inner x (100) doesn’t affect outer x (500)

// **********************                *************************                  ********************


// CLOSURE

function one() {
    const userName = "Maria Khan"

    function two(){
        const website = "youTube"
        console.log(userName);
        
    }
    two()
}
// one()

if(true) {
    const userName = "aiyan"
    if(userName === "aiyan"){
        const love = " Mkhan"
        //console.log(userName + love);
        
    }
    // console.log(love); error -> Because const (and let) are block-scoped — 
                          // they only exist inside the {} where they're declared.
    
}
 //console.log(userName);



 // ********** INTERESTING EXAMPLE **************
console.log( addOne(5)); // declaring above function lets see its work or not - > working giving output as 6
 function addOne(num){   // function
    return num + 1
 }
// console.log( addOne(5));

//  addTwo(5) -> Error: Cannot access 'addTwo' before initialization
  const addTwo = function(num){   // function / expression
    return num + 2
 }
 addTwo(5)


 // NOTE 
 // Function declarations are fully hoisted — you can use them anywhere in their scope.

 /* Function Expressions (addTwo):
Only variable declaration is hoisted (not the assignment)

The function assignment happens where it's written in code

You CANNOT call them before the line where they're defined */


