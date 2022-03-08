
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
var playerLives = 7;

playerLivesCount.textContent = playerLives;
//getting items

const albums = [
  {
    imgSrc: './images/Demis Roussos.jfif',
    name: 'Forever and Ever',
  },
  {
    imgSrc: './images/Demis Roussos.jfif',
    name: 'Forever and Ever',
  },
  {
    imgSrc: './images/Dieselboy 6ixth Session.jpg',
    name: 'Dieselboy 6ixth Session',
  },
  {
    imgSrc: './images/Dieselboy 6ixth Session.jpg',
    name: 'Dieselboy 6ixth Session',
  },
  {
    imgSrc: './images/Geogaddi.jpg',
    name: 'Geogaddi',
  },
  {
    imgSrc: './images/Geogaddi.jpg',
    name: 'Geogaddi',
  },
  {
    imgSrc: './images/Hold Your Color.jpg',
    name: 'Hold Your Color',
  },
  {
    imgSrc: './images/Hold Your Color.jpg',
    name: 'Hold Your Color',
  },
  {
    imgSrc: './images/Ivan Wyschnegradsky.jpg',
    name: '24 Microtonal Preludes',
  },
  {
    imgSrc: './images/Ivan Wyschnegradsky.jpg',
    name: '24 Microtonal Preludes',
  },
  {
    imgSrc: './images/King Crimson.jpg',
    name: 'In The Court Of The Crimson King',
  },
  {
    imgSrc: './images/King Crimson.jpg',
    name: 'In The Court Of The Crimson King',
  },
  {
    imgSrc: './images/Money Store.jpg',
    name: 'Money Store',
  },
  {
    imgSrc: './images/Money Store.jpg',
    name: 'Money Store',
  },
  {
    imgSrc: './images/My Bloody Valentine Loveless.jpg',
    name: 'Loveless',
  },
  {
    imgSrc: './images/My Bloody Valentine Loveless.jpg',
    name: 'Loveless',
  },
  {
    imgSrc: './images/Pulse Demon.jpg ',
    name: 'Pulse Demon',
  },
  {
    imgSrc: './images/Pulse Demon.jpg ',
    name: 'Pulse Demon',
  },
  {
    imgSrc: './images/Selected Ambient Works.jpg',
    name: 'Selected Ambient Works 85-92',
  },
  {
    imgSrc: './images/Selected Ambient Works.jpg',
    name: 'Selected Ambient Works 85-92',
  },
  {
    imgSrc: './images/Draining Love Story.jfif ',
    name: 'Draining Love Story',
  },
  {
    imgSrc: './images/Draining Love Story.jfif ',
    name: 'Draining Love Story',
  },
  {
    imgSrc: './images/Slowdive Souvlaki.jpg',
    name: 'Souvlaki',
  },
  {
    imgSrc: './images/Slowdive Souvlaki.jpg',
    name: 'Souvlaki',
  },
  {
    imgSrc: './images/Venetian Snares.jpg ',
    name: 'Rossz Csillag Alatt Született',
  },
  {
    imgSrc: './images/Venetian Snares.jpg ',
    name: 'Rossz Csillag Alatt Született',
  },

  {
    imgSrc: './images/Igorrr Savage Sinusoid.jpg ',
    name: 'Savage Sinusoid',
  },
  {
    imgSrc: './images/Igorrr Savage Sinusoid.jpg ',
    name: 'Savage Sinusoid',
  },
  {
    imgSrc: './images/Ecco2k.jpg ',
    name: 'Ecco2k - E',
  },
  {
    imgSrc: './images/Ecco2k.jpg ',
    name: 'Ecco2k - E',
  },
  {
    imgSrc: './images/Bladee Icedancer.jpg',
    name: 'Icedancer',
  },
  {
    imgSrc: './images/Bladee Icedancer.jpg',
    name: 'Icedancer',
  },
  {
    imgSrc: './images/Squarepusher.jpg',
    name: 'Go Plastic',
  },
  {
    imgSrc: './images/Squarepusher.jpg',
    name: 'Go Plastic',
  },
  {
    imgSrc: './images/Smiths.jpg',
    name: 'The Queen Is Dead',
  },
  {
    imgSrc: './images/Smiths.jpg',
    name: 'The Queen Is Dead',
  },
  {
    imgSrc: './images/MfDoom.jpg',
    name: 'Operation : Doomsday',
  },
  {
    imgSrc: './images/MfDoom.jpg',
    name: 'Operation : Doomsday',
  },

  {
    imgSrc: './images/Goldie.jpg',
    name: 'Timeless',
  },
  {
    imgSrc: './images/Goldie.jpg',
    name: 'Timeless',
  },
  {
    imgSrc: './images/Drukqs.jpg',
    name: 'Drukqs',
  },
  {
    imgSrc: './images/Drukqs.jpg',
    name: 'Drukqs',
  },
  {
    imgSrc: './images/Wormhole.jpg',
    name: 'Wormhole',
  },
  {
    imgSrc: './images/Wormhole.jpg',
    name: 'Wormhole',
  },
  {
    imgSrc: './images/Armageddon.jpg',
    name: 'Armageddon',
  },
  {
    imgSrc: './images/Armageddon.jpg',
    name: 'Armageddon',
  },
  {
    imgSrc: './images/Logical Progression.jpg',
    name: 'Logical Progression',
  },
  {
    imgSrc: './images/Logical Progression.jpg',
    name: 'Logical Progression',
  },
  {
    imgSrc: './images/Royal Astronomy.jpg',
    name: 'Royal Astronomy',
  },
  {
    imgSrc: './images/Royal Astronomy.jpg',
    name: 'Royal Astronomy',
  },

  {
    imgSrc: './images/Godspeed You.jpg',
    name: 'Godspeed You',
  },
  {
    imgSrc: './images/Godspeed You.jpg',
    name: 'Godspeed You',
  },
];



// const data = getData();

//Randomize

function randomize() {
  function randomIntFromInterval(even1, even2) {
    // min and max included
    return Math.floor((Math.random() * (even2 - even1)) / 2) * 2;
  }
  const rndInt = randomIntFromInterval(0, 38);
  const cardData = albums;
  const slicedCard = cardData.slice(rndInt, rndInt + 16);

  return slicedCard;
}

randomize();

//card generator function
function cardGenerator() {
  const slicedCard = randomize();
  const shuffledArray = slicedCard.sort((a, b) => 0.5 - Math.random());

  // generate HTML

  shuffledArray.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    //attach the cards to section
    face.src = item.imgSrc;
   
    
    card.setAttribute('name', item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    // card.onclick = function() {
    //     card.classList.toggle('toggleCard');

    // }
    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard');
      
      
      checkCards(e);
    });
  });
}
const checkCards = (e) => {
   const clickedCard = e.target;
  // var allcardsFinished = document.querySelectorAll("");
  var flag = false;
  var allCards = document.querySelectorAll(".card");
   clickedCard.classList.add('flipped');
  var flippedCards = [];
  var temp = document.querySelectorAll('.toggleCard');
  var y = 0;
  var x =0;
  
  
  
  for (var i = 0; i < temp.length; i++) {
    if (!temp[i].classList.contains('OutOfGame')) {
      flippedCards[y] = temp[i];
      y++;
      x++;
    }
  }
  console.log(flippedCards);
  
    if(flippedCards.length == 1){
    
     for(var i = 0; i<16; i++){
      temp[i].style.pointerEvents="none";
    }
     
    
    
   }
    
   
    
    
  
  
 if (flippedCards.length === 2) {
   
  
    if (
      flippedCards[0].getAttribute('name') ===
      flippedCards[1].getAttribute('name')
    ) {
      flag = true;
      console.log('This is a match!');
      console.log(flippedCards.length);
      for (var i = 0; i < 2; i++) {
        flippedCards[i].classList.add('OutOfGame');
        

        flippedCards[i].style.pointerEvents = 'none';
        
        
      }
    } else {
      playerLives -= 1;
      document.getElementById('hp').innerText = playerLives;
      console.log('Wrong!');
      
      
         temp[0].style.pointerEvents="auto" ;
         
          allCards.forEach((card) => {
           card.style.pointerEvents = "none"
          });
          if(playerLives < 7 && playerLives != 0){
          allCards.forEach((card) => {
            setTimeout(() => card.style.pointerEvents = "auto", 550);
          });
        }
          
          
              
              // allCards.forEach((card) => {
              //   card.style.pointerEvents = "auto";
              // });
            
              
            
          
        
      
        
        
         
      
      
      
      if(playerLives===0){
        document.getElementById('hp-h1').innerText = " Game Over :(";
        allCards.forEach((card) => {
          card.style.pointerEvents = "none";
          setTimeout(() => card.classList.remove('toggleCard'), 1200);
          
          
        });
        // document.getElementById("res-btn").innerHTML = "<button>" +
        // "Restart"
        //    "</button>";
           
        

        
        
        
       
          
      }
      
    }
    if (!flag ) {
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        setTimeout(() => card.classList.remove('toggleCard'), 750);
      });
    }

    if(temp.length ===16){
      document.getElementById("hp-h1").innerText ="Congratulations , You Win!";
      console.log("Congratulations , You Win!");
      // var button = document.getElementById("res-btn").innerHTML = "<button>" +
      // "Restart"
      //    "</button>"
      //    button.classList.add("btn");
        
       
          
      
      
    }
  }
 
  

};
function refresh() {    
  setTimeout(function () {
      location.reload()
  }, 100);
}

cardGenerator();


