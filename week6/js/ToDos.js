/*This is where we apply all the utilities and Local Storage code here*/
import * as toMemory from "./ls.js";
import { makeBlank } from "./utilities.js";

export let toDoList = [];
let completed = [];
let notFinishedList = [];

export function addTask() {
    const addInput = document.getElementById("addingList").value;
    console.log(addInput);
    let newTask = {
        id: Date.now(),
        tasksToDo: addInput,
        isCompleted: false
    }
    toDoList.push(newTask);
    toMemory.writeToLS(toDoList);
    console.log(toMemory.writeToLS(toDoList));
    diplayItems(toDoList);   
    makeBlank();
}

function getAllItems() {
    // let ls = toMemory.readFromLS();
}

function diplayItems(arrayItem) {
    const listBox = document.querySelector("#todoList");
    // let whatsLeft = document.getElementById("taskLeft");
    // let total = 0;
    const listItems = arrayItem.map(newTask =>
        `<li class="item"><input type="checkbox" ${newTask.isCompleted} value= "${newTask.id}">
        <span class = "item-name">${newTask.tasksToDo}</span><button value="${newTask.id}">X</button></li>`).join(``);
    listBox.innerHTML = listItems;
    /*--------------This code below works-------*/
    // toDoList.forEach(index => {
    //     //console.log(index);
    //     total += 1,
    //     console.log(total);
    // });
    // whatsLeft.innerHTML = `${total} task${total !== 1 ? "s" : ""} left`;

}

export function activeItems() {
    con
}

export function completedItems(key) {
    //const list = document.querySelector("#todoList");
    const index = toDoList.findIndex(item =>item.id === key);
    console.log("got checked");
    toDoList[index].isCompleted = !toDoList[index].isCompleted;
    diplayItems();
}

export function deleteItems() {

}

export function showAllItems() {

}

getAllItems();

// export let toDoList = [];
// export let completedList = [];
// export let notFinishedList = [];
// export let addButton = document.getElementById("addList");

// export function addTask() {
//     const addInput = document.getElementById("addingList").value;
//     console.log(addInput);
//     let newTask = {
//         id: new Date().toDateString(),
//         tasksToDo: addInput,
//         completed: false
//     };
//     toDoList.push(newTask);
//     toMemory.writeToLS(toDoList);
//     console.log(toMemory);
// }

// export default class ToDo {
//     constructor(listItems) {
//         this.timeStamp = new Date().getDate;
//         this.listItems = listItems;
//         this.isComplete = false; 
//     }

//     getDate() {
//         return this.timeStamp;
//     }

//     getListItem() {
//         return this.listItems;
//     }

//     setListItem() {
//         return this.listItems;
//     }

//     getIsComplete() {
//         return this.isComplete;
//     }



//     getAllTasks() {
//         let ls = toMemory.readFromLS(key);
//         toDoList = ls === null ? [] : ls;
//         return toDoList;
//     }

// }