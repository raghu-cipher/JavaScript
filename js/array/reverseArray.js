console.log("Revesre Array");

let array = [1,2,3,4,5];

console.log("array :",array);

// let revrseArray = array.reverse();
// console.log(revrseArray);

let revrseArray1 = []

for (let i = array.length-1 ; i >= 0 ; i --) {
    revrseArray1 = revrseArray1 + array[i]
} 

// ---------------------------------------------------------

let revrseArray2 = [] 

array.map((value) => revrseArray2.unshift(value));
console.log(revrseArray2)

// ------------------------------------------------------

let revrseArray3 = array.map((value,i) => array[array.length-i-1]) ;

console.log(revrseArray3)

//----------------------------------------------

let revrseArray4 = [] ;

for (let item of array) {
    revrseArray4.unshift(item)
}

console.log(revrseArray4)