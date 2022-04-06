//import { getInfo } from "./weatherApp.js";
import * as toMemory from "./localStorage.js";
import { displayCities } from "./render.js";
import { CurrentWeather, ForecastWeather } from "./weatherApp.js";
import { cityWeather } from "./weatherApp.js";


export function Errors() {
    document.getElementById("searchingCity").value = "";
    document.querySelector(".error").setAttribute("style", "padding:1rem 3rem;background-color:red;color:white;font-family:'Titillium Web';font-weight:600;text-transform:uppercase;width:25rem;display:table;margin-left:auto;margin-right:auto;");
    
}

export function makeBlank() {
    document.getElementById("error").innerHTML = "";
    document.querySelector(".error").setAttribute("style", "display:hidden");
}

export function blank() {
    document.getElementById("searchingCity").value = "";
}

function showDate() {
    const date = document.getElementById("today-date");
    const today = new Date();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var day = days[today.getDay()];
    var month = months[today.getMonth()];
    var d = today.getDate();

    date.innerHTML = `${day}, ${month} ${d}`;
    //console.log(`${day}, ${month} ${d}`);
    return date;
}

//Make sure to put this in a function.
export function scrollers() {
    const scrollContainer = document.getElementById("hori-scroll");
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        //scrollContainer.scroll -= evt.deltaY;
    });


    /*This code is what I used to make the mouse be able to scroll the hourly
    section horizontally. I got this code from https://codepen.io/thenutz/pen/VwYeYEE*/
    let isDown = false;
    let startX;
    let scrollLeft;

    const slider = document.querySelector(".hori-scroll");
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        //console.log(walk);
    });

    // /* End of Ionut Daniel's code that helped me with this section----*/
    let startY;
    let scrollTop;
    const vSlider = document.querySelector(".vertical-scroll");
    vSlider.addEventListener("mousedown", (e) => {
        isDown = true;
        vSlider.classList.add("active");
        startY = e.pageY - vSlider.offsetTop;
        scrollTop = vSlider.scrollTop;
    });

    vSlider.addEventListener("mouseleave", () => {
        isDown = false;
        vSlider.classList.remove("active");
    });

    vSlider.addEventListener("mouseup", () => {
        isDown = false;
        vSlider.classList.remove('active');
    });

    vSlider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const y = e.pageY - vSlider.offsetTop;
        const walk = (y - startY) * 3;
        vSlider.scrollTop = scrollTop - walk;
        //console.log(walk);
    });
}


export function readableTime(time, offset) {
    let day = new Date(time * 1000 + offset);
    //console.log(day);
    let hour = day.getHours();
    return (hour%12 === 0 ? "12" : hour%12) + (hour >= 12 ? "P.M." : "A.M.");
    // let options = {hour12: true, hour:"2-digit"};
    // day = day.toLocaleString(options);
    // let ampm = day.indexOf("M", 11) + 1;
    //return day.substring(11, ampm);
}

export function readableDate(date, offset) {
    let day = new Date(date * 1000 + offset);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //console.log(day);
    day = days[day.getDay()];
    return day;
}

function loadTime() {
    
        showDate();
        var today = new Date();
        var hours = today.getHours();
        var minutes =today.getMinutes();
        var sec = today.getSeconds();

        var amPM = "am";
        if(hours > 12) {
            amPM = "pm";
            hours = hours -12;
        }
        if( minutes < 10) {
            minutes = "0" + minutes;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        var time = hours + ":" + minutes + " : " + sec + " " + amPM;
        //console.log(time);
        //console.log(showDate());
        setTimeout(function(){loadTime()}, 1000);
        document.getElementById("time").innerHTML = time;
        document.getElementById("time").classList.add("hide");
        document.querySelector(".hide").setAttribute("style", "display:none;")
}

export function loadWindow() {
    window.addEventListener("DOMContentLoaded", () => {
    let cityWeather = toMemory.readFromLS('cityList');
    if(cityWeather === null) {
        cityWeather = [];
     }
    //console.log(arrayItems);
    let n = new CurrentWeather();
    n.getI(cityWeather);
    //return cityWeather === null ? []:cityWeather;
    
    
    
    //let cityWeather = toMemory.readFromLS("cityList");
    
});
// let n = new CurrentWeather();
// n.getI(cityWeather);
    //displayCities(cityWeather);
}

setTimeout(() => {
    document.querySelector(".big-font").classList.add("hide-i");
    document.querySelector(".hide-i").setAttribute("style", "display:none;");
}, 7999);

loadTime();
loadWindow();
/*------------------------------------------------------------------------
Note to teacher:
I keep getting two bugs that I don't know how to resolve.

One: When clicking on the metric button for the full forecast part, some of the 
daily forecast don't change into metrics like I want them to. This is found
in @render.js file in lines 178-183.

Second: I keep having issues with localStorage. It seems to overwrite the cities
after inputing a new city each time I refresh it (same issue I had with the Todo List
assignment). The localStorage.js file should be fine. I'm not sure where the problem
is occuring for this one.

For now, I'm working on the first part where I'm inputing the cities in the first
part so I can try to figure out how to get them to show up in the list and then
get the delete button to work. 

--------------------------------------------------------------------------*/
const btn = document.getElementById("searchCity");
let n = new CurrentWeather();
//btn.addEventListener("click", n.getCurrentWeather);

let f = new ForecastWeather();
btn.addEventListener("click", f.getForecast);

/* if(favorites.some(f => f.data[0].nasa_id === id))
*/

