/*This is where we apply all the utilities and Local Storage code here*/
import * as toMemory from "./ls.js";
import { makeBlank, loadWindow , error, checkTasks, activeTasks, updateTasksChecked} from "./utilities.js";

export let toDoList = [];
let completed = [];
let notFinishedList= [];
const listBox = document.querySelector("#todoList");

export function addTask() {
    const addInput = document.getElementById("addingList").value;
    //const identifier = Date.now()
    console.log(addInput);
    if (addInput === "") {
        document.querySelector(".input-something").innerHTML = "Write something!";
        error();
        return;
    }
    const newTask = {
        id: Date.now(),
        tasksToDo: addInput,
        isCompleted: false
    }
    toDoList.push(newTask);
    toMemory.writeToLS(toDoList);
    displayItems(toDoList);   
    makeBlank();
}

/* Automatically loads the screen, but I think it's a small but issue when you refresh the page an
and try to add stuff. When you first load the page, it loads what was stored last time,
but by entering a new input, it overwrites it as if it made a new list8*/ 
function getAllItems() {
    loadWindow(); 
}

//Renders the list
function render(arrayItem) {
    const items = arrayItem.map(newTask =>
        `<li class="item"><input type="checkbox" id="chk${newTask.id}" name="${newTask.tasksToDo}" ${newTask.isCompleted ? "checked" : ""} value= "${newTask.id}" >
        <span class = "item-name">${newTask.tasksToDo}</span><button value="${newTask.id}" id="btn${newTask.id}">X</button></li>`);
    
    listBox.innerHTML = items;
}

//Displays the item list
export function displayItems(arrayItem) {
    //onclick="toggleCheckBox(this)"
    const items = arrayItem.map(newTask =>
        `<li class="item"><input type="checkbox" id="chk${newTask.id}" name="${newTask.tasksToDo}" ${newTask.isCompleted ? "checked" : ""} value= "${newTask.id}" >
        <span class = "item-name">${newTask.tasksToDo}</span><button value="${newTask.id}" id="btn${newTask.id}">X</button></li>`);
    
    listBox.innerHTML = items;
    
    //console.log(typeof(arrayItem));
    arrayItem = Array.from(arrayItem);
    arrayItem.forEach (li => {
        let checkBox = document.getElementById("chk"+li.id);
        checkBox.addEventListener('click', () => {toggleCheckBox(li.id)});
        let button = document.getElementById("btn"+li.id);
        //button.addEventListener('click', deleteItems);
        button.addEventListener("click", () => {deleteItems(li.id)});
    });
    let whatsLeft = document.getElementById("taskLeft");
    whatsLeft.innerHTML = `Total tasks: ${(arrayItem != null) ? arrayItem.length : 0}`;
}

//Checkbox
function toggleCheckBox(key) {
    console.log("function working");
    let oneTask = toDoList.findIndex(item =>item.id === key);
    toDoList[oneTask].isCompleted = !toDoList[oneTask].isCompleted;
    console.log(toDoList[oneTask]);
    toMemory.writeToLS(toDoList);
    //markID(key);
    //render(toDoList);
    //showAllItems();
}

//This is when the delete button gets executed
export function deleteItems(key) {
    const p = toDoList.findIndex(item => item.id === key);
    console.log(p);
    toDoList.splice(p, 1);
    toMemory.writeToLS(toDoList);
    //toDoList.remove(p);
    checkTasks(toDoList);
    //showAllItems();
    render(toDoList);
}

//This is for the show all button
export function showAllItems() {
    console.log("will show all items")
    let arrayItems = toMemory.readFromLS('todoList');
    displayItems(arrayItems);
    checkTasks(arrayItems);
}

//This is to filter the active todo items
export function activeItems(arrayItem) {
    notFinishedList = toDoList.filter(unfinished => unfinished.isCompleted=== false);
    console.log(notFinishedList);
    //let arrayItems = toMemory.writeToLS(notFinishedList);
    //displayItems(notFinishedList);
    render(notFinishedList);
    
    //Since "isCompleted" is set to false, I didn't need to add false.
    //I really liked the simplicity of this code.
    arrayItem = Array.from(notFinishedList);
    arrayItem.forEach (li => {
        let checkBox = document.getElementById("chk"+li.id);
        checkBox.addEventListener('click', () => {toggleCheckBox(li.id)});
        let button = document.getElementById("btn"+li.id);
        //button.addEventListener('click', deleteItems);
        button.addEventListener("click", () => {deleteItems(li.id)});
        
    });
        
    if(arrayItem.length > 1){
        activeTasks(notFinishedList);
    }else{
        checkTasks(notFinishedList);
    }
}

//Button to show completed items.
export function showCompletedItems(arrayItem) {
    completed = toDoList.filter(finished => finished.isCompleted === true);
    console.log(completed);
    //let arrayItems = toMemory.writeToLS(completed);
    render(completed);
    //displayItems(completed);
    
    
    //Made it look for the ones that are completed. 

    arrayItem = Array.from(completed);
    arrayItem.forEach (li => {
        let checkBox = document.getElementById("chk"+li.id);
        checkBox.addEventListener('click', () => {toggleCheckBox(li.id)});
        let button = document.getElementById("btn"+li.id);
        //button.addEventListener('click', deleteItems);
        button.addEventListener("click", () => {deleteItems(li.id)});
    });
    if(arrayItem.length >= 1) {
        activeTasks(completed);
    } else {
        checkTasks(completed);
    }
    
}

getAllItems();