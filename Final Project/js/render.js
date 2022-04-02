import * as toMemory from "./localStorage.js";
import { readableTime, readableDate, scrollers } from "./utilities.js";
let savedCities = [];
const metric = document.getElementById("metric");
const imperial = document.getElementById("imperial");

export function displayCities(data) {
    console.log(data);
    let wholeList = document.querySelector("ul");
    let list = document.createElement("li");
    list.classList.add("item");
    let name = data.name;
    let icon = data.weather[0].icon;
   //let temper = data.main.map(t => `<span>${t.temp}</span></li><button>Delete</button>}`);
    let temper = Math.round(data.main.temp);
    let description = data.weather[0].description;
    // let together = `<li class="item"><span>${name}</span><image src="http://openweathermap.org/img/w/${icon}.png"></span><span>${temper}&#176;</span></li><button>Delete</button>`;
    let together = `<li class="item"><span class="spacing">${name}</span><span><image src="http://openweathermap.org/img/wn/${icon}@2x.png"></span><span>${temper}&#176;F</span><button src=""><span class="delete"></span></button><span class="small-font">${(description).toUpperCase()}</span></li>`;
    
    wholeList.innerHTML = together;

    metric.addEventListener("click", function() {
        let temper = Math.round((data.main.temp -32) * 5/9);
        let together = `<li class="item"><span class="spacing">${name}</span><span><image src="http://openweathermap.org/img/wn/${icon}@2x.png"></span><span class="block">${temper}&#176;C</span><button src=""><span class="delete"></span></button><span class="small-font">${(description).toUpperCase()}</span></li>`;
        wholeList.innerHTML = together;
    })
    imperial.addEventListener("click", function() {
        let temper = Math.round(data.main.temp);
        let together = `<li class="item"><span class="spacing">${name}</span><span><image src="http://openweathermap.org/img/wn/${icon}@2x.png"></span><span>${temper}&#176;F</span><span><button src=""><span class="delete"></span></button></span><span class="small-font">${(description).toUpperCase()}</span></li>`;
        wholeList.innerHTML = together;
    })
    console.log(list);
}

export function displayForecast(name, id, data) {
    
    console.log(name);
    console.log(id);
    console.log(data);
    
    // console.log(typeof(data));
    //console.log(data.daily[0]);

    const main = document.querySelector("main");
    main.classList.add("c-m");
    main.setAttribute("style", "margin-bottom:5rem;");
    let tForecast = `<div class="forecasting">
                        <div class="hourly">
                            <p>Hourly Forecast Today</p>
                                <ul id="hori-scroll" class="hori-scroll">`;

    if (data.hourly.length > 24) {
        data.hourly.length = 24;
    }
    console.log(data.hourly);
    for (let hour of data.hourly) {
        //let hours = data.hourly.length;
        tForecast += `<li>
                        <div>${readableTime(hour.dt, data.timezone_offset)}</div>
                        <div><image src="http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png"></div>
                        <div class="temper">${Math.round(hour.temp)}&#176;F</div>
                        </li>`;
    }
    tForecast += `<ul>
                </div>

                <div class="future-forecast">
                    <p>Forecast for the next 7 days</p>
                    <ul class="vertical-scroll" id="vertical scroll">`;
    for (let day of data.daily) {
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
    <button>Add City</button>
    </li>
    </ul>`;
    
    main.innerHTML = `<ul id="weather-forecast" class="weather-forecast">
             <li class="forecast">
             <button class="go-back" id="goBack">&#8592; All Cities</button>
             <h1>Today's Weather</h1>
             <span class="error" id="error"></span>
             <div class="sky">
                 <div class="current">
                 <h2>${Math.round(data.current.temp)}&#176;F</h2>
                 <div class="description" id="data.current.weather[0].description">${data.current.weather[0].description}</div>

                 <div><image src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" id="data.current.weather[0].icon"></div>
                 <h3>${name}</h3>

                 <div class="possible-grid">
                     <div class="sunrise" id="data.current.pressure">Pressure:<div class="strong-font">${data.current.pressure} hPa</div></div>
                     <div class="sunset" id="data.current.humidity">Humidity:<div class="strong-font">${data.current.humidity}%</div></div>
                     <div class="wind" id="data.current.wind_speed">Wind Speed:<div class="strong-font">${Math.round(data.current.wind_speed)} mph</div></div>
                     <div class="rain" id="data.current.clouds">Clouds:<div class="strong-font">${data.current.clouds}%</div></div>
                 </div>
                 </div>
                 ` + tForecast;
                //  </li>
                //  </ul>

    metric.addEventListener("click", function() {
        let temper = document.querySelector("h2");
        temper.innerHTML = `${Math.round((data.current.temp -32) * 5/9)}&#176;C`;

        let temps = document.querySelectorAll(".temper");
        for(let i=0; i < temps.length; i++) {
            for(let i=0; i < data.hourly.length; i++) {
            temps[i].innerHTML = `${Math.round((data.hourly[i].temp - 32) * 5/9)}&#176;C`;
            }
        }
        
        
    });
    imperial.addEventListener("click", function() {
        let temper = document.querySelector("h2");
        temper.innerHTML = `${Math.round(data.current.temp)}&#176;F`;

        let temps = document.querySelectorAll(".temper");
        for(let i=0; i < temps.length; i++) {
            for(let i=0; i < data.hourly.length; i++) {
            temps[i].innerHTML = `${Math.round(data.hourly[i].temp)}&#176;F`;
            }
        }
        
    });

    scrollers();

    // let template = `<ul id="weather-forecast" class="weather-forecast">
    //         <li class="forecast">
    //         <button class="go-back" id="goBack">&#8592; All Cities</button>
    //         <h1>Today's Weather</h1>
    //         <div class="sky">
    //             <div class="current">
    //             <h2>90&#176;F</h2>
    //             <div class="description" id="data.current.weather[0].description">misty</div>

    //             <div><image src="http://openweathermap.org/img/wn/10n@2x.png" id="data.current.weather[0].icon"></div>
    //             <h3>Oxnard</h3>
    //             <div class="high-temp data." id="high-temp"></div>
    //             <div class="low-temp" id="low-temp"></div>

    //             <div class="possible-grid">
    //                 <div class="sunrise" id="data.current.pressure">Pressure:</div>
    //                 <div class="sunset" id="data.current.humidity">Humidity:</div>
    //                 <div class="wind" id="data.current.wind_speed">Wind Speed:</div>
    //                 <div class="rain" id="data.current.rain">Chance of rain:</div>
    //             </div>
    //             </div>

    //             <div class="forecasting">
    //                 <div class="hourly">
    //                 <p>Hourly Forecast Today:</p>
    //                 <ul id="hori-scroll" class="hori-scroll">
    //                     <li>
    //                     <div>12 P.M.</div>
    //                     <div><image src="http://openweathermap.org/img/wn/10n@2x.png"></image></div>
    //                     <div>90&#176;F</div>
    //                     </li>
                        
    //                     <li>
    //                     <div>1 P.M.</div>
    //                     <div><image src="http://openweathermap.org/img/wn/11n@2x.png"></image></div>
    //                     <div>90&#176;F</div>
    //                     </li>
                        
    //                     <li>
    //                     <div>2 P.M.</div>
    //                     <div><image src="http://openweathermap.org/img/wn/01n@2x.png"></image></div>
    //                     <div>90&#176;F</div>
    //                     </li>
                        
    //                     <li>
    //                     <div>3 P.M.</div>
    //                     <div><image src="http://openweathermap.org/img/wn/02n@2x.png"></image></div>
    //                     <div>90&#176;F</div>
    //                     </li>
                        
    //                     <li>
    //                     <div>4 P.M.</div>
    //                     <div><image src="http://openweathermap.org/img/wn/10d@2x.png"></image></div>
    //                     <div>90&#176;F</div>
    //                     </li>
                        
    //                     <li>
    //                     <div>5 P.M.</div>
    //                     <div><image src="http://openweathermap.org/img/wn/10n@2x.png"></image></div>
    //                     <div>90&#176;F</div>
    //                     </li>
                        
    //                     <li>
    //                     <div>6 P.M.</div>
    //                     <div><image src="http://openweathermap.org/img/wn/10n@2x.png"></image></div>
    //                     <div>90&#176;F</div>
    //                     </li>
                        
    //                     <li>
    //                     <div>7 P.M.</div>
    //                     <div><image src="http://openweathermap.org/img/wn/10n@2x.png"></image></div>
    //                     <div>90&#176;F</div>
    //                     </li>
                        
    //                 </ul>
    //                 </div>
                    
    //                 <div class="future-forecast">
    //                 <p>Forecast for the next 7 days:</p>
    //                 <ul class="vertical-scroll" id="vertical-scroll">
    //                     <li><span class="spacing">Tomorrow</span><span><image src="http://openweathermap.org/img/wn/11n@2x.png"></span><span class="small-font">Thunderstorm</span><span>90&#176;F</span></li>
    //                     <li><span class="spacing">Tomorrow</span><span><image src="http://openweathermap.org/img/wn/11n@2x.png"></span><span class="small-font">Thunderstorm</span><span>90&#176;F</span></li>
    //                     <li><span class="spacing">Tomorrow</span><span><image src="http://openweathermap.org/img/wn/11n@2x.png"></span><span class="small-font">Thunderstorm</span><span>90&#176;F</span></li>
    //                     <li><span class="spacing">Tomorrow</span><span><image src="http://openweathermap.org/img/wn/11n@2x.png"></span><span class="small-font">Thunderstorm</span><span>90&#176;F</span></li>
    //                     <li><span class="spacing">Tomorrow</span><span><image src="http://openweathermap.org/img/wn/11n@2x.png"></span><span class="small-font">Thunderstorm</span><span>90&#176;F</span></li>
    //                     <li><span class="spacing">Tomorrow</span><span><image src="http://openweathermap.org/img/wn/11n@2x.png"></span><span class="small-font">Thunderstorm</span><span>90&#176;F</span></li>
    //                     <li><span class="spacing">Tomorrow</span><span><image src="http://openweathermap.org/img/wn/11n@2x.png"></span><span class="small-font">Thunderstorm</span><span>90&#176;F</span></li>
    //                     <li><span class="spacing">Tomorrow</span><span><image src="http://openweathermap.org/img/wn/11n@2x.png"></span><span class="small-font">Thunderstorm</span><span>90&#176;F</span></li>
    //                 </ul>
    //                 </div>
    //             </div>

    //         </div>
    //         <button>Add City</button>
    //         </li>
    //     </ul>`;
}

/*Codes I tried for the metric button that kind of worked, but didn't give me
the results I wanted

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

--------------------------------------------------------------------------------------*/
