const arr = ['Applel',"orange","grapes","sun"]

let headingElement = document.getElementById("headingElement")

let count = 0
// headingElement.addEventListener("click", e => {
    
//     const lenghtOfArray = arr.length
//     console.log(lenghtOfArray)
    
//     console.log(count)
//     if (count === lenghtOfArray) {
//         count = 0 
//     }
    
//     headingElement.textContent = arr[count]
//     count ++ 
// })

// const item = arr.filter(item => item.orange === orange)
// console.log(item)

function listener1() {
    const lengthOfArray = arr.length 
    if (count === lengthOfArray) {
        count = 0 
    }
    headingElement.textContent = arr[count]
    count ++ 
}

headingElement.addEventListener('click',listener1)