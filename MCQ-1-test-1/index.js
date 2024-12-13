// console.log("this mcq test--1-1");

// let person = {
//     "first name" : "Alice",
//     "last name" : "Jane",
//     age : 28,
// };
// let key = "last name";
// let key2 = "first name";
// console.log(person["first name"]); // object lo key kinda chustundi
// console.log(person[key]); // ila iste oka variable kinda define itadi 

// // adding elements to the object; 

// person.designation = "abxdef";
// person["mobileNumber"] = "123456789"
// console.log(person)

// let mblNmbr = "mobileNumber" ;
// console.log(person[mblNmbr]); // 

// person.mobileNumber = "98765432"; // already key unte value ni update chestundi
// console.log(person);


// let myArray = [97, 252, "Mobile", "Laptop"];
// let result = myArray.find(function (arrayItem) {
//     if(arrayItem === "Mobile") {
//         return true ;
//     }else if(arrayItem === 97){
//         return true ;
//     }else {
//         return false ;
//     }
// })

// console.log(result);

// 3 

// let myArray = [4,5,6];

// myArray.unshift(3);
// console.log(myArray);

// myArray.shift();
// console.log(myArray)

// myArray.unshift(1,2);
// console.log(myArray);

// 4

// let laptopDevices = ["Mouse", "CPU","keyboard","Screen","Printer"];
// laptopDevices.shift();
// console.log(laptopDevices.shift());
// console.log(laptopDevices);

//5

// let profile = {
//     name : "akhira",
//     age : 29,
//     designation : "Web Developer"
// };
// console.log(typeof(profile));
// console.log(typeof(JSON.stringify(profile)));

// 6

// let a = [1,2,3];
// a[4] = 4;
// console.log(a);
// console.log(a[3]); 
// console.log(a[4]); 

//7

// let score = 149 ;
// let stringifiedScore = JSON.stringify(score);

// console.log(typeof(stringifiedScore));

// function parser() {
//     let parsedData = JSON.parse(stringifiedScore);
//     console.log(typeof(parsedData));
// }
// parser();

// // 8
// console.log(false == "0"); // true 
// console.log(false === 1);  // false

// 9 

// let myArray = [5,"six",2,8.2];
// myArray.splice(2,0,"one", false);

// console.log(myArray);

// myArray.slice(2,myArray.length);

// console.log(myArray[5]); // 8.2

// 10 
// let teamOne = "50";
// let teamTwo = "20";

// let result = parseInt(teamTwo) + 100 ;

// console.log(result); // 120 
// console.log(result + teamOne) ; // 12050

// 11  ---> if there is no item it retruns -1 ; 


// let squareNumbers = [12, 27, 56, 83];

// squareNumbers.push(27);
// console.log(squareNumbers.lastIndexOf(27)); // 4 
// console.log(squareNumbers);

// squareNumbers.pop();
// console.log(squareNumbers.lastIndexOf(27)); // 1

