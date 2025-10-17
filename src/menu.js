export const loadMenu = ()=> {

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");

    const headLine = document.createElement("h2");
    headLine.innerText = "THis is the menu section";

    menuDiv.appendChild(headLine)


    return menuDiv;
}

