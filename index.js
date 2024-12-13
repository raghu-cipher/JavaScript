let a = "hello";
let b = "";
for (let i=0;i<a.length; i++) {
    b += " " + a[i] 
}
console.log(b)
console.log(b.trim())
let arry1 = [2,3]
let arry2 = [1, ...arry1, 4]
console.log(arry2)

function myFunction(...args) {
    console.log(args)
}
myFunction(1,2,3,3,4,5)

const age = 19 ;
const is_eligible = age > 18 ? "adult" : "child" 
console.log(is_eligible)