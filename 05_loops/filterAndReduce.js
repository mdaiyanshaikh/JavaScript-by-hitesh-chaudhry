// filter -> it stores and returns the value 
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// another way
// const newNums = myNums.filter( (num) => {
//     return num  > 5
// })
// console.log(newNums);

// using for loop

// const newNums = []

// myNums.forEach( (num) => {
//    if(num > 5){
//     newNums.push(num)
//    }
// })
// console.log(newNums);


// ************* example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

let userBooks = books.filter((booksVal) => booksVal.genre === 'History' )


 //console.log(userBooks); 

// publish after 2000
userBooks = books.filter((booksVal) => booksVal.publish >= 2000 )
//console.log(userBooks);
 
// publish after 1995 && genre should be history

userBooks = books.filter((booksVal) => {
    return booksVal.publish >= 1995 && booksVal.genre === 'History'
} )
// console.log(userBooks);


// using map
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const myNumb = numbers.map((num) => {
//     return num + 10
// })
// console.log(myNumb);

// using for each

const numbers = [1,2,3,4,5]
numbers.forEach((num) => {
//console.log(num + 10);
 
})

// chaining
const myNums = [1,2,3,4,5]
const newNums = myNums
               .map((num) => num * 10) // 10,20,30,40,50
               .map((num) => num + 1)  // 11,21,31,41,51
               .filter((num) => num >= 30 ) // final output -> 31, 41, 51

console.log(newNums);





