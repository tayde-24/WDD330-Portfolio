 import {addButton, toDoList,completedList,notFinishedList, addTask} from "./ToDos.js";
 import {writeToLS, readFromLS} from "./ls.js";

 addButton.addEventListener("click", addTask);
 writeToLS();


