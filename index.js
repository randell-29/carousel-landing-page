
//JS Variables
var carouselTimer = 0;
var pageIndex = 0;

//HTML References
var characterName = document.getElementById("character-name");
var cardImg = document.getElementById("character-card");
var visionImg = document.getElementById("character-vision");
var bodyBG = document.querySelector("body")
var nextButton = document.getElementById("next-button");
var prevButton = document.getElementById("prev-button");

//Arrays
var bgArray = [
    "url('./assets/images/bg/columbina_bg.jpg')",
    "url('./assets/images/bg/mavuika_bg.jpg')",
    "url('./assets/images/bg/furina_bg.jpg')",
    "url('./assets/images/bg/nahida_bg.jpg')",
    "url('./assets/images/bg/raiden_bg.jpg')",
    "url('./assets/images/bg/zhongli_bg.jpg')",
    "url('./assets/images/bg/venti_bg.jpg')"
]
var cardArray = [
    "./assets/images/cards/columbina_card.png",
    "./assets/images/cards/mavuika_card.png",
    "./assets/images/cards/furina_card.png",
    "./assets/images/cards/nahida_card.png",
    "./assets/images/cards/raiden_card.png",
    "./assets/images/cards/zhongli_card.png",
    "./assets/images/cards/venti_card.png"
]

var visionArray = [
    "./assets/images/visions/hydro.png",
    "./assets/images/visions/pyro.png",
    "./assets/images/visions/hydro.png",
    "./assets/images/visions/dendro.png",
    "./assets/images/visions/electro.png",
    "./assets/images/visions/geo.png",
    "./assets/images/visions/anemo.png"
]

var characterNameArray = [
    "Columbina",
    "Mavuika",
    "Furina",
    "Nahida",
    "Raiden",
    "Zhongli",
    "Venti",
]

//Carousel Intervals
setInterval(() => {
  carouselTimer++;
  console.log(carouselTimer);

  if(carouselTimer == 5) {
    CarouselNext();
  }

}, 1000);


//Carousel Functions
function InitializeButtons() {
    nextButton.addEventListener("click", CarouselNext);
    prevButton.addEventListener("click", CarouselPrev);
}

function PageUpdate() {
    characterName.textContent = characterNameArray[pageIndex]
    cardImg.src = cardArray[pageIndex];
    visionImg.src = visionArray[pageIndex];
    bodyBG.style.backgroundImage = bgArray[pageIndex];
    carouselTimer = 0;
}

function CarouselStart() {
    PageUpdate();
    InitializeButtons();
}

function CarouselNext() {
    if(pageIndex < cardArray.length - 1) {
        pageIndex++;
        PageUpdate();
    } else {
        pageIndex = 0;
        PageUpdate();
    }
}

function CarouselPrev() {
    if(pageIndex > 0) {
        pageIndex--;
        PageUpdate();
    } else {
        pageIndex = cardArray.length - 1;
        PageUpdate();
    }
}

CarouselStart();