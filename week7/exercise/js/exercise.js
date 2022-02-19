//cd OneDrive/Documents/WDD 330/portfolio/week7
//sass --watch week7.scss week7.css
//sass week7.scss:week7.css
/* Made some small changes with this Superhero quiz with styling and commented out two debuggers in the "ask(name)" method */
const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonderwoman", realName: "Diana Prince"},
    {name: "Batman" , realName: "Bruce Wayne"},
    {name: "Flash" , realName: "Berry Allen"},
    {name: "Nightwing" , realName: "Dick Greyson"},
    {name: "Kid Flash" , realName: "Walley West"},
    {name: "Tigress" , realName: "Artemis Crock"},
];

function random(a, b=1) {
    //if only 1 argument is provided, we need to swap the values of a and be
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
    for (let i= array.length; i; i--) {
        let j = random(i)-1;
        [array[i-1], array[j]] = [array[j], array[i-1]];
    }
}

//View Object
const view = {
    score: document.querySelector("#score strong"),
    scored: document.querySelector("#score"),    //Added this in the object to add some styling for the background
    question:document.querySelector("#question"),
    result: document.querySelector("#result"),
    info: document.querySelector("#info"),
    start: document.querySelector("#start"),
    response: document.querySelector("#response"),
    timer: document.querySelector("#timer strong"),
    timerColor: document.querySelector("#timer"), //Added this too to change the background-color
    render(target, content, attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = "block";
    },
    hide(element) {
        element.style.display = "none";
    },
    resetForm() {
        this.response.answer.value = "";
        this.response.answer.focus();
        this.scored.setAttribute("style", "background-color:white"); //Brings the background color back to white on reset
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, "");
        this.render(this.info, "");
        this.resetForm();
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
}

const game = {
    start(quiz) {
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.secondsRemaining = 60;
        this.timer = setInterval( this.countdown, 1000);
        this.ask();
    },
    countdown() {
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        view.timerColor.setAttribute("style", "background-color: #4dd87b"); //After clicking the "Click to Start" button, it will go back with it's green color again.
        if(game.secondsRemaining <= 10 && game.secondsRemaining >= 1) {
            view.timerColor.setAttribute("style", "background-color: #ff6464");
        } else if (game.secondsRemaining <= 0) {
            view.timerColor.setAttribute("style", "background-color: grey");
            view.scored.setAttribute("style", "background-color: rgb(253, 224, 143)");
            game.gameOver();     
        }
    },
    ask(name) {
        console.log("ask() invoked");
        if(this.questions.length > 0) {
            //debugger;
            shuffle(this.questions);
            this.question = this.questions.pop();
            console.log("checking in");
            console.log(this.question);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
        } else {
            //debugger
            console.log("checking out");
            view.timerColor.setAttribute("style", "background-color: grey");
            view.scored.setAttribute("style", "background-color: rgb(253, 224, 143)");
            this.gameOver();
        }
    },
    check(event) {
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if(response === answer) {
            view.render(view.result, "Correct!", {"class": "correct"});
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, {"class": "wrong"});
        }
        view.resetForm();
        this.ask();
    },
    gameOver() {
        console.log("will be caught when questions run out");
        view.render(view.info, `Game Over <br> You scored ${this.score} point${this.score !== 1 ? "s" : ""}`);
        view.teardown();
        clearInterval(this.timer);
    }
}

view.start.addEventListener("click", () => game.start(quiz), false);
view.response.addEventListener("submit", (event) => game.check(event), false);
view.hide(view.response);

console.log('start() invoked');
console.log('ask() invoked');
console.log('check(event) invoked');
console.log('gameOver() invoked');


//Chuck Norris API Section

const textButton = document.getElementById("number");
const apiButton = document.getElementById("chuck");
const outputDiv = document.getElementById("output");

const textURL = "http://numbersapi.com/random";
const apiURL = "https://api.chucknorris.io/jokes/random";

textButton.addEventListener("click", () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = "Waiting for response...";
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then(text => outputDiv.innerHTML = text)
    .catch( error => console.log("There was an error", error))
}, false);

apiButton.addEventListener("click", () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = "Waiting for response...."
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerHTML = data.value)
    .catch( error => console.log("There was an error:", error))
}, false);

apiButton.disabled = true;
apiButton.setAttribute("style", "background-color:rgb(88, 88, 88); color:rgb(61, 61, 61);");

const form = document.forms["todo"];
form.addEventListener("submit", addTask, false);

function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);
    const url = "https://jsonplaceholder.typicode.com/todos";

    const headers = new Headers({
        "Accept": "application/json",
        "Content-Type" : "application/json"
    });
    const request = new Request(url, {
        method: "POST",
        header: headers,
        body: data
    }
    )
    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log("There was an error", error))
}
