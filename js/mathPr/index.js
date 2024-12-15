// largest Number  

console.log("Math");

const numbers = [2,3,12,0,-3,9,5,14,21,-21] ;

function maxNum(numbers) {
    let maxN = numbers[0] ;
    let minN = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxN) {
            maxN = numbers[i]
        } if (numbers[i] < minN) {
            minN = numbers[i]
        }
    }
    return {maxN,minN}; 
}

maxNum(numbers);
console.log(maxNum(numbers))

const min = Math.min(...numbers) ; 
console.log(min)

let maxN = numbers[0];
let minN = numbers[0] ;

for (let item of numbers) {
    if (item > maxN) {
        maxN = item 
    } if (item < minN) {
        minN = item 
    }
}

console.log(maxN)
console.log(minN)

// ---------------------------------

let subjects = [
    {name : "Science", mark : 89},
    {name : "Maths", mark : 96},
    {name : "Language", mark : 78},
    {name : "Art", mark : 94}
] ; 

let maxMark = subjects[0].mark ;
let minMark = subjects[0].mark ;

for (let subject of subjects) {
    if(subject.mark > maxMark) {
        maxMark = subject.mark ;
    } if (subject.mark < minMark) {
        minMark = subject.mark 
    }
}

console.log(maxMark);
console.log(minMark) ;

// ---------ForEach ------------------

let maxMark1 = subjects[0].mark ;
let minMark1 = subjects[0].mark ;

subjects.forEach((subject) => {
    if (subject.mark > maxMark1) {
        maxMark1 = subject.mark ;
    } if (subject.mark < minMark1 ) {
        minMark1 = subject.mark ; 
    }

})

console.log(maxMark1) ; 
console.log(minMark1) ; 

// --------- Map -----------------

const marks = subjects.map((eachSubject) => eachSubject.mark) ;
console.log(marks);

console.log(Math.max(...marks)) ; 
console.log(Math.min(...marks)) ; 

// ---------- Reduce ----

const maxiMarks = subjects.reduce((acc,curr) => {
    return acc.mark > curr.mark ? acc : curr 
})

console.log(maxMark) ; 

// ------------Average Number ---------


