/* Follow the instructions found in the description to complete the JavaScript functionality.*/
let todoItemsContainerEl = document.getElementById("todoItemsContainer");

let userInputEl = document.getElementById("todoUserInput");
let addButtonEl = document.getElementById("addTodoButton");
let userInputValue = userInputEl.value;

let saveButtonEl = document.getElementById("saveTodoButton");


saveButtonEl.onclick = function() {
    console.log("save button clicked");
    localStorage.setItem("todoList",JSON.stringify(todoList));
}

function getTodoListFromLocalStrorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if(parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList ;
    }
}
let todoList = getTodoListFromLocalStrorage()

let todoCount = todoList.length;

function onTodoStatusChange(checkBoxId, labelID) {
    let checkBoxEl = document.getElementById(checkBoxId);
    let labelEl = document.getElementById(labelID);

    // console.log(checkBoxEl.checked)

    labelEl.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
    let todoEl = document.getElementById(todoId);
    todoItemsContainerEl.removeChild(todoEl);

    let deletedTodoItemIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todoId" + eachTodo.uniqueNo ;
        if(eachTodoId === todoId) {
            return true
        } else {
            return false
        }
    });
    // console.log(deletedTodoItemIndex);
    todoList.splice(deletedTodoItemIndex,1);
} 

function createAppendTodo(todo) {

    let checkBoxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    // for deleting todo item need to create todoId 
    let todoId = "todoId" + todo.uniqueNo;

    let createTodoEl = document.createElement("li");
    createTodoEl.classList.add("todo-item-cont");
    // add todoId to list item 
    createTodoEl.id = todoId;
    todoItemsContainerEl.appendChild(createTodoEl);


    let inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.id = checkBoxId;
    inputEl.classList.add("checkbox-input");
    createTodoEl.appendChild(inputEl);

    inputEl.onclick = function() {
        // console.log(`click checkbox ${checkBoxId}`);
        // console.log(`click checkbox ${labelId}`);
        onTodoStatusChange(checkBoxId, labelId)
    }

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-cont")

    createTodoEl.appendChild(labelContainer);

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", checkBoxId);
    labelEl.classList.add("checkbox-label");
    labelEl.id = labelId;
    labelEl.textContent = todo.text;

    labelContainer.appendChild(labelEl);



    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-cont");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcn = document.createElement("i");
    deleteIcn.classList.add("fa", "fa-trash-o");

    // function for delete todo 
    deleteIcn.onclick = function() {
        // console.log(`delete icon clicked ${todo.name}`);

        onDeleteTodo(todoId)
    }

    deleteIconContainer.appendChild(deleteIcn);

}

for (let item of todoList) {
    // console.log(item)
    createAppendTodo(item);
}



function onAddTodo() {
    console.log(userInputEl.value);
    todoCount = todoCount + 1;
    if (userInputEl.value === "") {
        alert("Enter Valid Text");
        return;
    }
    let newTodo = {
        text: userInputEl.value,
        uniqueNo: todoCount
    };

    todoList.push(newTodo);

    createAppendTodo(newTodo);
    userInputEl.value = "";
}

addButtonEl.onclick = function() {
    // console.log("clicked");
    // console.log(userInputEl.value);
    onAddTodo();
}