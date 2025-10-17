export const loadAbout = ()=> {
    const aboutDiv  = document.createElement("div");
    aboutDiv.classList.add("aboutDiv");

    const headlLine =  document.createElement("h1");
    headlLine.innerText = "Tanoor 24: Our Story";
    aboutDiv.appendChild(headlLine);

    const slogan =  document.createElement("h2");
    slogan.innerText = "Authentic Heat. Modren Speed";
    aboutDiv.appendChild(slogan);

    const p1 = document.createElement("p");
    p1.innerText = "We are a tribute to the timless flavors of Yemeni cusine, built for the 24-hour hustle. <br>Tanoor 24 brings the deep, smoky taste of food cooked in the traditional tanoor clay oven to your table with unparalleled speed and consistency.";
    aboutDiv.appendChild(p1);

    const line2 =  document.createElement("h2");
    line2.innerText = "Commitment to the Tanoor";
    aboutDiv.appendChild(line2);

    const p2 = document.createElement("p");
    p2.innerText = "We are a tribute to the timless flavors of Yemeni cusine, built for the 24-hour hustle. <br>Tanoor 24 brings the deep, smoky taste of food cooked in the traditional tanoor clay oven to your table with unparalleled speed and consistency.";
    aboutDiv.appendChild(p2);

    const line3 =  document.createElement("h2");
    line3.innerText = "The 24 Diffrence";
    aboutDiv.appendChild(line3);

    const p3 = document.createElement("p");
    p3.innerText = "We are a tribute to the timless flavors of Yemeni cusine, built for the 24-hour hustle. <br>Tanoor 24 brings the deep, smoky taste of food cooked in the traditional tanoor clay oven to your table with unparalleled speed and consistency.";
    aboutDiv.appendChild(p3);


    return aboutDiv;
}