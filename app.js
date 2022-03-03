const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

playerLivesCount.textContent = playerLives;
//getting items 

const getData = () => [{
        imgSrc: "./images/Demis Roussos.jfif",
        name: "Forever and Ever"
    },
    {
        imgSrc: "./images/Dieselboy 6ixth Session.jpg",
        name: "Dieselboy 6ixth Session"
    },
    {
        imgSrc: "./images/Geogaddi.jpg",
        name: "Geogaddi"
    },
    {
        imgSrc: "./images/Hold Your Color.jpg",
        name: "Hold Your Color"
    },
    {
        imgSrc: "./images/Ivan Wyschnegradsky.jpg",
        name: "24 Microtonal Preludes"
    },
    {
        imgSrc: "./images/King Crimson.jpg",
        name: "In The Court Of The Crimson King"
    },
    {
        imgSrc: "./images/Money Store.jpg",
        name: "Money Store"
    },
    {
        imgSrc: "./images/My Bloody Valentine Loveless.jpg",
        name: "Loveless"
    },
    {
        imgSrc: "./images/Pulse Demon.jpg ",
        name: "Pulse Demon"
    },
    {
        imgSrc: "./images/Selected Ambient Works.jpg",
        name: "Selected Ambient Works 85-92"
    },
    {
        imgSrc: "./images/Slowdive Souvlaki.jpg",
        name: "Souvlaki"
    },
    {
        imgSrc: "./images/Squarepusher.jpg",
        name: "Go Plastic"
    },

    {
        imgSrc: "./images/Venetian Snares.jpg ",
        name: "Rossz Csillag Alatt Született"
    },
    {
        imgSrc: "./images/Igorrr Savage Sinusoid.jpg ",
        name: "Savage Sinusoid"
    },
    {
        imgSrc: "./images/Draining Love Story.jfif ",
        name: "Draining Love Story "
    },
   
    {
        imgSrc: "./images/Squarepusher.jpg",
        name: "Go Plastic"
    },

    {
        imgSrc: "./images/Venetian Snares.jpg ",
        name: "Rossz Csillag Alatt Született"
    },
    {
        imgSrc: "./images/Igorrr Savage Sinusoid.jpg ",
        name: "Savage Sinusoid"
    },
    {
        imgSrc: "./images/Draining Love Story.jfif ",
        name: "Draining Love Story "
    },
    
    {
        imgSrc: "./images/Demis Roussos.jfif",
        name: "Forever and Ever"
    },
    {
        imgSrc: "./images/Dieselboy 6ixth Session.jpg",
        name: "Dieselboy 6ixth Session"
    },
    {
        imgSrc: "./images/Geogaddi.jpg",
        name: "Geogaddi"
    },
    {
        imgSrc: "./images/Hold Your Color.jpg",
        name: "Hold Your Color"
    },
    {
        imgSrc: "./images/Ivan Wyschnegradsky.jpg",
        name: "24 Microtonal Preludes"
    },
    {
        imgSrc: "./images/King Crimson.jpg",
        name: "In The Court Of The Crimson King"
    },
    {
        imgSrc: "./images/Money Store.jpg",
        name: "Money Store"
    },
    {
        imgSrc: "./images/My Bloody Valentine Loveless.jpg",
        name: "Loveless"
    },
    {
        imgSrc: "./images/Pulse Demon.jpg ",
        name: "Pulse Demon"
    },
    {
        imgSrc: "./images/Selected Ambient Works.jpg",
        name: "Selected Ambient Works 85-92"
    },
    {
        imgSrc: "./images/Slowdive Souvlaki.jpg",
        name: "Souvlaki"
    }

];

// const data = getData();

//Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => (Math.random() - 0.5));
    return cardData;


};
randomize();
 //card generator function
const cardGenerator = () => {
    const cardData = randomize();

    // generate HTML 
    cardData.forEach((item) => {


        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //attach the cards to section
        face.src = item.imgSrc;

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    });

};
cardGenerator();


