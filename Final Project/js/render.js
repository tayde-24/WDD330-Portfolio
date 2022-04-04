import * as toMemory from "./localStorage.js";
import { readableTime, readableDate, scrollers, blank } from "./utilities.js";
export let savedCities = [];
const metric = document.getElementById("metric");
const imperial = document.getElementById("imperial");

/*-------------------------------------------------------------------------------------
This displayCities function helps render the data.
--------------------------------------------------------------------------------------*/
export function displayCities(data) {
    console.log(data);
    let wholeList = document.querySelector("ul"); //Selects the unordered list
    let name = data.name;   //Gets data name
    let icon = data.weather[0].icon; //Gets icon image
    //Added Id just in case
    let id = data.id; //Gets city ID
   
    let temper = Math.round(data.main.temp); //Gets current temperature
    let description = data.weather[0].description; //Gets description
    
    /*No tampering for this code-----------------------------------------------------------------------------------
    
    // let list = `<li class="item" id=city${id}><span class="spacing">
    //             ${name}</span><span><image src="http://openweathermap.org/img/wn/${icon}@2x.png"></span>
    //             <span>${temper}&#176;F</span>
    //             <button value=${id} id="btn${id}"><span class="delete"></span></button>
    //             <span class="small-font">${(description).toUpperCase()}</span></li>`;  //HTML for li
    
    // wholeList.innerHTML = list; //Adds inner HTML list in ul

    // //Event listener for metric button
    // metric.addEventListener("click", function() {
    //     let temper = Math.round((data.main.temp -32) * 5/9);
    //     let list = `<li class="item" id=city${id}><span class="spacing">${name}</span><span><image src="http://openweathermap.org/img/wn/${icon}@2x.png"></span><span class="block">${temper}&#176;C</span><button value=${id} id="btn${id}"><span class="delete"></span></button><span class="small-font">${(description).toUpperCase()}</span></li>`;
    //     wholeList.innerHTML = list;
    // })

    // //Event listener for imperial button
    // imperial.addEventListener("click", function() {
    //     let temper = Math.round(data.main.temp);
    //     let list = `<li class="item"><span class="spacing">${name}</span><span><image src="http://openweathermap.org/img/wn/${icon}@2x.png"></span><span>${temper}&#176;F</span><span><button value=${id} id="btn${id}"><span class="delete"></span></button></span><span class="small-font">${(description).toUpperCase()}</span></li>`;
    //     wholeList.innerHTML = list;
    // })
    // console.log(list);
    
    ----------------------------------------------------------------------------*/
}

/*--------------------------------------------------------------------------------------
This function renders the whole forecast for the inputted city. It takes in the name, ID
and the API data to help get the necessary information there.
--------------------------------------------------------------------------------------*/
export function displayForecast(name, id, data) {
    
    console.log(name);
    console.log(id);
    console.log(data);

    const main = document.querySelector("main"); //Selects main tag
    main.classList.add("c-m"); //Creates a class for styling
    main.setAttribute("style", "margin-bottom:5rem;"); //Sets attribute to give the footer some distance
    let tForecast = `<div class="forecasting">
                        <div class="hourly">
                            <p>Hourly Forecast Today</p>
                                <ul id="hori-scroll" class="hori-scroll">`; //HTML for the forcasting part
    console.log(data.hourly);
    for (let hour of data.hourly) {  //Goes through the array for hourly that contains 48 results   
        if (data.hourly.length > 24) {
            data.hourly.length = 24; //I only needed a few hours, so I limited it to 24
        }
        tForecast += `<li>
                        <div>${readableTime(hour.dt, data.timezone_offset)}</div>
                        <div><image src="http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png"></div>
                        <div class="temper">${Math.round(hour.temp)}&#176;F</div>
                        </li>`; //Adds the list of hourly in the Hour ul section.
    }
    //I then added more to the tForecast variable
    tForecast += `<ul>
                </div>

                <div class="future-forecast"> 
                    <p>Forecast for the next 7 days</p>
                    <ul class="vertical-scroll" id="vertical scroll">`; //Created a new section ul for the daily forecast
    for (let day of data.daily) { //Goes through daily forecast array
        tForecast += `<li><span class="spacing">${readableDate(day.dt, data.timezone_offset)}</span>
                        <span><image src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"></span>
                        <span class="small-font">${day.weather[0].description}</span>
                        <span class="tempers">${Math.round(day.temp.min)}&#176 
                            <span class="grey tempers">${Math.round(day.temp.max)}&#176</span>
                        </span>
                    </li>`;
    }
    tForecast += `</ul>
                </div>
            </div>

        </div>
        <div class="centered">
                <div><input type="text" id="cName" value="${name}" disabled><div>
                <button id="addCity">Add City</button>
            </div>

    <div><span class="error" id="error"></span></div>
    </li>
    </ul>`; //Added the last bits of the forecast and added the "Add City" button (Check lines 209-214 for note)
    //Put it all together in main
    main.innerHTML = `<ul id="weather-forecast" class="weather-forecast">
             <li class="forecast">
             <button class="go-back" id="goBack">&#8592; Go Back</button>
             <h1>Today's Weather</h1>
             
             <div class="sky">
                 <div class="current">
                 <h2>${Math.round(data.current.temp)}&#176;F</h2>
                 <div class="description" id="data.current.weather[0].description">${data.current.weather[0].description}</div>

                 <div><image src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" id="data.current.weather[0].icon"></div>
                 <h3>${name}</h3>

                 <div class="possible-grid">
                     <div class="pressure" id="pressure">Pressure:<div class="strong-font">${data.current.pressure} hPa</div></div>
                     <div class="humidity" id="humidity">Humidity:<div class="strong-font">${data.current.humidity}%</div></div>
                     <div class="wind" id="windSpeed">Wind Speed:<div class="strong-font sWind">${Math.round(data.current.wind_speed)} mph</div></div>
                     <div class="clouds" id="clouds">Clouds:<div class="strong-font">${data.current.clouds}%</div></div>
                 </div>
                 </div>
                 ` + tForecast;
    //Reused metric button but with more things to do.            
    metric.addEventListener("click", function() {
        let temper = document.querySelector("h2");
        temper.innerHTML = `${Math.round((data.current.temp -32) * 5/9)}&#176;C`; //Changes to Celsius for current section

        let temps = document.querySelectorAll(".temper");
        for(let i=0; i < temps.length; i++) { //Goes through temperature list data to then change it to Celsius
            for(let i=0; i < data.hourly.length; i++) {
            temps[i].innerHTML = `${Math.round((data.hourly[i].temp - 32) * 5/9)}&#176;C`;
            }
        }

        let tempers = document.querySelectorAll(".tempers"); 
        for(let i=0; i < tempers.length; i++) { //Did similar job like the previous one
            for(let i=0; i < data.daily.length; i++) {
            tempers[i].innerHTML = `${Math.round((data.daily[i].temp.min - 32) * 5/9)}&#176;
                                        <span class="grey tempers">${Math.round((data.daily[i].temp.max- 32) * 5/9)}&#176</span>`;
                                        console.log(tempers[i]);
            }
        }
        
        let sWind = document.querySelector(".sWind"); //Selects the wind speed data
        sWind.innerHTML = `${Math.round((data.current.wind_speed) /2.237)} m/s`; //Converts it to meters per second
        
    });

    imperial.addEventListener("click", function() { //This one just gets the original information that was displayed first
        let temper = document.querySelector("h2");
        temper.innerHTML = `${Math.round(data.current.temp)}&#176;F`;

        let temps = document.querySelectorAll(".temper");
        for(let i=0; i < temps.length; i++) {
            for(let i=0; i < data.hourly.length; i++) {
            temps[i].innerHTML = `${Math.round(data.hourly[i].temp)}&#176;F`;
            }
        }

        let tempers = document.querySelectorAll(".tempers");
        for(let i=0; i < tempers.length; i++) {
            for(let i=0; i < data.daily.length; i++) {
            tempers[i].innerHTML = `${Math.round(data.daily[i].temp.min)}&#176;
                                        <span class="grey tempers">${Math.round(data.daily[i].temp.max)}&#176</span>`;
            }
        }
        
        let sWind = document.querySelector(".sWind");
        sWind.innerHTML = `${Math.round(data.current.wind_speed)} mph`;
        
    });

    
    // const aBtn = document.getElementById("addCity");
    // aBtn.addEventListener("click", () => {
    //     const inpt = document.getElementById("cName");
    //     inpt.innerText = inpt.value;
    //     const newCity = {
    //         city : inpt
    //     }
    //     savedCities.push(newCity);
    //     toMemory.writeToLS(savedCities);
    // })

    blank();
    scrollers(); //This function from utilities.js helps with the scroller event listener
}

/*--------------------------------------------------------------------------------------
Codes I tried for the metric button that kind of worked, but didn't give me
the results I wanted
--------------------------------------------------------------------------------------*/
//temps.innerHTML = `${Math.round((data.hourly.temp - 32) * 5/9)}&#176;C`

        // for(let i=0; i < temps.length; i++) {
        //     for(let hour of data.hourly) {
        //         temps[i].innerHTML += `${Math.round((hour.temp - 32) * 5/9)}&#176;C`;
        //     }
        // }
        // for(let hour of data.hourly) {
           
            // temps.forEach(function(el) {
            //     el.innerHTML = `${Math.round((hour.temp - 32) * 5/9)}&#176;C`;
            // }) 
        //     console.log(temps);
        // }



/* ------------------------------------------------------------------------------------
Button and input I tried to making them work, but it didn't. Originally in lines 94-97.
--------------------------------------------------------------------------------------*/
// `<div class="centered">
//         <div><input type="text" id="cName" value="${name}" disabled><div>
//         <button id="addCity">Add City</button>
//     </div>`