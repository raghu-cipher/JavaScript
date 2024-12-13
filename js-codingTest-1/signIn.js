console.log("this is sing in ")
let inputEl = document.getElementById("inputElement");
let paswrdEl = document.getElementById("passwordElement");
let resultEl = document.getElementById("result")


function onSign() {
    if (inputEl.value === "") {
        resultEl.textContent = "Please enter your name";
    }else if (paswrdEl.value === "") {
        resultEl.textContent = "Please enter your password";
    }
    else {
        resultEl.textContent = "Welcome "
    }
}