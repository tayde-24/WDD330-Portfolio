import { getInfo } from "./weatherApp.js";

const btn = document.getElementById("searchCity");

btn.addEventListener("click", getInfo);

