/*This is the JavaScript file that contains code for how to handle storage*/
import { toDoList } from "./ToDos.js";

// //saves
// export function writeToLS() {
//     // let info = JSON.stringify();
//     localStorage.setItem("todoList", JSON.stringify(toDoList)); //sets data into memory
// }

// //Outputs
// export function readFromLS(key) {
//     let memory = JSON.parse(localStorage.getItem(key));
//     // if(memory === null) {
//     //     memory = [];
//     // }
//     return memory;
//     //toDoList.push(addInput);
// }

//saves
export function writeToLS(key, data) {
    let info = JSON.stringify();
    localStorage.setItem(key, info); //sets data into memory
}

//Outputs
export function readFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}


/*Got this code from Aleshana. I just changed the variable names.
https://aleshana.github.io/WDD-330-Portfolio/week06/ToDo2-Last/index.html
*/

// /*This is the JavaScript file that contains code for how to handle storage*/
// import { toDoList } from "./ToDos.js";

// //saves
// export function writeToLS() {
//     // let info = JSON.stringify();
//     localStorage.setItem("todoList", JSON.stringify(toDoList)); //sets data into memory
// }

// //Outputs
// export function readFromLS(key) {
//     let memory = JSON.parse(localStorage.getItem(key));
//     if(memory === null) {
//         toDoList = [];
//     } else {
//         toDoList = memory;
//     }
//     return memory;
//     //toDoList.push(addInput);
// }