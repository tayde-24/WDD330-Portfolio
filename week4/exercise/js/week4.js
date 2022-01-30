//sass --watch week-4.scss week-4.css
//cd OneDrive/Documents/WDD 330/portfolio/week4
// const form = document.forms.search;
// const form = document.forms['search'];
// const input = form.elements.searchInput;
// input.value = "Search Here"; //Similar to placeholder...but it gives it a value

// form.addEventListener('submit', search, false);

// function search(event) {
//     alert(`You Searched for: ${input.value}`);
//     //alert("Form Submitted");
//     event.preventDefault();
// }

// input.addEventListener('change', () => console.log('change'), false);
// input.addEventListener('focus', () => console.log('focused'), false);
// input.addEventListener('blur', () => console.log('blurred'), false);

// input.addEventListener("focus", function() {
//     if(input.value ==="Search Here") {
//         input.value = "";
//     }
// }, false);

// input.addEventListener("blur", function(){
//     if(input.value === "") {
//         input.value = "Search Here"
//     } }, false);


/*Super hero form exercise*/    

const form = document.forms["hero"];
form.addEventListener("submit", validate, false);
form.addEventListener("submit", makeHero, false);
form.heroName.addEventListener("keyup", disableSubmit, false);
//  let button = document.getElementById("resets");

// button.addEventListener("onclick", clear);


// function clear() {
//     document.getElementById("show").classList.remove("thanks");
//     document.getElementById("show").classList.add("hidden");
// }

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === "X") {
        event.preventDefault();
        alert("Your name is not allowed to start with X!")
    }
}

function makeHero(event) {
    if (!validate()) {
    event.preventDefault(); //prevents the form from being submitted
    const hero = {}; //create an empty object

    hero.name = form.heroName.value; //create a name property based on the input field's value
    hero.realName= form.realName.value;
    hero.powers = [];
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    for(let i= 0; i < form.powers.length; i++) {
        if(form.powers[i].checked) {
            hero.powers.push(form.powers[i].value)
        }
    }

    // document.getElementById("show").classList.add("thanks");
    // document.getElementById("show").setAttribute("style", "display:block");
    // document.getElementById("show").innerHTML = "Thank you for applying!";
    alert(JSON.stringify(hero)); //convert object to JSON string and display in alert dialog
    alert("Thank you for applying!");
    return hero;
    
}
}


const label = form.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "! Your name is not allowed to start with X.";
label.append(error);



function validateInline() {
    const heroName = form.heroName.value.toUpperCase();
    if(heroName.startsWith("X")) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}

function disableSubmit(event) {
    if(event.target.value === "") {
        document.getElementById("submit").disabled = true;
    }
    else {
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").setAttribute("style", "margin-top:2rem,font-family:$pararaph-text,font-size: 1.3rem, color: $yellowish, background-color: $font-color,transition: all 1s,border: none,border-radius: 5px, padding: .5rem 1rem");
    }
}



/*This other portion is for the Tic-Tac-Toe game. I didn't change that much
from the team code*/


var turn = 0;
var gameOver = false;
// const checkedBoard = document.querySelector(".board"); //Why does this work?
// checkedBoard.addEventListener("click", markTable);
function markTable(event) {
    changeCell = event.target;
    if (turn % 2 == 0) {
        changeCell.setAttribute("style", "color:rgb(201, 102, 102)");
        changeCell.innerHTML = "X";
    } else {
        changeCell.setAttribute("style", "color:rgb(112, 41, 139)")
        changeCell.innerHTML = "O";
    }
    turn += 1;
    if (turn == 9) {
        gameOver = true;
    }
    checkWinner();
}

function checkWinner() {
    winner = "";
    cell1 = document.getElementById("1-1").innerHTML;
    cell2 = document.getElementById("1-2").innerHTML;
    cell3 = document.getElementById("1-3").innerHTML;
    cell4 = document.getElementById("2-1").innerHTML;
    cell5 = document.getElementById("2-2").innerHTML;
    cell6 = document.getElementById("2-3").innerHTML;
    cell7 = document.getElementById("3-1").innerHTML;
    cell8 = document.getElementById("3-2").innerHTML;
    cell9 = document.getElementById("3-3").innerHTML;

    if ((cell1 == "X" && cell2 == "X" && cell3 == "X") || (cell1 == "X" && cell5 == "X" && cell9 == "X") || (cell1 == "X" && cell4 == "X" && cell7 == "X") || (cell2 == "X" && cell5 == "X" && cell8 == "X") || (cell3 == "X" && cell5 == "X" && cell7 == "X") || (cell3 == "X" && cell6 == "X" && cell9 == "X") || (cell4 == "X" && cell5 == "X" && cell6 == "X") || (cell7 == "X" && cell8 == "X" && cell9 == "X")) {
        winner = "Player 1 wins!";
        gameOver = true;
        document.getElementById("display-winner").classList.add("winner");
    } else if ((cell1 == "O" && cell2 == "O" && cell3 == "O") || (cell1 == "O" && cell5 == "O" && cell9 == "O") || (cell1 == "O" && cell4 == "O" && cell7 == "O") || (cell2 == "O" && cell5 == "O" && cell8 == "O") || (cell3 == "O" && cell5 == "O" && cell7 == "O") || (cell3 == "O" && cell6 == "O" && cell9 == "O") || (cell4 == "O" && cell5 == "O" && cell6 == "O") || (cell7 == "O" && cell8 == "O" && cell9 == "O")) {
        winner = "Player 2 wins!";
        gameOver = true;
        document.getElementById("display-winner").classList.add("winner");
    } else if (gameOver == true){
        winner = "It's a tie!";
        document.getElementById("display-winner").classList.add("winner");
    }
    
    document.getElementById("display-winner").innerHTML = winner;
    
}
document.getElementById("1-1").addEventListener("click", markTable);
document.getElementById("1-2").addEventListener("click", markTable);
document.getElementById("1-3").addEventListener("click", markTable);
document.getElementById("2-1").addEventListener("click", markTable);
document.getElementById("2-2").addEventListener("click", markTable);
document.getElementById("2-3").addEventListener("click", markTable);
document.getElementById("3-1").addEventListener("click", markTable);
document.getElementById("3-2").addEventListener("click", markTable);
document.getElementById("3-3").addEventListener("click", markTable);

function clearTable() {
    document.getElementById("1-1").innerHTML = "";
    document.getElementById("1-2").innerHTML = "";
    document.getElementById("1-3").innerHTML = "";
    document.getElementById("2-1").innerHTML = "";
    document.getElementById("2-2").innerHTML = "";
    document.getElementById("2-3").innerHTML = "";
    document.getElementById("3-1").innerHTML = "";
    document.getElementById("3-2").innerHTML = "";
    document.getElementById("3-3").innerHTML = "";
    turn = 0;
    gameOver = false;
    document.getElementById("display-winner").innerHTML = "";
    document.getElementById("display-winner").classList.remove("winner");
}
