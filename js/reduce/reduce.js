// reduce() = reduce the element of an array to a 
//             single value 


const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);
console.log(total);

function sum(accumulator,element) {
    return accumulator + element ;
} 

const grades = [75,50,90,80,65,95];

const maximum = grades.reduce(getMax);

console.log(maximum)

function getMax(accumulator,element) {
    return Math.max(accumulator, element)
}

const minNumbers = grades.reduce(getMin);
console.log(minNumbers)
function getMin(a,b) {
    return Math.min(a,b)
}

const store = [
    {
        product : "laptop",
        value : 1000,
        count : 3
    },
    {
        product : "desktop",
        value : 1500,
        count : 3
    },
    {
        product : "laptop",
        value : 500,
        count : 3
    }
];

const totalValueStore = store.reduce(
    (acc,item) => acc + (item.value * item.count),0 
)
console.log(totalValueStore)
