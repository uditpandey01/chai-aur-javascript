// when declaring using constructor it will be singleton

// constructor syntax :
const tinderuser = new Object()    // this is singlrton 

// literal syntax :
// const tinderuser = {}  // this is non singlrton

//  adding values in object
tinderuser.name = "sammy"
tinderuser.id = "abc123"
tinderuser.IsLoggedIn = false

console.log(tinderuser)


// now we are adding objects inside object inside object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}


// to access the element of insider objects we can do
// console.log(regularUser.fullname.userfullname.firstname);


// we can combine multiple objects inside one object it is just similar to arrays . We can use assign operator or use spread operator
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// whenever we get values from database we get in the form of array of objects now we can loop through , or just print values 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// like this
users[1].email
// console.log(tinderUser);


//  we can get only keys or only values as output 
//  when we output keys or values we will get an array of keys or values

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// this is used to check whether a particular property belongs to an object
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
