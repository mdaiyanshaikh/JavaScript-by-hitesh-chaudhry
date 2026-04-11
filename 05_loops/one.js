// for - loop
for(let i =0; i<=10; i++){
    const element = i
    if(element == 5){
      //  console.log("5 is the best number");
        
    }
   // console.log(element)
}

for (let i = 1; i <= 5; i++) {
    //console.log(`outer loop: ${i}`);

    for (let j = 1; j <= 5; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i * j);
        
            
    }
     
}


// ********** Array **********

const myArray = ["Aiyan","loves","you","Mkhan"]
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
   // console.log(element);
    
}

// break and continue

// for (let i = 1; i <= 10; i++) {
//     if(i == 3){
//         console.log(`3 detected`);
//         break;
        
//     }
//     console.log(i);
    
    
// }

for (let i = 1; i <= 10; i++) {
    if(i == 3){
        console.log(`3 detected`);
        continue;
        
    }
    console.log(i);
    
    
}