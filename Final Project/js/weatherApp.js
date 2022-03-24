import { writeToLS, readFromLS } from "./localStorage";

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const forecastUrl= "https://api.openweathermap.org/data/2.5/forecast";
//?q={city}&apiKey={key}&units=imperial

let savedCities = [];

export function getInfo() {
    const search = document.getElementById("searchingCity").value;
    console.log(search);
    let url = weatherUrl + `?q=${search}&cnt=7&apiKey=${key}&units=imperial`;
    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => console.log(response.json()))
    .catch(error => console.log("There was an error", error))
}

/*
Functions to keep in mind:
-dates
-conversion of deg F/C
-getting the data
-darkmode
*/
//getInfo();
//getInfo(weatherUrl);