// Immediately Invoked Function Expressions (IIFE)

//  Used to :-
// 1.  when we have to invoke a function immediately  
// 2.  to reduce the global scope pollution inside a function means less usage global variable inside function


// so to use iife we surround the function definition in parenthesis and call it immeditely after declaration

// ()()   // first parenthesis -> function declaration , second parenthesis -> function call.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // this semicolon is important

// while declaring another iife just after one may show some error as the first iife do not know where to 
// end the scope so always use a semicolon before declaring another iife

// passing of parameters will be same as normal function 
// assume this iife as normal function call e.g chai("we pass parameter here ") similarly pass the 
// parameters in second bracket of iife  

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('udit')