const marvel_heros = ["Thor" , "IronMan" ,"Spiderman"]
const dc_heros = ["Batman" , "superman" , "flash"]

// now what if i push second array into first one 

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)  // now this will not add all elements into first array else it will add second array as an element 
// as in javascript array can hold all values of different datatypes 
// we can console element from the second array in this way for this particular example
// console.log(marvel_heros[3][1]) // outputs superman

// we can merge two arrays by using concat function
// console.log(marvel_heros.concat(dc_heros))

// what if we have multiple arrays to merge 
// so we will use a function called spread 

const new_heroes = [...marvel_heros , ...dc_heros]
console.log(new_heroes)

// this is known as spred method

//  what if i have arrays inside array
// we will use a function named flat

const new_array =[1,2,[3,4,5] , 6 , [7 ,8,9,[10,11,121]] ]
const new_flat_array = new_array.flat(Infinity)
console.log(new_flat_array)

// we have to pass depth in flat function if we pass infinity it will automatically adjust

console.log(Array.isArray("udit"))  // by using isarray function we can check whether the given object is array or not 
console.log(Array.isArray(new_array))  // it will return true

// to convert a string into array we use (from function)

// console.log(Array.from("udit"))
const a = Array.from("udit")
console.log(a)

const score1  = 100
const score2  = 200
const score3  = 300

const arr = Array.of(score1,score2,score3)
console.log(arr)

// (of) function used to convert in array using different variables
