export const loadAbout = ()=> {
    const aboutDiv  = document.createElement("div");
    aboutDiv.classList.add("aboutDiv");

    const headLine = document.createElement("h2");
    headLine.innerText = "This is the About section";

    aboutDiv.appendChild(headLine);


    return aboutDiv;
}