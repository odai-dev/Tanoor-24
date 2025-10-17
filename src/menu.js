import chickenMandiImage from "./menuImages/chicken_mandi.jpg";
import lambMandiImage from "./menuImages/lamb_mandi.jpg";
import madfoonChickenImage from "./menuImages/chicken_madfoon.png";
import khubzTanoorImage from "./menuImages/khubz_tanoor.png";
import maluwahImage from "./menuImages/maluwah.png";
import sahawiqImage from "./menuImages/sahawiq.png";
import yemeniSaladImage from "./menuImages/yemeni_salad.png";
import zurbianRiceImage from "./menuImages/zurbian_rice.jpg";

const menuData = [
    {
        category: "Tanoor 24 Classics",
        items: [
            {
                name: "Chicken Mandi",
                desc: "Signature dish. Half a tender chicken, slow-cooked in the tanoor, served over aromatic, spiced rice.",
                price: "2500 YER",
                img: chickenMandiImage,
            },
            {
                name: "Lamb Mandi",
                desc: "Premuim cut of lamb, cooked until fork-tender with herbs and served with smoky, flavorful rice.",
                price: "4500 YER",
                img: lambMandiImage
            },
            {
                name: "Madfoon Chicken",
                desc: "Steamed chicken seasoned with a secret blend of spices, wrapped and cooked for maximum moisture and flavor.",
                price: "2700 YER",
                img: madfoonChickenImage
            },
            {
                name: "Zurbian Rice",
                desc: "Richly spied saffron rice, cooked with potatos and traditional spices. (can be orderd with any meat).",
                price: "1200 YER",
                img: zurbianRiceImage,
            },
        ]
    },
    {
        category: "Freshly Baked (Hot from the Tanoor)",
        items: [
            {
                name: "Khubz Tanoor",
                desc: "The daily staple. Large, fluffy traditional bread baked hot on the walls of the tanoor oven.",
                price: "300 YER",
                img: khubzTanoorImage,
            },
            {
                name: "Maluwah",
                desc: "A soft, layered Yemeni flatbread, perfect for tearing and dipping into savory sauces or honey.",
                price: "500 YER",
                img: maluwahImage,
            },
        ]
    },
    {
        category: "Sides & Essentials",
        items: [
            {
                name: "Sahawiq",
                desc: "The essential Yemei salsa. Fresh tomatos, green chilis, garlic, and cilantro blended to perfiction.",
                price: "200 YER",
                img: sahawiqImage,
            },
            {
                name: "Yemeni Salad",
                desc: "A simple , refreshing salad of cucumber, tomato, and fresh herbs, lightly dressed.",
                price: "400 YER",
                img: yemeniSaladImage,      
            }
        ]
    }

]


export const loadMenu = ()=> {

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");
    
    menuData.forEach(cat => {
        const catDiv =  document.createElement("div");
        catDiv.classList.add("catDiv");
        const catTitle = document.createElement("h2");
        catTitle.classList.add("catTitle");
        catTitle.innerText = cat.category;
        catDiv.appendChild(catTitle);
        const catBody = document.createElement("div");
        catBody.classList.add("catBody");
        catDiv.appendChild(catBody)

        cat.items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("itemDiv");
            const itemName = document.createElement("h3");
            itemName.innerText = item.name;
            itemDiv.appendChild(itemName);
            if(item.img){
                const image = document.createElement("img");
                image.src = item.img;
                itemDiv.appendChild(image);
            }

            const itemDesc = document.createElement("p");
            itemDesc.innerText = item.desc;
            itemDiv.append(itemDesc);

            const itemPrice = document.createElement("p");
            itemPrice.classList.add("itemPrice");
            itemPrice.innerText = item.price;
            itemDiv.appendChild(itemPrice)

            catBody.appendChild(itemDiv);
        })
       

        menuDiv.appendChild(catDiv)
    })

    return menuDiv;
}

