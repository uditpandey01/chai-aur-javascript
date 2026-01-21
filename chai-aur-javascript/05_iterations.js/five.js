// fot each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){      // this is the syntax    arrayname.forEach(function (keyname) {})
//     console.log(val);
// } )

// we simply writes a function without name in the forEach bracket

// coding.forEach( (item) => {           // using arrow declaration
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)              // another variation declaring a function outside and referencing it inside forEach  bracket

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);           // we can also use forEach loop for array of objects 
} )