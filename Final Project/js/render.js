import * as toMemory from "./localStorage.js";
let savedCities = [];
const metric = document.getElementById("metric");
const imperial = document.getElementById("imperial");

export function displayCities(data) {
    console.log(data.coord);
    let wholeList = document.querySelector("ul");
    let list = document.createElement("li");
    list.classList.add("item");
    let name = data.name;
    let icon = data.weather[0].icon;
   //let temper = data.main.map(t => `<span>${t.temp}</span></li><button>Delete</button>}`);
    let temper = Math.round(data.main.temp);
    // let together = `<li class="item"><span>${name}</span><image src="http://openweathermap.org/img/w/${icon}.png"></span><span>${temper}&#176;</span></li><button>Delete</button>`;
    let together = `<li class="item"><span class="spacing">${name}</span><span><image src="http://openweathermap.org/img/w/${icon}.png"></span><span>${temper}&#176;F</span><button src=""><span class="delete"><span></button></li>`;
    
    wholeList.innerHTML = together;

    metric.addEventListener("click", function() {
        let temper = Math.round((data.main.temp -32) * 5/9);
        let together = `<li class="item"><span class="spacing">${name}</span><span><image src="http://openweathermap.org/img/w/${icon}.png"></span><span class="block">${temper}&#176;C</span><button src=""><span class="delete"><span></button></li>`;
        wholeList.innerHTML = together;
    })
    imperial.addEventListener("click", function() {
        let temper = Math.round(data.main.temp);
        let together = `<li class="item"><span class="spacing">${name}</span><span><image src="http://openweathermap.org/img/w/${icon}.png"></span><span>${temper}&#176;F</span><span><button src=""><span class="delete"><span></button></span></li>`;
        wholeList.innerHTML = together;
    })
    console.log(list);
    //<li class="item">Helo <span>hello</span><span>90deg</span></li><button>Delete</button>
}

export function displayForecast(data) {
    console.log(data);

}
