// CONTROL FLOW

if(2 === "2"){
    console.log("executed"); // nothing will print
    
}

// const sheLove = "yes"

// if(sheLove == "no"){
//     console.log("he also loves her");
    
// }else{
//     console.log("it was one sided");
    
// }


// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);  
    
// }


// example
//1. && operator
const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("allow for shopping");
    
}

//2. || operator
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user can log in");
    
}

