//const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

export function getJSON(url) {
    fetch(url)
    .then( response => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(error => console.log("There was an error", error));

}

// export const getLocation = function(options) {
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject, options);
//     });
// };
export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

// function resolve(options) {
//     console.log(options.coords.latitude);
// }

// function options(position) {
//     position.coords.latitude;
//     position.coords.longitude;
// }
//getJSON(url);