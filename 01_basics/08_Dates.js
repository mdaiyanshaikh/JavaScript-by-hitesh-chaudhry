// DATES

/*
let myDate = new Date(); // created object
console.log(myDate.toString()); // Wed Apr 01 2026 19:49:08 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()); // 2026-04-01T19:49:08.768Z
console.log(myDate.toJSON());
console.log(typeof myDate); // object
*/

let myCreatedDate = new Date(2026,3,2)
// console.log(myCreatedDate.toDateString());  // Thu Apr 02 2026

let createdDate = new Date("2014-01-23")
// console.log(createdDate.toDateString());

let myTimeStamp = Date.now(); // 👉 Gives current timestamp (right now)
                              //   👉 in milliseconds since Jan 1, 1970
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));  // It gives current time in seconds (timestamp)

let newDate = new Date()
// console.log(newDate);
// console.log((newDate.getDate()));
// console.log(newDate.getDay());
// console.log(newDate.getMilliseconds());

newDate.toLocaleString('default',{
    weekday: 'long'
})











