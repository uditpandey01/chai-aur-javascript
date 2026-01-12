const score = 400 // js automatically detects it as number datatype
// defining explicitly
const balance = new Number(500)
// console.log(balance)

//  converting to string
// console.log(balance.toString())
// console.log(typeof balance)


// toFixed function 
// console.log(balance.toFixed(2)) // fixes two places after decimal 

// toPrecise fuction 
const newbalance = 123.45
// console.log(newbalance.toPrecision(4))  // for getting a precise value 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'))  // adds commas to understand bigger values (en-In) is used to represent in indian form


// +++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++
// console.log(Math)  // it is an object having multiple properties
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// to have random values .random() function is used
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


// To have random values in a particular range we use this formula
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)