// this -> refers window object
// node -> refers {} object

function setUseraName(userName){
  this.userName = userName
  console.log("called");
  
}

function createUser(userName,email,password){
     setUseraName.call(this,userName)

     this.email = email
     this.password = password
}

const chai = new createUser("chai","chai45@gmail.com",123)
console.log(chai);


// for interview what is call?
// call takes the current execution context (this) 
// from one function and passes it to another function.