console.log("Arrays")

// array = a variable like structure that can hold more than 1 value  

let fruits = ["apple","orange","banana","coconut"] ;

console.log(fruits);

// -- add item to last position of array 

let addItem = fruits.push("grapes") ;
console.log(fruits);
// -- remove the item last position of array 

let remvItem = fruits.pop();
console.log(fruits)

// -- add 1 or more items to begining of an array

let addItem1 = fruits.unshift("kiwi","dragon");

console.log(fruits)

// -- remve starting index of item in array 

let remvItem1 = fruits.shift();
console.log(fruits);

// -- lenght 

let indexOfArray = fruits.indexOf("dragon");
console.log(indexOfArray) // -- 1 

let indexOfArray1 = fruits.indexOf("kiwi");
console.log(indexOfArray1) ; // ---: -1 

console.log(fruits.length);

for (let i = 0; i < fruits.length ; i++) {
    console.log(fruits[i])
}

for (let item of fruits) {
    console.log(item)
}

// reverse array 

for (let i = fruits.length-1 ; i >= 0 ; i--) {
    console.log(fruits[i])
}

console.log(fruits.sort());
console.log(fruits.sort().reverse())

