import {addTask, activeItems, showCompletedItems, deleteItems, showAllItems, toDoList, displayItems} from "./ToDos.js";
import * as memory from "./ls.js";
export function makeBlank() {
    document.getElementById("addingList").value = "";
    document.querySelector(".input-something").innerHTML = "";
    document.querySelector(".error").setAttribute("style", "display:hidden");
}

export function loadWindow() {
    window.addEventListener("DOMContentLoaded", () => {
    let arrayItems = memory.readFromLS('todoList');
    if(arrayItems === null) {
        arrayItems = [];
     }
    console.log(arrayItems);
    displayItems(arrayItems);
    //renderList(arrayItems);
});
}
export function error() {
    //document.querySelector(".input-something").setAttribute("style", "padding:1rem 3rem;background-color:red;color:white;").add();
    document.querySelector(".input-something").classList.add("error");
    document.querySelector(".error").setAttribute("style", "padding:1rem 3rem;background-color:red;color:white;");
}
export function checkTasks(arrayItems) {
    let whatsLeft = document.getElementById("taskLeft");
    //let total = 0;
    // arrayItems.forEach(index => {
    //     if(index.isCompleted ===true) {
    //         total += 1;
    //         console.log(total);
    //     } else {
    //         total -= 1;
    //         console.log(total);
    //     }
    // });
    whatsLeft.innerHTML = `Total task${arrayItems.length !== 1 ? "s" : ""}: ${(arrayItems != null) ? arrayItems.length : 0}`;
    //task${arrayItems.length !== 1 ? "s" : ""} left
}

export function activeTasks(arrayItems) {
    let whatsLeft = document.getElementById("taskLeft");
    let item = arrayItems.forEach(index => {
        if(index.isCompleted === true) {
            whatsLeft.innerHTML = `${(arrayItems!= null) ? arrayItems.length : 0} ${arrayItems.length !== 1 ? "tasks completed" : "task completed"}`;
        } else if(index.isCompleted ===false){
            whatsLeft.innerHTML = `${(arrayItems!= null) ? arrayItems.length : 0} ${arrayItems.length !== 1 ? "tasks left" : "task left"}`;
        }
    })
    return item;
}

export function updateTasksChecked(arrayItems){
    let whatsLeft = document.getElementById("taskLeft");
    let item = arrayItems.forEach(index => {
        if(index.isCompleted === true) {
            whatsLeft.innerHTML = `Total task${arrayItems.length !== 1 ? "s" : ""} left: ${(arrayItems!= null) ? arrayItems.length-1 : 0}`;
        } // } else if(index.isCompleted ===false){
        //     whatsLeft.innerHTML = `${(arrayItems!= null) ? arrayItems.length : 0} ${arrayItems.length !== 1 ? "tasks are active" : "task is active"}`;
        // }
    });
    return item;
}

let addButton = document.getElementById("addList");
let showAllButton = document.getElementById("showAll");
let activeButton = document.getElementById("active");
let completedButton = document.getElementById("completed");
//let deleteButton = document.getElementById("");

addButton.addEventListener("click", addTask);
showAllButton.addEventListener("click", showAllItems);
activeButton.addEventListener("click", activeItems);
completedButton.addEventListener("click", showCompletedItems);
