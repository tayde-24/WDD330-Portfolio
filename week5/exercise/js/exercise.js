
/*This function is simply an exercise of how we can use console.log()
as our debugger*/

function amIOldEnough(age) {
    console.log(age);
        if (age < 12) {
            console.log(`In the if with ${age}`);
            return 'No, sorry.';
        } else if (age < 18) {
            console.log(`In the else-if with ${age}`);
            return 'Only if you are accompanied by an adult';
        } else {
            console.log(`In the else with ${age}`);
            return 'Yep, come on in!';
        }
}

console.log(amIOldEnough(3));
console.log(amIOldEnough(14));
console.log(amIOldEnough(24));

function squareRoot(number) {
    "use strict";
    if(number < 0) {
        throw new RangeError("You can't find the square root of negative numbers.")
    }
    return Math.sqrt(number);
}

//console.log(squareRoot(-49)); //This will cause an error to pop up, so I had to comment it out.

function imaginarySquareRoot(number) {
    "use strict";
    let answer;
    try {
        return String(squareRoot(number));
    } catch(error) {
        return squareRoot(-number)+"i";
    } 
}

console.log(imaginarySquareRoot(-49));

function imaginarySquareRoot2(number) {
    "use strict";
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return `+ or - ${answer}`;
    }
}

console.log(imaginarySquareRoot2(49));



/* Made some small changes with this Superhero quiz with styling and commented out two debuggers in the "ask(name)" method */
const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonderwoman", realName: "Diana Prince"},
    {name: "Batman" , realName: "Bruce Wayne"},
];

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
        this.secondsRemaining = 20;
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
        if(this.questions.length > 0) {
            //debugger;
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
