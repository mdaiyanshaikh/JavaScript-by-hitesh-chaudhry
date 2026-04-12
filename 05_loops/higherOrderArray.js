// for of loop

const myArray = [1,2,3,4,5]

for (const element of myArray) {
   // console.log(element);
    
}

const greetings = "hello world!"

for(const greet of greetings){
    if(greet == ' '){
       break
    }
  //  console.log(greet);
    
}

// *********************
// map

const map = new Map()
map.set('IN',"India")
map.set('Ir',"Iran")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map); // Map(3) { 'IN' => 'India', 'Ir' => 'Iran', 'Fr' => 'France' }
                // keys in a Map are always unique. and it  returns in same order


// map using for of loop

for (const [key,value] of map) {
  //  console.log(key,'-',value);
    
}

// for - of loop does not iterate not object it will give error
// so we use for in loop -> for object(to iterate)

// for of - array ,string
// for in - object
// map - for of loop 

const myObject = {
    js:"javaScirpt",
    cpp:"cpp",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
   
  //  console.log(key); // this will give key value- > js 
                                                //   cpp
                                                //   rb
                                                //   swift

 // value
 //console.log(myObject[key]);  /*
                               //javaScirpt
                               //cpp
                               //ruby
                               //swift by apple */

  // key and value
  
//  console.log(`${key} -> ${myObject[key]}`);
  /*
js -> javaScirpt
cpp -> cpp
rb -> ruby
swift -> swift by apple
@mdaiyanshaikh ➜ /worksp
   */
                                            
 
        
}


const program = ["java","javaScript","c++","python"]
for (const key in program) {
   // console.log(program[key]);
    
   // console.log(`${key} -> ${program[key]}`);
    
    
}

/*
for...in = loops through keys/properties

for...of = loops through values

for (const [key,value] of map) {
  //  console.log(key,'-',value);
    
}
 */

// for each loop

const love = ["i","know","you","don't","love","me","but","i","pray","for","you"]

// love.forEach( (loveVal) => {
//   console.log(loveVal);
  
// })

// another way
// printme -> keyword

// function printme(loveVal){
//     console.log(loveVal);
    
// }

// love.forEach(printme)

/*
forEach -> returns three things 1.val
                                2.index
                                3.array
 */


// const play = ["football","cricket","badminton","basketball"]

// play.forEach( (val,index,arr) =>{
//     //console.log(val,index,arr);
    
// })


const brokenLove = [
    {
        love:"mKhan",
        broke:"zain"
    },
    {
         love:"anusha",
        broke:"haris"
    },
    {
         love:"shagufta",
        broke:"zeeshan"
    }
]

brokenLove.forEach( (val) => {
     // console.log(val.love);
    //  console.log(val.broke);
      console.log(`${val.love} -> ${val.broke}`);
      
      
      
})
                                





