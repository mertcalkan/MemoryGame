const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

playerLivesCount.textContent = playerLives;
//getting items 

const albums =[{
        imgSrc: "./images/Demis Roussos.jfif",
        name: "Forever and Ever"
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
        imgSrc: "./images/Dieselboy 6ixth Session.jpg",
        name: "Dieselboy 6ixth Session"
    },
    {
        imgSrc: "./images/Geogaddi.jpg",
        name: "Geogaddi"
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
        imgSrc: "./images/Hold Your Color.jpg",
        name: "Hold Your Color"
    },
    {
        imgSrc: "./images/Ivan Wyschnegradsky.jpg",
        name: "24 Microtonal Preludes"
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
        imgSrc: "./images/King Crimson.jpg",
        name: "In The Court Of The Crimson King"
    },
    {
        imgSrc: "./images/Money Store.jpg",
        name: "Money Store"
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
        imgSrc: "./images/My Bloody Valentine Loveless.jpg",
        name: "Loveless"
    },
    {
        imgSrc: "./images/Pulse Demon.jpg ",
        name: "Pulse Demon"
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
        imgSrc: "./images/Selected Ambient Works.jpg",
        name: "Selected Ambient Works 85-92"
    },
    {
        imgSrc: "./images/Draining Love Story.jfif ",
        name: "Draining Love Story "
    },
    {
        imgSrc: "./images/Draining Love Story.jfif ",
        name: "Draining Love Story "
    },
    {
        imgSrc: "./images/Slowdive Souvlaki.jpg",
        name: "Souvlaki"
    },
    {
        imgSrc: "./images/Slowdive Souvlaki.jpg",
        name: "Souvlaki"
    },
    {
        imgSrc: "./images/Venetian Snares.jpg ",
        name: "Rossz Csillag Alatt Született"
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
        imgSrc: "./images/Igorrr Savage Sinusoid.jpg ",
        name: "Savage Sinusoid"
    },
    {
        imgSrc: "./images/Ecco2k.jpg ",
        name: "Ecco2k - E "
    },
    {
        imgSrc: "./images/Ecco2k.jpg ",
        name: "Ecco2k - E "
    },
    {
        imgSrc: "./images/Bladee Icedancer.jpg",
        name: "Icedancer"
    },
    {
        imgSrc: "./images/Bladee Icedancer.jpg",
        name: "Icedancer"
    },
    {
        imgSrc: "./images/Squarepusher.jpg",
        name: "Go Plastic"
    },
    {
        imgSrc: "./images/Squarepusher.jpg",
        name: "Go Plastic"
    },
    {
        imgSrc: "./images/Smiths.jpg",
        name: "The Queen Is Dead"
    },
    {
        imgSrc: "./images/Smiths.jpg",
        name: "The Queen Is Dead"
    },
    {
        imgSrc: "./images/MfDoom.jpg",
        name: "Operation : Doomsday "
    },
    {
        imgSrc: "./images/MfDoom.jpg",
        name: "Operation : Doomsday"
    },
    
    {
        imgSrc: "./images/Goldie.jpg",
        name: "Timeless "
    },
    {
        imgSrc: "./images/Goldie.jpg",
        name: "Timeless"
    },
    {
        imgSrc: "./images/Drukqs.jpg",
        name: "Drukqs"
    },
    {
        imgSrc: "./images/Drukqs.jpg",
        name: "Drukqs"
    },
    {
        imgSrc: "./images/Wormhole.jpg",
        name: "Wormhole"
    },
    {
        imgSrc: "./images/Wormhole.jpg",
        name: "Wormhole"
    },
    {
        imgSrc: "./images/Armageddon.jpg",
        name: "Armageddon"
    },
    {
        imgSrc: "./images/Armageddon.jpg",
        name: "Armageddon"
    },
    {
        imgSrc: "./images/Logical Progression.jpg",
        name: "Logical Progression"
    },
    {
        imgSrc: "./images/Logical Progression.jpg",
        name: "Logical Progression"
    },
    {
        imgSrc: "./images/Royal Astronomy.jpg",
        name: "Royal Astronomy"
    },
    {
        imgSrc: "./images/Royal Astronomy.jpg",
        name: "Royal Astronomy"
    },
    
    {
        imgSrc: "./images/Godspeed You.jpg",
        name: "Godspeed You"
    },
    {
        imgSrc: "./images/Godspeed You.jpg",
        name: "Godspeed You"
    }
    
    
    
    
    
   
   

    
   

];

// const data = getData();

//Randomize

function randomize (){
    function randomIntFromInterval(even1, even2) { // min and max included 
        return Math.floor( Math.random() * (even2 - even1) / 2 )*2 ;
        
      }
    const rndInt = randomIntFromInterval(0,38);
    const cardData = albums;
    const slicedCard = cardData.slice( rndInt ,rndInt +16 );
    
    return slicedCard;
    
    

    

};

randomize();

 //card generator function
function cardGenerator ()  {
    const slicedCard  = randomize();
    const shuffledArray = slicedCard.sort((a, b) => 0.5 - Math.random());

    // generate HTML 
   
    shuffledArray.forEach((item) => {

        
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //attach the cards to section
        face.src = item.imgSrc;
        card.setAttribute("name",item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        
        // card.onclick = function() {
        //     card.classList.toggle('toggleCard');
            
        // }
        card.addEventListener("click",(e) =>{
            card.classList.toggle('toggleCard'); 
            console.log(card);
            const clickedCards = e.target;
            clickedCards.classList.add("flipped");
            const flippedCards = document.querySelectorAll(".flipped");
            console.log(flippedCards);
            // if(flippedCards.length === 2 ){
                     
                      
                      
            //             if(flippedCards[0].getAttribute("name") != flippedCards[1].getAttribute("name")){
            //                 flippedCards.forEach((card) => {   
                          
            //             setTimeout(() => card.classList.remove("toggleCard"),1100);
            //             console.log("Wrong!");
            //             });
            //         }
            //         else if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
            //             flippedCards.forEach((card) => {    
            //             console.log("Match!");
            //             card.style.pointerEvents="none";
            //             flippedCards.length --  ;
                        
            //         });
                    
            //         }
                         
                   
            //        }
            
            checkCards(e);  
            
        });
    
       
    });
};
const checkCards = (e) => {
      console.log(e);
    //   const clickedCard = e.target;
      
    //   clickedCard.classList.add("flipped");
    //   const flippedCards = document.querySelectorAll(".flipped");
     
      
    //   if(flippedCards.length === 2 ){
    //       if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name"))
    //       { 
    //         console.log("This is a match!"); 
    //         flippedCards.forEach((card) => {
    //             card.classList.remove("flipped");
    //             card.style.pointerEvents ="none";
    //         });
    //       }

    //       else{
    //         console.log("Wrong!");
    //       }
    //      flippedCards.forEach((card) => {
    //          card.classList.remove("flipped");
    //        setTimeout(() => card.classList.remove("toggleCard"),1000);
             
    //      });
    //   }
     
    };

cardGenerator();





 