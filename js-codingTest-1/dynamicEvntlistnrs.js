// Dynamic Event Listeners
// The goal of this coding exam is to quickly get you off the ground with Adding Event Listeners Dynamically.

let containerdynmicEl = document.getElementById("dynamicContainer")
let btnEl = document.getElementById("createBtn");
btnEl.onclick = function() {
    let headingEl = document.createElement("h4");
 
    headingEl.textContent = "Maing Heading Element";
    containerdynmicEl.appendChild(headingEl);
}