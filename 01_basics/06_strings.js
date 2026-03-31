const myName = "mKhan"
const repoCount = 50

//console.log(`hey my name is ${myName} and my repo count is ${repoCount}`)

// declairng string

const gameName = new String("mKhan-Game-com")
/*
console.log(gameName);
console.log(gameName[2]); // h
console.log(gameName.__proto__); // {} -> object
console.log(gameName.length); // 9
console.log(gameName.toUpperCase()); // MKHANGAME
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));
*/

// const newStr1 = gameName.substring(0,4) //  mkha 
// console.log(newStr1);

// const newstr2 = gameName.slice(0,4) // mkha
// console.log(newstr2);

const newStr3 = gameName.slice(4,0)
//console.log(newStr3);

// note : 👉 slice() supports negative index
//👉 substring() does NOT support negative

const newString = "        workHard         "
// console.log(newString);
// console.log(newString.trim());

const url = "https://mKhan.com/mKhan%20Player"
console.log(url.replace("%20","-")); // output -> https://mKhan.com/mKhan-Player
console.log(url.includes('mKhan')); // is Mkhan have in url -> true
console.log(url.includes("ayan")); // is ayan have in url -> false

console.log(gameName.split('-')); // [ 'mKhan', 'Game', 'com' ]


















