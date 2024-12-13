//.map() = accept a callback and applies that function 
//         to each element of an array, then return a new 
//         array 

const numbers = [1,2,3,4,5] ; 

const squares = numbers.map(square)

const qubes = numbers.map(cubes)


console.log(qubes)

function square(element) {
    return Math.pow(element, 2)
}

function cubes(element) {
    return Math.pow(element, 3)
}

const students = ['sachin','kohli','rohit','cummins']

const studentUpperCase = students.map(upperCase)
console.log(studentUpperCase)

function upperCase(element) {
    return element.toUpperCase()
}

const studentLowerCase = students.map(lowerCase)
console.log(studentLowerCase)

function lowerCase(element) {
    return element.toLowerCase()
}