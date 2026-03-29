const accountId = 123;
let accountEmail = "ayan@gmail.com";
var accountPw = "54321";
accountCity = "jaipur";

// accountId = 2;  you cannot assigned value to const again once it declared

// console.log(accountId);
accountEmail = "mkhan@gmail.com"
accountPw = "21212121"
accountCity = "bengaluru"

/* 
var -> var can be re-declared and updated
let -> let cannot be redeclared but can be updated
const -> var cannot be redeclared or updated
*/


console.table([accountId,accountEmail,accountPw,accountCity])