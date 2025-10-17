export const intialPageLoad = ()=> {
    const contentDiv = document.getElementById("content");
    const Title = document.createElement("h1");
    Title.innerHTML = "Tanoor 24";
    contentDiv.appendChild(Title);
    const headline = document.createElement("h2");
    headline.innerHTML = "Authentic Heat. Modren Speed.";
    contentDiv.appendChild(headline);
    const introParagraph = document.createElement("p");
    introParagraph.innerHTML = "Experience the real taste of Yemeni heritage, baked fresh for the modren pace. <b>At Tannor 24</b>, we combine the traditional fire of the tanoor oven with round-the-clock service. From soky <b>Mandi</b> to fresh, hot bread , it's always ready ,always hot,and always the best of the tradition."
    contentDiv.appendChild(introParagraph);
    const CTABtn = document.createElement("button");
    CTABtn.innerText =  "View the Full Menu";
    CTABtn.id = "CTABtn";
    contentDiv.appendChild(CTABtn);
};