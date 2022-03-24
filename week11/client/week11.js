import {makeRequest} from "./authHelpers.js";
import Auth from "./auth.js"

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });
let auth = new Auth();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    auth.login();
})
//auth.login();