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

    alert(JSON.stringify(hero)); //convert object to JSON string and display in alert dialog
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
    }
}
