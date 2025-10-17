import "./styles.css";
import { intialPageLoad } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

const homeDiv  = intialPageLoad();
const contentDiv = document.querySelector("#content");
contentDiv.appendChild(homeDiv);


const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

const CTABtn = document.getElementById("CTABtn");


menuBtn.addEventListener('click', ()=> {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadMenu());
})
homeBtn.addEventListener('click', ()=> {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(homeDiv);
})
CTABtn.addEventListener('click', ()=> {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadMenu());
})
aboutBtn.addEventListener('click', ()=> {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadAbout());
})






console.log("Check server")
