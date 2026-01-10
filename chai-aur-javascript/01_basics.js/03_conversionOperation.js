let score = "33";

// console.log(typeof score) // to view datatype of score.  here type/datatype is String 
// CONVERSION 

let valueInNumber = Number(score)  // we have converted string value in integer and stored it in new variable 
// console.log(typeof valueInNumber) // now type will be number

// NOW WE WILL CONVERT ONE ALPHANUMERIC VALUE 
let one = "33abc"
// console.log(typeof one)

let valueInNumber1 = Number(one)
// console.log(typeof valueInNumber1)   // here our string value gets converted into number 

// console.log(valueInNumber1)  // but here when we print this value it will return NaN i.e Not a Number . Hence our string gets converted into number but that string is not an actual number .


// for conversion of NULL it will return 0.
// for conversion of UNDEFINED it will return NaN.
// for true => 1
// for false => 0 


// we can convert number into string by replacing Number to String.
// and to convert number into boolean replace Number to Boolean.



//  ************ OPERATIONS ************

let value = 3
let negvalue = -value
console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2/2)
// console.log(2%2)
// console.log(2*2)
// console.log(2**3) // for raise to power we use double star


// string adding
let str1 = "hello"
let str2 = " udit"
let str = str1 + str2
// console.log(str)

console.log("1" + 2)
console.log("1" + "2")
console.log(1 + "2")
console.log(1 + 2 + "2")     // output : 32
console.log("1" + 2 + 2)     // output : 122

//  if string is first then all other elements are treated as string and if not then all calculations are done then string is concatenated
// all these three statements give same output 12
// these conversions are based on certain guidelines so do not rely on this type of conversions 

let num1 ,num2 ,num3
num1 = num2 = num3 = 2 + 2

// pre increment or post increment  