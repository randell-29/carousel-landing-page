
//JS Variables
var carouselTimer = 0;
var pageIndex = 0;
var pageUpdateInterval;
var animationInterval;


//HTML References
const characterName = document.getElementById("character-name");
const genderText = document.getElementById("gender");
const visionText = document.getElementById("vision");
const weaponText = document.getElementById("weapon");
const regionText = document.getElementById("region");
const loreText = document.getElementById("lore");
const inactiveLeft2 = document.getElementById("inactive-card-left2");
const inactiveLeft1 = document.getElementById("inactive-card-left1");
const activeImg = document.getElementById("active-card");
const inactiveRight1 = document.getElementById("inactive-card-right1");
const inactiveRight2 = document.getElementById("inactive-card-right2");
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
        lore: "",
        theme: "#62c1e5"
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
        lore: "",
        theme: "#ff7045"
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
        lore: "",
        theme: "#62c1e5"
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
        lore: "",
        theme: "#66b266"
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
        lore: "",
        theme: "#be68be"
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
        lore: "",
        theme: "#e5c100"
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
        lore: "",
        theme: "#18ffd0"
    }
]

//Carousel Intervals
setInterval(() => {
  carouselTimer++;
    
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
    ImageUpdate();
    ContentUpdate();
    ThemeUpdate();
    setTimeout(EnableButtons, 100);
    carouselTimer = 0;
}

function ContentUpdate() {
    characterName.textContent = genshinDirectory[pageIndex].name;
    genderText.textContent = genshinDirectory[pageIndex].gender;
    visionText.textContent = genshinDirectory[pageIndex].vision;
    weaponText.textContent = genshinDirectory[pageIndex].weapon;
    regionText.textContent = genshinDirectory[pageIndex].region;
    //loreText.textContent = genshinDirectory[pageIndex].lore;
}

function ImageUpdate() {
    activeImg.src = genshinDirectory[pageIndex].portrait;
    visionImg.src = genshinDirectory[pageIndex].visionIcon;
    bodyBG.style.backgroundImage = genshinDirectory[pageIndex].wallpaper;
    InactiveCards();
}

function ThemeUpdate() {
    document.documentElement.style.setProperty("--theme", genshinDirectory[pageIndex].theme);
}

function CarouselStart() {
    PageUpdate();
    InitializeButtons();
}

function CarouselNext() {
    if(pageIndex < genshinDirectory.length - 1) {
        pageIndex++;
        DisableButtons();
        CardAnimationRight();
    } else {
        pageIndex = 0;
        DisableButtons();
        CardAnimationRight();
    }
}

function CarouselPrev() {
    if(pageIndex > 0) {
        pageIndex--;
        DisableButtons();
        CardAnimationLeft();
    } else {
        pageIndex = genshinDirectory.length - 1;
        DisableButtons();
        CardAnimationLeft();
    }
}

function CardAnimationRight() {
    inactiveLeft2.style.transform = "translateX(-100px) scale(0.2)";
    inactiveLeft1.style.transform = "translateX(-100px) scale(0.2)";
    activeImg.style.transform = "translateX(-150px) scale(0.5)";
    inactiveRight1.style.transform = "translateX(-200px) scale(1.5)";
    inactiveRight2.style.transform = "translateX(-150px) scale(1.5)";

    inactiveLeft2.style.opacity = 0;
    inactiveLeft1.style.opacity = .25;
    activeImg.style.opacity = .5;
    inactiveRight1.style.opacity = 1;
    inactiveRight2.style.opacity = .5;

    setTimeout(CardBaseState, 200);
    setTimeout(PageUpdate, 200);
}

function CardAnimationLeft() {
    inactiveLeft2.style.transform = "translateX(100px) scale(1.5)";
    inactiveLeft1.style.transform = "translateX(100px) scale(1.5)";
    activeImg.style.transform = "translateX(150px) scale(0.5)";
    inactiveRight1.style.transform = "translateX(200px) scale(0.2)";
    inactiveRight2.style.transform = "translateX(150px) scale(0.2)";

    inactiveLeft2.style.opacity = .5;
    inactiveLeft1.style.opacity = 1;
    activeImg.style.opacity = .5;
    inactiveRight1.style.opacity = .25;
    inactiveRight2.style.opacity = 0;

    setTimeout(CardBaseState, 200);
    setTimeout(PageUpdate, 200);
}

function CardBaseState() {
    activeImg.style.transform = "translateX(0)";
    inactiveLeft1.style.transform = "translateX(0)";
    inactiveLeft2.style.transform = "translateX(0)";
    inactiveRight1.style.transform = "translateX(0)";
    inactiveRight2.style.transform = "translateX(0)";

    inactiveLeft2.style.opacity = .25;
    inactiveLeft1.style.opacity = .5;
    activeImg.style.opacity = 1;
    inactiveRight1.style.opacity = .5;
    inactiveRight2.style.opacity = .25;
}

function InactiveCards() {
    InactiveCardLeft2();
    InactiveCardLeft1();
    InactiveCardRight1();
    InactiveCardRight2();
}

function InactiveCardLeft1() {
    var inactiveIndexLeft1 = pageIndex - 1;

    if (inactiveIndexLeft1 < 0) {
        inactiveIndexLeft1 = genshinDirectory.length - 1;
        inactiveLeft1.src = genshinDirectory[inactiveIndexLeft1].portrait;
    } else {
        inactiveLeft1.src = genshinDirectory[inactiveIndexLeft1].portrait;
    }
}

function InactiveCardLeft2() {
    var inactiveIndexLeft2 = pageIndex - 2;

    if (inactiveIndexLeft2 == -2) {
        inactiveIndexLeft2 = genshinDirectory.length - 2;
        inactiveLeft2.src = genshinDirectory[inactiveIndexLeft2].portrait;
    } else if (inactiveIndexLeft2 == -1) {
        inactiveIndexLeft2 = genshinDirectory.length - 1;
        inactiveLeft2.src = genshinDirectory[inactiveIndexLeft2].portrait;
    } else {
        inactiveLeft2.src = genshinDirectory[inactiveIndexLeft2].portrait;
    }
}

function InactiveCardRight1() {
    var inactiveIndexRight1 = pageIndex + 1;

    if (inactiveIndexRight1 > genshinDirectory.length - 1) {
        inactiveIndexRight1 = 0;
        inactiveRight1.src = genshinDirectory[inactiveIndexRight1].portrait;
    } else {
        inactiveRight1.src = genshinDirectory[inactiveIndexRight1].portrait;
    }
}

function InactiveCardRight2() {
    var inactiveIndexRight2 = pageIndex + 2;

    if (inactiveIndexRight2 == genshinDirectory.length + 1) {
        inactiveIndexRight2 = 1;
        inactiveRight2.src = genshinDirectory[inactiveIndexRight2].portrait;
    } else if (inactiveIndexRight2 == genshinDirectory.length) {
        inactiveIndexRight2 = 0;
        inactiveRight2.src = genshinDirectory[inactiveIndexRight2].portrait;
    } else {
        inactiveRight2.src = genshinDirectory[inactiveIndexRight2].portrait;
    }
}

function DisableButtons() {
    nextButton.classList.add("disabled");
    prevButton.classList.add("disabled");
}

function EnableButtons() {
    nextButton.classList.remove("disabled");
    prevButton.classList.remove("disabled");
}

CarouselStart();