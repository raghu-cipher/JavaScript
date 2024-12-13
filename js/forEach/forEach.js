// .forEach() = method used to iterate over the elements 
//         of an array and apply a specified function (callback)
//             to each element 

//             array.forEach(callback)
//             elements,index.array are provided

let numbers = [1,2,3,4,5]

let frutis = ["apple","orange","banana","coconut"]



// numbers.forEach(double)

// numbers.forEach(display)

function double(element,index,array) {
    array[index] = element * 2 ;
}

function display(index) {
    console.log(index)
}

display();

frutis.forEach(capitalize)
frutis.forEach(display)


function capitalize(element,index,array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element) {
    console.log(element)
}

function numbersDisplay() {

}
