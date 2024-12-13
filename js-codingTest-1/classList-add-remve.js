console.log("this is add remov");

let headingEl = document.getElementById("heading");
let btnElEl = document.getElementById("btnEl");

btnElEl.onclick = function() {
    headingEl.classList.add("heading-new-styles");
    headingEl.classList.remove("heading-old-styles");
}

