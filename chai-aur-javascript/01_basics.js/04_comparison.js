// ************** NORMAL COMPARISON *************
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// these all give output in boolean form

//  comparing different datatypes 
//  problem arisis when we compare different datatypes
//  while comparing different datatypes js does not give predictable result

console.log("2" > 1) // output : true     // in this string automatically gets converted and then gets compared

console.log(null > 0)    //output : false
console.log(null == 0)   // output : false
console.log(null >= 0)   // output : true

//  In js equality check (==)  and comparison (>,<,etc) works differently 
// comparison converts null into a number , treating it as 0.
// thatswhy we get those outputs 

console.log(undefined > 0)  
console.log(undefined == 0)
console.log(undefined >= 0)
//  these all outputs false 

// ** STRICT CHECK ** (===)
// this strict check compares strictly not only checks value but also check datatypes of values
 
console.log("2" === 1)
//  this will output false as it first compares values then datetypes hence these are different datatypes so flase 