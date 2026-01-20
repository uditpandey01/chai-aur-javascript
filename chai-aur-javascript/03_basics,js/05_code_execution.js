// There are three types of execution contexts in JavaScript:
// -> Global execution context: This is the default execution context that is created when the code is executed in a global scope.
// -> Function execution context: This is the execution context that is created when a function is called.
// -> Eval execution context: This is the execution context that is created when the eval() function is called

// // 1.JS creates Global excution context 
// Global Execution Context contains two phases
//  1. memory component 

// 2. code execution component --- In memory component memory is reserved for variables(initially assinged with undefined) 
// and functions(assigned with defination) whereas in code execution component all assignment of variables, calculations etc. are performed.

// // 2.Next it creates memory phase

// // 3.Memory phase - In this phase,the variables are set to undefined 
// //   until the execution phase(next phase) and the functions are set to their definitions.

// // 4.Next it creates the execution phase

// // 5.Execution phase - In this phase,the variables are initialsed to given values and 
// //   when the function s are called,it creates a memory phase and execution phase for the function 
// //   just like the main one.
// // Returned value is passed to the global environment
// // after ececution of the function Execution context gets deleted as well when the function ends

// // For live demo:
// // browser > inspect > Sources
// // 1.then create a snippet by clicking on the arrow(>>) next to workspace
// // 2.then write down some functions in the created snippet ,do save them by ctrl+S 
// // 3.Create breakpoints and run the code and keep eye on call stack to visualize how it works.
// // correct me if there are any mistakes or add to this if something is missing.
// // create a snippet with few functions and visually experience the call stack.