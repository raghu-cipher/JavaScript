let arry = ['orane','apple','mango']
let arryElement = document.getElementById("paraElement")
let count = 0
function onClick() {
    console.log(arry.length)
    
    if (count !== arry.length){
        arryElement.textContent = arry[count]
        count++
    } else {
        count = 0 
    }
    
}
let now = new Date()
let btnEl = document.getElementById("clickMe")
let headingEl = document.getElementById("headingElement")
btnEl.addEventListener("click",()=>{
    console.log("click me")
    headingEl.textContent = now.toLocaleTimeString()
    headingEl.style.color = "red"
    headingEl.style.backgroundColor = "green"
    headingEl.style.fontSize = "21px"
    
})