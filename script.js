const inputBox = ...;
const listContainer = ...;

function addTask() {
    // здесь будет ваш код
}

listContainer.addEventListener("click", function(e) {
    // здесь будет ваш код
}, false);

function storeToDoList() {
    localStorage.setItem("to-do-list", listContainer.innerHTML);
}

function restoreToDoList() {
    listContainer.innerHTML = localStorage.getItem("to-do-list");
}

restoreToDoList();