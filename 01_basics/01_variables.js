const accountId = 14230131
let accountEmail ="akshat@google.com"
var accountPassword = "12345"
accountCity = "Prayagraj"

// accountId = 2 // not allowed

accountEmail = "golu@google.com"
accountPassword = "12345"
accountCity = "Delhi"
let accountstate;

/*
agar java script me bina kuch declare kiye aise hi chhod do to uski value undefined aati hai
*/


console.log(accountId);
/*
Prefer not to use var becasue of issue in block scope and functionl scope
*/

console.table([,accountId,accountEmail,accountPassword ,accountCity])
