// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.

// Objects can be created using the Object() constructor or the object initializer / literal syntax.

// singleton 
// when we declare object using literal syntax then it is not singleton
// when declaring using constructor it will be singleton

// Literal Syntax :
// const Jsuser = {}   // here it is empty object we can give values which are in form of key value pair

// constructor syntax :
Object.create

//   one special case while using symbol
// declaring symbol
const sym = Symbol("key1")




const Jsuser = {
    name : "udit",
    [sym] : "mykey1",   // for symbol refer with square brakets otherwise it will be treated as normal key
    age : 23,
    location : "Noida",
    email : "ud12@gmail.com",
    daysLoggedIn : ["Monday" , "Saturday"]
}

// now how to access objects
// console.log(Jsuser.email)   // one way is using (.) operator  mostly used

// second way (using square brakets)  some times we ca not use (.) operator so we use this
// example if object has key (full name) then we cannot use . as key has spaces in its name  console.log(Jsuser[full name]) 
 // since all the keys names are of type string by default

//  To change values in objects 
// Jsuser.email = "hp12@google.com"

// To avoid changes we will use a method (freeze)
// Object.freeze(Jsuser)

// now after this statement all changes made will be waste or they are not changed

// we can add functions also in object
// adding function and declaring 
Jsuser.greeting = function(){
    console.log("Hello JS user");
}

// Accessing funtion 
// return Jsuser.greeting()

Jsuser.greetingtwo = function(){
    console.log(`Hello JS user ,${this.name}`)
}

// when we have to reference same object we will use this keyword




