console.log("this is Appending Elements");

let containerEl = document.getElementById("myContainer");

let headingEl = document.createElement("h6");

headingEl.textContent = "Main heading Element appended Dynamically";
headingEl.style.color = "#0000ff";
containerEl.appendChild(headingEl)