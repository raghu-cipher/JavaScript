let todoItemsContainerEl = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text : "learn HTML"
    },
    {
        text : "learn CSS"
    },
    {
        text : "learn JavaScript"
    }
];

function createAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex", "flex-row");
    todoItemsContainerEl.appendChild(todoElement);

    let inputEl = document.createElement("input");
    inputEl.setAttribute("type","checkbox");
    inputEl.id = "checkboxInput";
    inputEl.classList.add("checkbox-input");
    todoElement.appendChild(inputEl);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container",'d-flex',"flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.textContent = todo.text ;
    labelElement.setAttribute("for","checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelContainer.appendChild(labelElement);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
    deleteContainer.appendChild(deleteIcon);

}
for (let todo of todoList) {
    createAppendTodo(todo);
}



console.log(todoItemsContainerEl);