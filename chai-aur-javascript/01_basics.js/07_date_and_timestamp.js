// Dates 

let mydate = new Date  // created object of date
console.log(mydate)
//  since this does not gives us good redable date we will use functions to make it redable as desired

console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())

// to create your personel date or to show a custom date
let myCretedDate = new Date (2023, 0 ,23,5,23)
console.log(myCretedDate.toLocaleString())  // this will output custom date and time

// ======================= timestamp in date object =====================

let mytimestamp = Date.now()  
console.log(mytimestamp)  // this will return the time in miliseconds 
// now to convert this time in seconds we will do 

console.log(Math.floor(mytimestamp/1000))

//  some more properties of date
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


//  we can customise our date 
newDate.toLocaleString('default', {
    weekday: "long",
    
})