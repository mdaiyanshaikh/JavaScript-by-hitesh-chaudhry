// Functions

function myFunction() {
    console.log("M");
     console.log("A");
      console.log("R");
       console.log("I");
        console.log("A"); 
}

// calling function by name 
//myFunction()

// function addTwoNumbers(num1,num2){  // (any value inside called parameters)
//     console.log(num1 + num2);
   
    
// }
// addTwoNumbers(10,10) // when we call function then its called argument

// another example

function addTwoNum(num1,num2) {
    //  let result = num1+ num2
    //  return result
    // another way you can write 
    return num1 + num2
}

const result = addTwoNum(5,5)
// console.log(result);

// loginUserName -> reference
// () - > call
// ("maria") -> maria value hogya 

function loginUserName(userName = "ayan"){ // we can also set default value to loginUserName like this way 
                                  // -> (userName = "ayan")
    if(userName === undefined){
        console.log("Please enter a userName"); // this will exexute only when you dont pass any value
        
        return    
    }
    return `${userName} is just logged in`
}

//console.log(loginUserName("maria")) // maria is just logged in
//  console.log(loginUserName()) // when you don't pass any value then it will return undefined

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,3500,6500)); // here output will be -> 200,400,3500,6500

function calculateCart(val1,val2,...num1){
    return num1
}
// console.log(calculateCart(200,400,3500,6500)); // here output will be 3500,6500 bcz first two value
                                               // will be taken by val1 and val2

// *****************                       *********************                  ******************


const user = {
     userName:"Maria Khan",
     price:199
}

function handleObject(user){
    console.log(`userName is ${user.userName} and price is ${user.price}`);
    
}
// handleObject(user) 
// another way of printing object using function
// handleObject({
//     userName:"Khan",
//     price:299
// })

// ARRAY

const myArray = [200,400,100,600]

function myNewArray(getArray){
    return getArray[1]
}
// call
console.log(myNewArray(myArray)) // 400
    





