// ------ 5 ways to remove duplicates 

// sets , Filter , ForEach , Reduce , UnderScore.js 

const fruits = [
    "Apple", "Lemon", "Grapes" , "Banana" , "Orange" , "Lemon" , "Apple"
]

const res = fruits.map(e => console.log(e))

const unique1 = new Set(fruits)
const unique2 = [...new Set(fruits)]

// ------- Filter -------------

const unique3 = fruits.filter((value,index) => {
    // console.log(value,index)
    return fruits.indexOf(value) === index ;

})


// --------For Each ------------------

function uniqueElements(array) {
    const unique = [] ;
    array.forEach((value) => {
        if(!unique.includes(value)) {
            unique.push(value)
        }
    })
    return unique 
}

const unique4 = uniqueElements(fruits)

// ----Reduce -------------

function uniqueElements(array) {
    return array.reduce((prev,curr) => {
        console.log(prev,curr)
    }, [])
}

const unique5 = uniqueElements(fruits)
console.log(unique) ; 


// ---------------------------------------------------

const num = [1,2,2,2,4,4,5,7,7,1] 

const result = num.filter((value,index,arr) => {
    return arr.indexOf(value) === index ;
})

console.log(result)

// --------------------------------------------------------

let numbers = [2,3,2,2,33,3,4,4,1,4,6,9,8,9] 
let b = []


console.log(numbers)
