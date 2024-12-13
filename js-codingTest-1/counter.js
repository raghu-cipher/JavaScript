let counterEl = document.getElementById("counter");

let counterValue = 0

const evenNumber = counterValue % 2 === 0 ;
const oddNumber = counterValue % 2 !== 0 ;
console.log(counterValue);
console.log(oddNumber)

function onIncrement() {
    if(evenNumber) {
        counterValue = counterValue + 5 ;
        counterEl.textContent = counterValue ;
    }else if (oddNumber) {
        counterValue = counterValue + 10 
        counterEl.textContent = counterValue ;
    }
}
function onDecrement() {
    if(evenNumber) {
        counterValue = counterValue - 2;
        counterEl.textContent = counterValue ;
    }else if (oddNumber) {
        counterValue = counterValue - 1; 
        counterEl.textContent = counterValue ;
    }
}

function onReset() {
    counterValue = 0;
    counterEl.textContent = counterValue ;
}
