//.filter() = create a new array by filtering 
//             out elements 

// let numbers = [1,2,3,4,5,6,7] 

// let evenNumbers = numbers.filter(isEven)
// console.log(evenNumbers)

// function isEven(element) {
//     return element % 2  === 0 ;   // moudules " % "

// }

// let oddNumbers = numbers.filter(isOdd)
// console.log(oddNumbers)

// function isOdd(element) {
//     return element % 2 !== 0 ;
// }

// const ages = [16,17,18,19,20,60] ;

// const adults = ages.filter(isAdult)
// const children = ages.filter(isChild)
// console.log(children)

// function isAdult(element) {
//     return element >= 18; 
// }



// function isChild(element) {
//     return element < 18 ;
// }

// const words = ["apple",'orange','banana','kiwi','pomegranate','coconut'];

// const shortWords = words.filter(getShortWords)
// const longWords = words.filter(getLongWords);

// console.log(longWords)

// function getShortWords(element) {
//     return element.length <=6 ;
// }

// function getLongWords(element) {
//     return element.length > 6 ;
// }

//-------------------------------------------------------------------------------

// const numbers = [1,4,9,16,25] ;
// const evenNumbers = numbers.filter((eachNum) => eachNum % 2 === 0 ) ;
// const oddNumbers = numbers.filter((eachNum) => eachNum % 2 !== 0  ) ;
// console.log(oddNumbers)

const users = [
    {userName : "dcode", active : true},
    {userName : "jen.1", active : false},
    {userName : "alex95", active : true},
]

// const activeUsers = users.filter((eachUser) => eachUser.active === true) ;
// const delteUser = "alex95";
// const updatedList = users.filter(user => user.userName !== delteUser);
// console.log(updatedList)

// ----filter gives the new Array 

// const userNameToFind = "dcode" ;
// const user = users.filter(user => user.userName === userNameToFind) ;
// console.log(user) ;

// const userNameToFind = "dcode1" ;
// const user = users.filter(user => user.userName === userNameToFind) ;
// console.log(user) ; // ----- undefined 

// ---------find --- it gives the Object  

// const userNameToFind = "dcode1" ;
// const user = users.find(user => user.userName === userNameToFind) ;
// console.log(user) ; 

// const userNameToFind = "alex95" ;
// const user = users.findIndex(user => user.userName === userNameToFind) ;
// console.log(user) ; // ------: 2 

// const userNameToFind = "alex951" ;
// const user = users.findIndex(user => user.userName === userNameToFind) ;
// console.log(user) ; //------- : -1 

//-----------------------------------------------------------------------------------

// const students = [
//     {name : "A", Mark : 98 },
//     {name : "B", Mark : 93 },
//     {name : "C", Mark : 94 },
//     {name : "D", Mark : 98 }
// ]

// const res = students.filter(e => e.name === "A" || e.name === "B") ;
// console.log(res)
// const marks = res.map( e => console.log(e.Mark));

// ---------------------------------------------------------------------------

const items = [
    {name : "Bike",     price : 100} ,
    {name : "TV",       price : 200} ,
    {name : "Album",    price : 10} ,
    {name : "Book",     price : 5} ,
    {name : "Phone",    price : 500} ,
    {name : "Computer", price : 1000} ,
    {name : "Keyboard", price : 25}
]

const filteredItems = items.filter((item)=> {
    return item.price <= 100 ;
})

console.log(filteredItems)

// -----------------------------------------------------------------------

let people = [
    {name : "John",   age : 42,  job : "Developer"},
    {name : "Jaclin", age : 31,  job : "Teacher"},
    {name : "John",   age : 20,  job : "Developer"},
    {name : "Sisley",   age : 28,  job : "Coach"},
    {name : "John",   age : 36,  job : "Nurse"},
    {name : "John",   age : 59,  job : "Doctor"},
    {name : "Hillard", age : 17,  job : "Police Officer"},
    {name : "Randee",   age : 46,  job : "Firefighter"},
    {name : "John",   age : 19,  job : "Developer"},
    {name : "John",   age : 58,  job : "Developer"},
] ;

const myArr = people
.filter(person => person.name === "John")
.filter(person => person.job === "Developer")
.filter(person => person.age >= 21 )

console.log(myArr)