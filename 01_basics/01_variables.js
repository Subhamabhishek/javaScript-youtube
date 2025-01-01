const accountId = 25673
let accountEmail = "abcdefg@gmail.com"
var accountPassword = "123456"
accountCity = "Cuttack" //NOT PREFERABLE BUT CAN WORK IN JS//

let accountState;


// accountId = 321456  -> //not ALLOWED

accountEmail = "sbhs@gmail.com"
accountPassword = "564802"
accountCity = "Hydrabad" 

console.log("accountId is : - ", accountId);

/*
Prefer not to use var 
because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


