//saves
export function writeToLS() {
    localStorage.setItem("cityList", JSON.stringify(cityWeather)); //sets data into memory
}

//Outputs
export function readFromLS(key) {
    let memory = JSON.parse(localStorage.getItem(key));
    return memory; 
}