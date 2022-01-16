// const question = "What is Superman's real name?";
// const answer = prompt(question);

// alert(`You answered ${answer}`);
// let score = 0; //initializes score
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name", "Bruce Wayne"],
    ["What is the student's name who made this portfolio?", "Tayde A. Luevano"]
]

/*------------------------ Part two practice ------------------------------*/

// for(const [question, answer] of quiz) {
//     const response = prompt(question);
//     if(response === answer) {
//         alert("Correct!");
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }

// alert(`Game Over, you scored ${score} point${score !==1 ? 's' : ''}`);

/*---------------------------------------------------------------------------*/

function start(quiz) {
    let score = 0;  //makes score variable
    let printScore = document.getElementById("your-score").value;
    //main game loop
    for(const [question, answer] of quiz) {
        const response = ask(question);
        check(response,answer);
    }
    //end of main game loop

    gameOver(); //calling game over function

    //function declarations
    function ask(question) {
        return prompt(question);
    }

    function check(response,answer) {
        if(response === answer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        alert(`Game Over, you scored ${score} point${score !==1 ? 's' : ''}`);
        if(score !== 0) {
            document.getElementById("your-score").innerHTML = "Here is your score: " + score + "<br>Congratulations!!!";
        } else {
            document.getElementById("your-score").innerHTML = "Here is your score: " + score + "<br>Sorry, you lose.<br>Try again?";
        }
    }
    document.getElementById("button").onclick = function() {
        start(quiz);
    }
}




start(quiz); //calls on game