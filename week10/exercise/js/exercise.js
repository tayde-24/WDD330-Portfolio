// const email = document.getElementById("mail");

// email.addEventListener("input", function (event) {
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("I am expecting an e-mail address!");
//         email.reportValidity();
//     } else {
//         email.setCustomValidity("");
//     }
// });

const form = document.getElementsByTagName("form")[1];

const email = document.getElementById("mail");
// const emailError = document.querySelector("#mail + span.error");

// email.addEventListener("input", function(event) {
//     if (email.validity.valid) {
//         emailError.textContent = "";
//         emailError.className = "error";
//     } else {
//         showError();
//     }
// });

// form.addEventListener("submit", function(event) {
//     if(!email.validity.valid) {
//         showError();
//         event.preventDefault();
//     }
// });

// function showError() {
//     if(email.validity.valueMissing) {
//         emailError.textContent = "You need to enter an e-mail address.";
//     } else if( email.validity.typeMismatch) {
//         emailError.textContent = "Entered value needs to be an e-mail address.";
//     } else if(email.validity.tooShort) {
//         emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
//     }

//     emailError.className= "error active"
// }

let error = email;
while((error = error.nextSibling).nodeType != 1);

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function addEvent(element, event, callback) {
    let previousEventCallback = element["on"+event];
    element["on"+event] = function(e) {
        const output = callback(e);
        if(output ===false) return false;
        if(typeof previousEventCallback === "function") {
            output = previousEventCallback(e);
            if(output ===false) return false;
        }
    }
};

addEvent(email, "input", function() {
    const test = email.ariaValueMax.length === 0 || emailRegExp.test(email.value);
    if(test) {
        email.className = "valid";
        error.textContent = "";
        error.className= "error";
    } else {
        email.className = "invalid";
    }
});

addEvent(form, "submit", function() {
    const test = email.value.length === 0 || emailRegExp.test(email.value);

    if(!test) {
        email.className = "invalid";
        error.textContent = "I expect an e-mail, darling!";
        error.className = "error active";
        return false;
    } else {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
})