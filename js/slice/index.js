//

const numbers = [1,2,3,4,5] ;

const numbers2 = numbers.slice(1) ; // ---- [1,2,3,4,5] ;
const numbers3 = numbers.slice(1,4) ; // ---- [2,3,4] ; end index not inluded.
const numbers4 = numbers.slice(-3) ; // ---- [3,4,5] ;
const numbers1 = numbers.slice(2)
// console.log(numbers1)


// --------Splice ----------------

const sliceNumb = [1,2,3,4,5] 

// const deleted = sliceNumb.splice(2,3) ; // ---[1,2]

const deleted = sliceNumb.splice(2,3,6,7,true,5.8);
const a = sliceNumb.splice(0,2,2,1)

console.log(sliceNumb);

// ------------ Concat -----------

const x = [1,2,3] ;
const y = [4,5,6] ;
const z = [7,8,9] ;

const xyz = x.concat(y,z) ;
console.log(xyz)

// --------- inludes --------------

const fruits = ["apple","Orange","Mango"] ;

const res = fruits.includes("Orange") ;

if (res) {
    console.log("Yummy..!");
} else {
    console.log("Sad...Let's buy a an orange")
}