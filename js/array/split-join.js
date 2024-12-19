console.log("Split-Join");

/* The split method is used to split a string into an array 
   of substrings and retruns the new array.
  
   Syntax = string.split()
          = string.split("separator",limit);

*/

const string = "How are you doing today" ;

console.log(string.split()); // -- 
console.log(string.split(""));
console.log(string.split(" "));
console.log(string.split("o"));
console.log(string.split(" ",2));

const string2 = "How-are-you-doing" ;

console.log(string2.split("-"));
console.log(string2.split("-",2));

//-------------------------------------------------

/*
   Join = The join method returns the array as a string the elements
          will be join by a spcecified separator.
*/

const array = ["Banana","Apple", "Orange","Apple", "Mango"]

console.log(array.join("*"));




// -----------Trim -----------------------

const greeting = "   Hello world ";
console.log(greeting.trim());

// --------Replace -------------------------

const originalString = "Hello,world";
console.log(originalString.replace("world","universe"));


//-------------------------------

const phoneNumber = "123 456 5678" ;
const phoneNumber1 = phoneNumber.split(" ");
console.log(phoneNumber1.join(""));

let a = "";

for (let i = 0; i < phoneNumber.length;i++) {
    if (phoneNumber[i] !== " ") {
        a = a + phoneNumber[i]
    }
}

console.log(a)

let numberWithoutSpace = phoneNumber.replaceAll(" ","");
console.log(numberWithoutSpace)