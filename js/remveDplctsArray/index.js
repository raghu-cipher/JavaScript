// ------ 5 ways to remove duplicates 

// sets , Filter , ForEach , Reduce , UnderScore.js 

const fruits = [
    "Apple", "Lemon", "Grapes" , "Banana" , "Orange" , "Lemon" , "Apple"
]

// const res = fruits.map(e => console.log(e))

// const unique = new Set(fruits)
// const unique = [...new Set(fruits)]

// ------- Filter -------------

// const unique = fruits.filter((value,index) => {
//     // console.log(value,index)
//     return fruits.indexOf(value) === index ;

// })


// --------For Each ------------------

// function uniqueElements(array) {
//     const unique = [] ;
//     array.forEach((value) => {
//         if(!unique.includes(value)) {
//             unique.push(value)
//         }
//     })
//     return unique 
// }

// const unique = uniqueElements(fruits)

// ----Reduce -------------

// function uniqueElements(array) {
//     return array.reduce((prev,curr) => {
//         console.log(prev,curr)
//     }, [])
// }

// const unique = uniqueElements(fruits)
// console.log(unique) ; 


// ---------------------------------------------------

const numbers = [1,2,2,2,4,4,5,7,7,1] 

const result = numbers.filter((value,index,arry) => {
    return arry.indexOf(value) === index  ;
})

console.log(numbers)