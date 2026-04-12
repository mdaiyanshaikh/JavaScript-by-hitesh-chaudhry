// reduce

// const myNums = [1,2,3]

// const total = myNums.reduce((accumalator,currVal) => {
//     console.log(`acc:${accumalator},currVal:${currVal}`);
    
//     return accumalator + currVal
// },0)  // 0 is accumaltor instial value i have given
// //console.log(total);

// shppingCart example

const shoppingCart = [
    {
        buyCourse:"java",
        price:999
    },
     {
        buyCourse:"javaScript",
        price:1999
    },
     {
        buyCourse:"data Science",
        price:5999
    },
     {
        buyCourse:"mobiel dev application",
        price:2999
    }
]
// calculate buyCourse

const totalFee = shoppingCart.reduce((accumalator,currFee) => {
    return accumalator + currFee.price
},0)

console.log(totalFee);

