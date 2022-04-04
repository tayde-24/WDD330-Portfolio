import { writeToLS, readFromLS } from "./localStorage.js";
import { getInfo, getInfoForecast } from "./getJson.js";
import { blank, makeBlank } from "./utilities.js";

// const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
// const forecastUrl= "https://api.openweathermap.org/data/2.5/forecast";

// const metric = document.getElementById("metric");
// const imperial = document.getElementById("imperial");
export const key = "898f2ddbf4eac9fea85f9525f87370a8";
export let cityWeather = [];

/*This class deals with the first part when the app opens*/
export class CurrentWeather {
    constructor(name) {
        this.name = name;
        //this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    getCurrentWeather() {
        let c = new City;
        this.name = c.cityName();
        const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        var units = `imperial`;
        let url = baseUrl + `?q=${this.name}&cnt=7&apiKey=${key}&units=${units}`;
        //blank(); 
        let weather = new getInfo(url);

        console.log(weather);
        makeBlank();
        //let p = weather;   
    }
    getI(c) {
        //This seems to work when getting the information from the localStorage
        //There is some slight hiccup here with local storage though
        //It seemed to store Oxnard three times, but then when I add another city
        //and refresh it, Oxnard remains but not the other cities
        //not sure why that is
        let ul = document.getElementById("listss");
        const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        var units = `imperial`;
        const item = c.map(newTask => baseUrl + `?q=${newTask.city}&cnt=7&apiKey=${key}&units=${units}`);
        let weather = new getInfo(item);
        //const item = c.map(newTask => `<li>${newTask.city}</li>`);

        console.log(item);
        //ul.innerHTML = item;
        //return item;
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
        // let weather = new getInfoCurrent(url);

        // metric.addEventListener("click", function() {
        //     let c = new City;
        //     this.name = c.cityName();
        //     let weather = new getInfo(baseUrl + `?q=${this.name}&cnt=7&apiKey=${key}&units=metric`);
        //     console.log(weather);
        // })
        // imperial.addEventListener("click", function() {
        //     let weather = new getInfo(baseUrl + `?q=${this.name}&cnt=7&apiKey=${key}&units=imperial`);
        //     console.log(weather);
        // })

        //const search = document.getElementById("searchingCity").value;
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

// export function addCity() {
//     const addInput = document.getElementById("searchingCity").value;
//     if(addInput === "") {
//         return;
//     }
//     const newCity = {
//         id: data.id,
//         city: addInput
//     }
//     cityWeather.push(newCity);
//     toMemory.writeToLS(cityWeather);
// }