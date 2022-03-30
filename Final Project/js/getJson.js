import { displayCities} from "./render.js";
import { blank, Errors, makeBlank } from "./utilities.js";
export function getInfo(url) {
    if(document.getElementById("searchingCity").value === "") {
        document.querySelector(".error").innerHTML = "Enter city name."
        Errors();
        return;
    } else {
        makeBlank(); 
    }
    return fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then (data => {
        displayCities(data);
        //addCity(data);
        blank(); 
    })
    .catch(error => console.log(error))
}

export function getInfoForecast(url) {
    return fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then (data => {return data.coord})
    .catch(error => console.log(error))
}