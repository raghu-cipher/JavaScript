// function declaraion = define a reusable a bloc of code
//                       that performs a specific task

function hello() {
    console.log("hello")
}

// function expression = a way to define function as 
//                       value or variables 

const hello = function(){
    console.log("hello");
}

// hello();
// setTimeout(callback,1000);

setTimeout(hello,3000);

setTimeout(function(){
    console.log("this is function express")
},3000)




