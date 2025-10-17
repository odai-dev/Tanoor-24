export const intialPageLoad = ()=> {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("homeContent");
    const Title = document.createElement("h1");
    Title.innerHTML = "Tanoor 24";
    homeDiv.appendChild(Title);
    const headline = document.createElement("h2");
    headline.innerHTML = "Authentic Heat. Modren Speed.";
    homeDiv.appendChild(headline);
    const introParagraph = document.createElement("p");
    introParagraph.innerHTML = "Experience the real taste of Yemeni heritage, baked fresh for the modren pace. <b>At Tannor 24</b>, we combine the traditional fire of the tanoor oven with round-the-clock service. From soky <b>Mandi</b> to fresh, hot bread , it's always ready ,always hot,and always the best of the tradition."
    homeDiv.appendChild(introParagraph);
    const CTABtn = document.createElement("button");
    CTABtn.innerText =  "View the Full Menu";
    CTABtn.id = "CTABtn";
    homeDiv.appendChild(CTABtn);
   

    return homeDiv;
};