/*
1.JavaScript has prototypal behavior. When trying to access a property or method, J
avaScript keeps searching up the prototype chain until it finds the value or reaches null. 
Concepts like classes, this, and inheritance in JavaScript are all built on top of prototypes."

2.In JavaScript, almost everything can behave like an object, but primitive values (string, number, boolean, null, undefined, symbol) are not objects
*/


function multipleBy5(num){
  return num * 5;
}

multipleBy5.power = 2
//console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); /* When you create a regular function in JavaScript, 
                                    it automatically gets a prototype property that is an empty object {}. 
                                    This object is meant to hold methods and properties that will be inherited by objects 
                                                       */



function createUser(userName,score){
  this.userName = userName
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}

createUser.prototype.printMe = function(){
  console.log(`the score is ${this.score}`);
  
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)
chai.printMe() 
tea.printMe()


// PROTOTYPE section starts:-
// let myName = "MohammadAiyan       "
// i have to make a property wherever i use trueLength it gives exact length we dont
// have to write always this -> trim().length

//console.log(myName.trim().length);

//console.log(myName.length);


let myHero = ["thor","spiderman"]

let heroPower = {
  thor:"hammer",
  spiderman:"sling",

  getSpiderPower: function(){
    console.log(`spide power is ${this.spiderman}`);
    
  }
}

// direct inejecting a method in object

Object.prototype.maria = function(){
  console.log(" maybe she will one day also do (In Shaa Allah)");
  
}

//heroPower.maria()
//myHero.maria();


// Inheritance

const user = {
  userName:"maria",
  email:"merry123@gmail.com"
}

const teacher = {
  makeVideo:true
}

const teachingSupport = {
  isAvailable:false
}

const TAsupport = {
  makeAssignment:'js Assignment',
  fullTime:true,
  __proto__: teachingSupport
}

teacher.__proto__ = user // teacher can inherit the property of user

// to inherit use - > MODERN APPROACH

Object.setPrototypeOf(teachingSupport,teacher)


let myName = "MohammadAiyan       "

let anotherName = "Zain"

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
  
  
}
anotherName.trueLength() // zain
myName.trueLength() // MohammadAiyan

"mariaKhan".trueLength() 
"aiyanShaikh".trueLength()
