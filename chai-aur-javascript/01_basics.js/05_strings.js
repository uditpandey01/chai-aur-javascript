const name = "udit"   
const age = 23

console.log("my name is " + name + " and my age is " + age)    // bad way of printing string 

console.log(`my name is ${name} and my age is ${age}`)   // new and efficient way of displaying string 
// both outputs the same message

// another way of declaring string
const name1 = new String("udit")  // this also outputs datatype of variable .
console.log(name1)
// string is not an array in js it is an object which stores data in key value pair
console.log(name1[0])  // outputs : u

// now we can use different functions of string
// for length 
console.log(name1.length)
// for uppercase
console.log(name1.toUpperCase())
// for character at spectfic place
console.log(name1.charAt(3))
// to know the index of particular character
console.log(name1.indexOf('t'))
// for substring 
const newString = name1.substring(0, 4)
console.log(newString);
// for slicing 
const anotherString = name1.slice(-8, 4)
console.log(anotherString);
// for triming
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
// for replace
console.log(url.replace('%20', '-'))
// for finding means include
console.log(url.includes('sundar'))
// to split using spaces or characters
console.log(name1.split('-'));