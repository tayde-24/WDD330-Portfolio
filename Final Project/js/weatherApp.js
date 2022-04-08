import { writeToLS, readFromLS } from "./localStorage.js";
import { getInfo, getInfoForecast } from "./getJson.js";
import { blank, makeBlank } from "./utilities.js";


export const key = "INSERT_YOUR_API_KEY";
export let cityWeather = [];

/*This class deals with the first part when the app opens*/
export class CurrentWeather {
    constructor(name) {
        this.name = cityWeather;
        //this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    getI(c) {
        //This seems to work when getting the information from the localStorage
        //There is some slight hiccup here with local storage though
        //It seemed to store Oxnard three times, but then when I add another city
        //and refresh it, Oxnard remains but not the other cities
        //not sure why that is
        const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        //var units = `imperial`;
        let item;
        if(c === null) {
            return;
        } else {
            item = c.map(newTask => baseUrl + `?q=${newTask.city}&cnt=7&apiKey=${key}&units=imperial`);
            console.log("Check if it went through");
            console.log(item);
        }
        for(let l of item) {
            //console.log(l);
            let weather = new getInfo(l);
            console.log(weather);
        }
    }
}

/*This class plays out after you put in the city name at the footer input*/
export class ForecastWeather {
    constructor(name) {
        this.name = name; //Blank name
    }

    getForecast() {
        let c = new City; //Creates new city
        this.name = c.cityName(); //The name gets the city name
        const baseUrl = "https://api.openweathermap.org/data/2.5/weather"; //Base URL
        let url = baseUrl + `?q=${this.name}&apiKey=${key}&units=imperial`; //Inputs city name in the query and gets api key
        //blank(); 
        let forecast = new getInfoForecast(url); //creates new fetch from 'getJson.js file
        console.log(forecast);
    }
}


export class City {
    constructor(city) {
        this.city = city; //City is blank
    }
    
    /*This method gets the value of city name*/
    cityName() {
        //Maybe correct it here?
        return this.city = document.getElementById("searchingCity").value;
    }
}

// export function getInfo() {
//     const search = document.getElementById("searchingCity").value;
//     console.log(search);
//     let url = weatherUrl + `?q=${search}&cnt=7&apiKey=${key}&units=imperial`;
//     fetch(url)
//     .then((response) => {
//         if (response.ok) {
//             return response;
//         }
//         throw Error(response.statusText);
//     })
//     .then( response => console.log(response.json()))
//     .catch(error => console.log("There was an error", error))
// }

/*
Functions to keep in mind:
-dates
-conversion of deg F/C
-getting the data
-darkmode
*/
//getInfo();
//getInfo(weatherUrl);
