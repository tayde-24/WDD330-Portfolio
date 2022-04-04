import { cityWeather } from "./weatherApp.js";
//saves
export function writeToLS(key, data) {
    localStorage.setItem("cityList", JSON.stringify(cityWeather)); //sets data into memory
}

//Outputs
export function readFromLS(key) {
    let memory = JSON.parse(localStorage.getItem("cityList"));
    return memory; 
}