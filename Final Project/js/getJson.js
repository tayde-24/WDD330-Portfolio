import { displayCities, displayForecast} from "./render.js";
import { blank, Errors, loadWindow, makeBlank } from "./utilities.js";
import { key, cityWeather } from "./weatherApp.js";
import { readFromLS, writeToLS } from "./localStorage.js";

/*----------------------------------------------------------------------------------
This function checks if input is blank or is given a number. If it does meet those
conditions, it makes an error message. Once the user inputs the city name, the error
message goes away and then fetches the api information. After that, it renders the 
list of cities in the beginning. 
-----------------------------------------------------------------------------------*/

export function getInfo(url) {
    //Checks to see if value is missing, otherwise the error message remains blank
    // if(document.getElementById("searchingCity").value === "") {
    //     document.querySelector(".error").innerHTML = "Enter city name."
    //     Errors();
    //     return;
    // } else {
    //     makeBlank(); 
    // }
    
    return fetch(url) //Fetches the URL
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then (data => {
        console.log(data);
        displayCities(data); //Displays the list render on webpage
        blank(); //Blanks out the input
        let newCity = {
            city: data.name,
            id : data.id
        }
        cityWeather.push(newCity);
        writeToLS(cityWeather);
    })
    .catch(error => console.log(error))
}

/*----------------------------------------------------------------------------------
This function works similarly like the first one when checking the conditions of the
text value. It fetches the api information and then calls the render function that
displays the whole weather information from current time and both hourly and daily 
forecast (basically, the second part).
-----------------------------------------------------------------------------------*/
export function getInfoForecast(url) {
    let text = /[a-zA-Z]/; //Regex 
    if(document.getElementById("searchingCity").value === "") {
        document.querySelector(".error").innerHTML = "Enter city name."
        Errors();
        return;
    } else if (!text.test(document.getElementById("searchingCity").value)) { 
        /*-----------------------------------------------------------------
        Checks if it contains numbers in the input. If it does, the other 
        error message pops up.
        -----------------------------------------------------------------*/
        document.querySelector(".error").innerHTML = "No numbers. Enter city name."
        Errors();
        return;
    }
     else {
        makeBlank(); //If the user inputs a city, the error message goes away along with it's styling
    }
    return fetch(url) //Fetches the information
    .then(response => {
        if(response.ok) {
            return response.json(); //Gets JSON response
        } else {
            throw Error(response.statusText); //If it encounters something wrong, it creates a console log error message
        }
    })
    .then (data => {
        console.log(data.coord.lat); //Console logs coordinates
        console.log(data.coord.lon);
        let name = data.name; //Gets the name of city
        let id = data.id; //Gets id of the city
        
        /*------------------------------------------------------------------------------
        For the Onecall API, it required the cordinates of the current city, I think, so
        in order to get the other cities, I used the Current Weather API to get the 
        coordinates. After getting that data, a made a variable that would put in the 
        coordinates and fetch the new data that I needed for the second part.
        ------------------------------------------------------------------------------*/

        let newF= fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${key}&units=imperial`).then(
            response => {
                if(response.ok) {
                    return response.json()
                } else {
                    return Error(response.statusText);
                }
            }).then(data => displayForecast(name, id, data)).catch(error => console.log("Something went wrong here.", error)); //Made it get the name, id, and the new data to get the render function to work
        //displayForecast(name, id, newF);
        let newCity = {
            city: name,
            id : id
        }
        cityWeather.push(newCity);
        writeToLS(cityWeather);
        console.log(newF);
        //return data.coord;
    })
    .catch(error => console.log(error));
    //Do the saving here?
}

// export function getInfoCurrent(url) {
//     if(document.getElementById("searchingCity").value === "") {
//         document.querySelector(".error").innerHTML = "Enter city name."
//         Errors();
//         return;
//     } else {
//         makeBlank(); 
//     }
//     return fetch(url)
//     .then(response => {
//         if(response.ok) {
//             return response.json();
//         } else {
//             throw Error(response.statusText);
//         }
//     })
//     .then (data => {
//         console.log(data.main);
//         //displayForecast(data);
//         blank(); 
//     })
//     .catch(error => console.log(error))
// }