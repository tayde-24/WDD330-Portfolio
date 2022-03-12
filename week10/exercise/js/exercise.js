const emails = document.getElementById("mail");

emails.addEventListener("input", function (event) {
    if (emails.validity.typeMismatch) {
        emails.setCustomValidity("I am expecting an e-mail address!");
        emails.reportValidity();
    }
    // else if(emails.validity.valueMissing) {
    //     emails.setCustomValidity("No value found. Please input your email address!");
    //     emails.reportValidity(); }
    else {
        emails.setCustomValidity("");
    }
});

const form = document.getElementsByTagName("form")[2];
const emailss = document.getElementById("mail-2");

/*This with the built-in API for validating forms*/
const emailError = document.querySelector("#mail-2 + span.error");

emailss.addEventListener("input", function(event) {
    if (emailss.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
    }
});

form.addEventListener("submit", function(event) {
    if(!emailss.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if(emailss.validity.valueMissing) {
        emailError.textContent = "You need to enter an e-mail address.";
    } else if( emailss.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if(emailss.validity.tooShort) {
        emailError.textContent = `Email should be at least ${emailss.minLength} characters; you entered ${emailss.value.length}`;
    }

    emailError.className= "error active";
}


const form2 = document.getElementsByTagName("form")[3];
const email3 = document.getElementById("mail-3");
/*This without the built-in API for validating forms*/
let error = email3;
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

addEvent(email3, "input", function() {
    const test = email3.value.length === 0 || emailRegExp.test(email3.value);
    if(test) {
        email3.className = "valid";
        error.textContent = "";
        error.className= "error";
        email3.setAttribute("style", "width:100%;font-size:90%;font-family:'Oswald'");
    } else {
        email3.className = "invalid";
        email3.setAttribute("style", "width:100%;font-size:90%;font-family:'Oswald'");
    }
});

addEvent(form2, "submit", function() {
    const test = email3.value.length === 0 || emailRegExp.test(email3.value);

    if(!test) {
        email3.className = "invalid";
        error.textContent = "I expect an e-mail, darling!";
        error.className = "error active";
        return false;
    } else {
        email3.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
})

var myArticle = document.querySelector("article");
var myLinks = document.querySelectorAll("ul a");
for( var i=0; i <= myLinks.length - 1; i++) {
    myLinks[i].onclick = function(e) {
        e.preventDefault();
        var linkData = e.target.getAttribute("data-page");
        getData(linkData);
    }
};

function getData(pageId) {
    console.log(pageId);
    var myRequest = new Request(pageId + ".txt");

    fetch(myRequest)
    .then(function(response) {
        if(!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.text();
    })
    .then(function(text) {
        myArticle.classList.add("art");
        //myArticle.setAttribute("art", "background-color:white;border-radius:10px;padding-bottom: 2rem;box-shadow:2px 2px 10px gray;");
        myArticle.innerHTML = text;
    })
    .catch(function(error) {
        myArticle.innerHTML = "";
        myArticle.appendChild(
            document.createTextNode("Error: "+ error.message)
        );
    });
}

myArticle.addEventListener("click", () => {
    myArticle.classList.remove("art");
    myArticle.innerHTML = "<i>Text will appear here...</i>";
    //myArticle.setAttribute("style", "background-color:white;border-radius:10px;padding-bottom: 2rem;box-shadow: 2px 2px 10px gray;")
})
//Website used for this Form exercise: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
//Website used for this Form exercise: https://github.com/mdn/fetch-examples/blob/master/fetch-text/index.html