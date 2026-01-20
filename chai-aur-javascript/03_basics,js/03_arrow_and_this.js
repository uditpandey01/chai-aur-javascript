// this keyword
// this keyword is used to refer current context as in below example we are not hard coding username instead we are using this keyword
// so if username changes in future it will output changed username 



const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // this statement will output whole object
    }

}

// user.welcomeMessage()
// user.username = "sam"    // context changed
// user.welcomeMessage()    // this will output changed username 

// console.log(this);   //this will output empty as here current context is null

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()    // when we call/use this in a function then  we will get multiple values of global environment

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// declaring function through arrow 
// we cannot use this in arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// Use arrow functions when you want this from outside.
// Use regular functions when you want your own this.


// basic arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit arrow function . in this we do not have to use  curly braces  and do not use return statement
// and to return object we have to use parenthesis not curly braces
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()