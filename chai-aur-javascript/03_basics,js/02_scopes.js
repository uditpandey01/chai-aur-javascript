// Nothing new , we know global scope has scope throughout the program and block scope is accessible only inside a block

//var c = 300

// we dont use (var) as it has problem with scope it do not understand concept of global and local

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

// only thing to understand here is child function can access parents variable




if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// two ways of defining function in first we are just defining function and in second we are storing value returned by the 
// function in a variable 



// so in first type of declaring we can call the function before declaration of function
// but in second type we cannot this is known as "hoisting"



console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}