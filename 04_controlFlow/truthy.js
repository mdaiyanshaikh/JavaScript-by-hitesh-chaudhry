const userEmail = "khan.ai"

if(userEmail){
    console.log("got the email");
    
}
else{
    console.log("don't have email");
    
}

// false values ->  false , 0 , -0 , BigInt On , "", null, undefined, Nan
// truthy values -> "0", 'false', " ", [], {}, function(){}

const herEmail = []
if(herEmail.length === 0){
    console.log("Array is empty");
    
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
    
}



// Nullish Coalescing Operator (??) : null undefined 
/*The Nullish Coalescing Operator (??) is a logical operator that returns 
the right-hand side only when the left-hand side is null or undefined. 
Otherwise, it returns the left-hand side. */

let val1;
// val1 = 5 ?? 10 // 5 
// val1 = undefined ?? 15 // 15
val1 = null ?? 20 ?? 15  // 20

console.log((val1));

// Terniary operator
// condtion?true:false

const bookPrice = 400

bookPrice >= 450 ? console.log("i got the book"): console.log("i have less money");


