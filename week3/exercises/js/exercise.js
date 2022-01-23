const superman = {
    name: "Superman",
    "real name": "Clark Kent",
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ["Batman", "Supergirl", "Superboy"],
    catchPhrase() {
        return "Truth, Justice and a Better Tomorrow!";
    }
};
let color = ["#FF5733", "#DAF7A6", 
            "#A633FF ", "#0FB74B",
            "#DB7093", "#FF7F50",
            "#E6E6FA", "#8B008B",
            "#808000", "#FFEBCD",
            "#000000", "#ffffff"];

//console.log(superman.catchPhrase());

function execute() {
    const beginning= "<table><tr><th>Key</th><th>Value</th></tr>";
    let insideTable= "";
    for(const key in superman) {
        if (key === "catchPhrase") {
            let key = "Catch Phrase";
            let phrase = superman.catchPhrase(key);
            insideTable += "<tr><td>" + key + "</td><td>" + '"' + phrase + '"' + "</td></tr>";
        }
        else if (key === "allies") {
            let newText = "";
            newText += superman.allies.join(", ");
            insideTable += "<tr><td>" + key + "</td><td>" + '"' + newText + '"' + "</td></tr>";
        } else {
        insideTable += "<tr><td>" + key + "</td><td>" + superman[key] + "</td></tr>";
    }
    }
    document.getElementById("show-table").innerHTML = beginning + insideTable + "</table>";
    document.getElementById("change-title").innerHTML = "Superman Info"; 
    document.getElementById("click-here").innerHTML = "Click on the table to make it disappear!"
}

// function works() {
//     document.getElementById("clear").onclick;
//     document.getElementById("change-title").innerHTML = "Hello";
// }

// function addKeyValue() {
//     let newSuper = superman;
//     let key = document.getElementById("key").value;
//     let value = document.getElementById("value").value;
//     newSuper[key, value];
//     document.getElementById("show-table").value = newSuper;
// }

const dice = {
    sides: 20,
    roll() {
        document.getElementById("number-roll").innerHTML= Math.floor(this.sides * Math.random()) + 1;
    }
}

function rolledDice() {
    dice.roll();
}


/*Maybe do this with the clear button? This could probably work.*/
// const clickTable = document.getElementById("show-table");
// clickTable.addEventListener('click', magic);

// function magic() {
//     document.getElementById("show-table").innerHTML = "I got clicked";
//     document.getElementById("change-title").innerHTML= "Click on button to see Superman's simple Character info"
//     document.getElementById("click-here").innerHTML= " ";
// }

/*This handles the Event listener on clearing out the table*/
const buttonClick = document.getElementById("clear");
buttonClick.addEventListener("click", magic);
function magic() {
    document.getElementById("show-table").innerHTML = "You clicked the clear button.";
    document.getElementById("change-title").innerHTML= "Click on button to see Superman's simple Character info"
    document.getElementById("click-here").innerHTML= " ";
}

//const changeC = document.getElementById("changeColor");
/*This handles the Event listener on changing the color inside the rectangle*/
let change = document.getElementById("changeColor");
change.addEventListener("click", colorChange);

function colorChange() {
    var randomColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("changeColor").style.background = randomColor;
}

/*This handles the Event listener on changing the words inside the rectangle.*/
let changeW = document.getElementById("changeWords");
changeW.addEventListener("click", wordChanger);

function wordChanger() {
    document.getElementById("changeWords").innerHTML = "How do you do? Nice to meet you!";
}

/*This handles the Event listener on getting the coordinates of the rectangle area.*/
let coord = document.getElementById("coordinates");
coord.addEventListener("click", changeC);

function changeC(event){
    //console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
    document.getElementById("coor").innerHTML = "Screen: (" + event.screenX + "," + event.screenY +
                                                "), Page: (" + event.pageX + "," + event.pageY + "), Client: (" + event.screenX + "," + event.screenY + ")" ;
    document.getElementById("coor").style.marginLeft = "4rem";
}


/*This event handler will make this rectangle box and its words disappear*/
let dRectangle = document.getElementById("disappear");
dRectangle.addEventListener("click", makeDis);

function makeDis() {
    //console.log("You will not be able to use it again.");
    document.getElementById("disappear").style.display = "none";
    dRectangle.removeEventListener("click", makeDis);
}



let shifter = document.getElementById("shiftRight");
shifter.addEventListener("mouseover", shifterR);
shifter.addEventListener("mouseout", shifterR);

function shifterR(event) {
    for(i=0; i< color.length; i++) {
        var randomColor = color[Math.floor(Math.random() * color.length)];
        document.getElementById("shiftRight").style.background = randomColor;
    }
    for(i=0; i< color.length; i++) {
        var randomColors = color[Math.floor(Math.random() * color.length)];
        document.getElementById("shiftRight").style.color = randomColors;
    }
    if (event) {
        //console.log(`You went over this rectangle ${event}`);
        document.getElementById("shiftRight").style.marginLeft = "45rem";
        document.getElementById("shiftRight").style.fontSize = "1.8rem";  
    }
}

const message = document.getElementById("consoleCheck");
message.addEventListener("click", () => console.log("I hope you liked my presentation!\nHope you enjoy the rest of your day!\nBye-bye!"));
