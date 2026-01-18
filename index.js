
//JS Variables
var carouselTimer = 0;
var pageIndex = 0;

//HTML References
const characterName = document.getElementById("character-name");
const genderText = document.getElementById("gender");
const visionText = document.getElementById("vision");
const weaponText = document.getElementById("weapon");
const regionText = document.getElementById("region");
const loreText = document.getElementById("lore");
const cardImg = document.getElementById("character-card");
const visionImg = document.getElementById("character-vision");
const bodyBG = document.querySelector("body")
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

//Genshin Directory
const genshinDirectory = [
    {
        name: "Columbina",
        gender: "Female",
        vision: "Hydro",
        weapon: "Catalyst",
        region: "Nod Krai",
        portrait: "./assets/images/cards/columbina_card.png",
        wallpaper: "url('./assets/images/bg/columbina_bg.jpg')",
        visionIcon: "./assets/images/visions/hydro.png",
        lore: ""
    },
    {
        name: "Mavuika",
        gender: "Female",
        vision: "Pyro",
        weapon: "Claymore",
        region: "Natlan",
        portrait: "./assets/images/cards/mavuika_card.png",
        wallpaper: "url('./assets/images/bg/mavuika_bg.jpg')",
        visionIcon: "./assets/images/visions/pyro.png",
        lore: ""
    },
    {
        name: "Furina",
        gender: "Female",
        vision: "Hydro",
        weapon: "Sword",
        region: "Fontaine",
        portrait: "./assets/images/cards/furina_card.png",
        wallpaper: "url('./assets/images/bg/furina_bg.jpg')",
        visionIcon: "./assets/images/visions/hydro.png",
        lore: ""
    },
    {
        name: "Nahida",
        gender: "Female",
        vision: "Dendro",
        weapon: "Catalyst",
        region: "Sumeru",
        portrait: "./assets/images/cards/nahida_card.png",
        wallpaper: "url('./assets/images/bg/nahida_bg.jpg')",
        visionIcon: "./assets/images/visions/dendro.png",
        lore: ""
    },
    {
        name: "Raiden",
        gender: "Female",
        vision: "Electro",
        weapon: "Polearm",
        region: "Inazuma",
        portrait: "./assets/images/cards/raiden_card.png",
        wallpaper: "url('./assets/images/bg/raiden_bg.jpg')",
        visionIcon: "./assets/images/visions/electro.png",
        lore: ""
    },
    {
        name: "Zhongli",
        gender: "Male",
        vision: "Geo",
        weapon: "Polearm",
        region: "Liyue",
        portrait: "./assets/images/cards/zhongli_card.png",
        wallpaper: "url('./assets/images/bg/zhongli_bg.jpg')",
        visionIcon: "./assets/images/visions/geo.png",
        lore: ""
    },
    {
        name: "Venti",
        gender: "Male",
        vision: "Anemo",
        weapon: "Bow",
        region: "Mondstadt",
        portrait: "./assets/images/cards/venti_card.png",
        wallpaper: "url('./assets/images/bg/venti_bg.jpg')",
        visionIcon: "./assets/images/visions/anemo.png",
        lore: ""
    }
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
    characterName.textContent = genshinDirectory[pageIndex].name;
    genderText.textContent = genshinDirectory[pageIndex].gender;
    visionText.textContent = genshinDirectory[pageIndex].vision;
    weaponText.textContent = genshinDirectory[pageIndex].weapon;
    regionText.textContent = genshinDirectory[pageIndex].region;
    //loreText.textContent = genshinDirectory[pageIndex].lore;
    cardImg.src = genshinDirectory[pageIndex].portrait;
    visionImg.src = genshinDirectory[pageIndex].visionIcon;
    bodyBG.style.backgroundImage = genshinDirectory[pageIndex].wallpaper;
    carouselTimer = 0;
}

function CarouselStart() {
    PageUpdate();
    InitializeButtons();
}

function CarouselNext() {
    if(pageIndex < genshinDirectory.length - 1) {
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
        pageIndex = genshinDirectory.length - 1;
        PageUpdate();
    }
}

CarouselStart();