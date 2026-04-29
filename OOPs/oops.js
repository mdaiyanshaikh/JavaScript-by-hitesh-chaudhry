// object - > collection of properties and methods
// - toLowercase

// why use OOP

// parts of OOP -> object literal

const user = {
  userName:"maria khan",
  isSchhol: true,
  class:10,
  
  getUserDetails: function(){
    console.log("get user details from database");

    console.log(this);
    
    
  }
}

// console.log(user);
// console.log(user.userName);
// console.log(user.getUserDetails());



 // - constructor function , prototype,classes,instances(this,new)

 function user1(userName,age,isSchool){
  this.userName = userName
  this.age = age
  this.isSchool = isSchool
  
  // return this
 }
const userOne = new user1("mariaKhan",15,true);
console.log(userOne);

const userTwo = new user1("mohammad Aiyan",21,true);
console.log(userTwo);

// new keyword → creates a new object
// constructor is called because of the new keyword
// values are assigned to 'this' keyword
// object gets passed to the function (constructor)

 // 4 pillars of OOP 