console.log(window.screen.height);
console.log(window.screen.width);
console.log(window.location.toString());
window.resizeTo(600,400);

const squareElement = document.getElementById("square");
let angle = 0;

// setInterval(() =>{
//     angle = (angle + 2) % 360;
//     squareElement.style.transform = `rotate(${angle}deg)`
// }, 1000/60);

function rotate() {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);

//const popup= window.open("https://sitepoint.com", "SitePoint", "width=400, height=400,resizable=yes");
const colorChange = document.querySelector("input");
colorChange.addEventListener("keydown", changeColors);
function changeColors() {
    const randColor = Math.floor(Math.random()*16777215).toString(16);
    colorChange.style.border = `8px solid #${randColor}`;
}


// const button = document.getElementById("btn");
// button.addEventListener("toggle", disappear);
function disappear() {
    const element = document.getElementById("btn");
    //const message = document.getElementById("hiddenM");
    //message.classList.toggle("none");
    element.classList.toggle("disappear");
    //message.innerHTML = "Woah! I disappered!";  
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("result").innerHTML = "Started dragging word.";
    document.getElementById("result").setAttribute("style", "color:orangered;font-weight:600;")
}

function dragEnd(event) {
    document.getElementById("result").innerHTML = "Finished dragging word!";
    document.getElementById("result").setAttribute("style", "color:purple;font-weight:600;")
}

function wordsP(event) {
    var x= event.clientX;
    var y = event.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("hover").innerHTML = "Aren't you glad you hovered over me? <br> " + coor;
    document.getElementById("hover").style.paddingTop = "1rem";
    
}

function clearWords() {
    document.getElementById("hover").innerHTML = "Hover over me";
    document.getElementById("hover").style.paddingTop = "4rem";
}

const focusss = document.getElementById("focusMe");
focusss.addEventListener("focusin", () => {
    focusss.setAttribute("style", "background-color:rgb(73, 6, 73);color:#ffffff;transition:all .5s ease-in-out");
    //focusss.disabled = true;
});

focusss.addEventListener("focusout", () => {
    focusss.setAttribute("style", "background-color:#ffffff;transition:all .5s eas-in-out");
    //focusss.disabled = false;
});

const touch = document.getElementById("touch");
touch.addEventListener("touchstart", (event) => {
    let color = ["#FF5733", "#DAF7A6", 
            "#A633FF ", "#0FB74B",
            "#DB7093", "#FF7F50",
            "#E6E6FA", "#8B008B",
            "#808000", "#FFEBCD",
            "#000000", "#ffffff"];
    var randomColor = color[Math.floor(Math.random() * color.length)];
    for(i=0; i< color.length; i++) {
        var randomColor = color[Math.floor(Math.random() * color.length)];
        document.getElementById("touch").style.background = randomColor;
    }
    for(i=0; i< color.length; i++) {
        var randomColor = color[Math.floor(Math.random() * color.length)];
        document.getElementById("touch").style.color = randomColor;
    }
    if(event) {
        document.getElementById("touch").style.transform = "rotate(10deg)";
    }
})