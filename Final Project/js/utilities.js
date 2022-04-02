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
showDate();

const btn = document.getElementById("searchCity");
let n = new CurrentWeather();
let f = new ForecastWeather();
//btn.addEventListener("click", n.getCurrentWeather);
btn.addEventListener("click", f.getForecast);

