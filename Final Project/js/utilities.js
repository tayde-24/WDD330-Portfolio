//import { getInfo } from "./weatherApp.js";
import { CurrentWeather, ForecastWeather } from "./weatherApp.js";

export function Errors() {
    //document.querySelector(".error").classList.add("markError");
    document.querySelector(".error").setAttribute("style", "padding:1rem 3rem;background-color:red;color:white;font-family:'Titillium Web';font-weight:600;text-transform:uppercase;");
    //document.querySelector(".markError").setAttribute("style", "padding:1rem 3rem;background-color:red;color:white;");
    //document.getElementById("searchingCity").setAttribute("focus", "background-color:red;");
}

export function makeBlank() {
    document.getElementById("error").innerHTML = "";
    //document.getElementById("searchingCity").value = "";
    document.querySelector(".error").setAttribute("style", "display:hidden");
    //document.querySelector(".markError").setAttribute("style", "display:hidden");
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
    console.log(`${day}, ${month} ${d}`);
}
showDate();

const btn = document.getElementById("searchCity");
let n = new CurrentWeather();
btn.addEventListener("click", n.getCurrentWeather);

