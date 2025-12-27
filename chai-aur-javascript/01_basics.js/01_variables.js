const accountId = 1234
let accountEmail = "ud@gmail.com"
var accountPassword = "211212"
accountCity = "delhi"
let accountState



// accountId = 2                     ("this will output an error as const value is fixed and it cannot be changed")



accountEmail = "pandey@gmail.com"
// email got changed hence let is changable but const is not




accountPassword = "414141"
// var is also changable but 
// prefer not to use var
// because of issue in block scope and functional scope.



accountCity = "jaipur"
// city is also changed . In js variables can also be defined without using any keyword but this is bad practice and do not use this 




// to print use this
console.log(accountId)


// To print in form of table use this
console.table([accountEmail,accountCity,accountPassword,accountState])

// here accountState has no value given so it prints undefined .