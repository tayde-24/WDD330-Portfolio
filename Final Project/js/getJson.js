import { displayCities, displayForecast} from "./render.js";
import { blank, Errors, makeBlank } from "./utilities.js";
import { key } from "./weatherApp.js";
const metric = document.getElementById("metric");
const imperial = document.getElementById("imperial");

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
        console.log(data.coord.lat);
        console.log(data.coord.lon);
        let name = data.name;
        let id = data.id;
        //console.log(name);
        //console.log(id);
        let newF= fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${key}&units=imperial`).then(
            response => {
                if(response.ok) {
                    return response.json()
                } else {
                    return Error(response.statusText);
                }
            }).then(data => displayForecast(name, id, data)).catch(error => console.log("Something went wrong here.", error));
        //displayForecast(name, id, newF);
        console.log(newF);
        //return data.coord;
    })
    .catch(error => console.log(error));
    //Do the saving here?
}

export function getInfoCurrent(url) {
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
        console.log(data.main);
        //displayForecast(data);
        blank(); 
    })
    .catch(error => console.log(error))
}