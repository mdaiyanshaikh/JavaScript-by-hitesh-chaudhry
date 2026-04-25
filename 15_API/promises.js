// .then() -> response dega
// .catch() -> error dega
// .finally() -> give everything

const promiseOne = new Promise((resolve,reject) =>{
setTimeout(() =>{
   // console.log("Async task is complete");
    resolve()
},1000)


});

promiseOne.then(() =>{
  //console.log("promised fulfilled");
  
})

// 
new Promise((resolve,reject) =>{
   setTimeout(() => {
  // console.log("async task2 is complete");
   resolve()  // Without resolve() 👉 .then() will NOT run
              //   Promise will stay in pending state
   
   },3000)
}).then(() => {
 // console.log("promise fulfilled");
  
})



const promiseThree = new Promise((resolve,reject) =>{
  setTimeout(() => {
  //  console.log("async task three");
    resolve({userName:"maria Khan",emailId:"marry@gmail.com"})
    
  },1000)
})

promiseThree.then((user) => {
//  console.log(user);
  
})

//
const  promiseFour = new Promise((resolve,reject) => {
     setTimeout(() => {
        let error = false;
        if(!error){
          resolve({data:"list of books",bookName:"merchant of venice"})
        }
        else{
          reject("something went wrong")
        }
     },2000)
})

promiseFour
.then((user) => {
  console.log(user);
  return user.data;
  
})
.then((myData) =>{
  //console.log(myData);

  
})
.catch((error) => {
 //  console.log(error);
   
})
.finally(() => {
  //console.log("the promise is either resolved or rejected");
  
})

// async - thore der wait krta hai kaam hone ka agar woh kaam ho jat ahai tab hi aage bhdta hai
//          warna wahi par error de deta hai

const asyncPromiseFive = new Promise((resolve,reject) => {
   setTimeout(() => {
    let error = true;
    if(!error){
      resolve({myName:"Zain Khan",Goal:"Job"})
    }
    else{
      reject("ERROR: JS went wrong")
    }
   },2000)
})

// doing .then() work through another way called -> async and await


async function consumePromiseFive(){
   try {
    const response = await  asyncPromiseFive
    // console.log(response);
    
   } catch (error) {
   // console.log(error);
    
   }
   
}

consumePromiseFive()

// a new topic -> fetch()

// async function getAllUsers() {
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log("ERROR : NOT FOUND",error);
    
//   }
    
// }
// getAllUsers()

// doing above one through .then()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
return response.json()
})
.then((data) => {
  console.log(data);
  
})
.catch((error) => {
console.log(error);

})


// fetch() => global function 
/*
fetch() returns a Promise
That promise rejects only when there is a network error
(like no internet, DNS issue, blocked request, etc.)
It does NOT reject for HTTP errors like 404, 500, etc.

* fetch only fails on network error, not on HTTP error (use response.ok to handle it)
*/ 

