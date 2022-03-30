import { writeToLS, readFromLS } from "./localStorage.js";
import { getInfo, getInfoForecast } from "./getJson.js";
import { blank, makeBlank } from "./utilities.js";

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const forecastUrl= "https://api.openweathermap.org/data/2.5/forecast";
//?q={city}&apiKey={key}&units=imperial

const metric = document.getElementById("metric");
const imperial = document.getElementById("imperial");
export let cityWeather = [];

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
        // metric.addEventListener("click", function() {
        //     let weather = new getInfo(baseUrl + `?q=${this.name}&cnt=7&apiKey=${key}&units=metric`);
        //     console.log(weather);
        // })
        // imperial.addEventListener("click", function() {
        //     let weather = new getInfo(baseUrl + `?q=${this.name}&cnt=7&apiKey=${key}&units=imperial`);
        //     console.log(weather);
        // })

        console.log(weather);
        //makeBlank();
        //let p = weather;
        //console.log(p);
    }
}

export class ForecastWeather {
    constructor(name) {
        this.name = name;
    }

    getForecast() {
        let c = new City;
        this.name = c.cityName();
        const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
        let url = baseUrl + `?q=${this.name}&cnt=7&apiKey=${key}&units=imperial`;
        //blank(); 
        let weather = new getInfo(url);

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
        console.log(weather);
    }
}


export class City {
    constructor(city) {
        this.city = city;
    }
    // this.city = document.getElementById("searchingCity").value;
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