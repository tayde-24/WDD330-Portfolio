// const check = document.querySelector("box-check");
// const deleteItem = document.querySelectorAll("delete-item");
import {addTask, activeItems, completedItems, deleteItems, showAllItems, toDoList} from "./ToDos.js";
import * as memory from "./ls.js";
export function makeBlank() {
    document.getElementById("addingList").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
   // memory.readFromLS()
});

function checkTasks() {
    let whatsLeft = document.getElementById("taskLeft");
    let total = 0;
    toDoList.forEach(index => {
        total += 1,
        console.log(total);
    });
    whatsLeft.innerHTML = `${total} task${total !== 1 ? "s" : ""} left`;
}

let addButton = document.getElementById("addList");
let showAllButton = document.getElementById("showAll");
let activeButton = document.getElementById("active");
let completedButton = document.getElementById("completed");
//let deleteButton = document.getElementById("");

addButton.addEventListener("click", addTask);
showAllButton.addEventListener("click", showAllItems);
activeButton.addEventListener("click", activeItems);
completedButton.addEventListener("click", completedItems);
