let sliderBackground = document.getElementById("backgroundShow")
let slidersBackground = sliderBackground.getElementsByTagName("li");
let mainTitle = document.querySelector(".main-title");
let mainSubtitle = document.querySelector(".main-subtitle");

let next = 0;

function hideBackgroundSlides() {
    for(var i = 0; i < slidersBackground.length; i++) {
        slidersBackground[i].style.opacity = "0";
    }
}

function switchBackgroundSlide() {
    slidersBackground[next].style.opacity = "0";
    next += 1;
    if(next >= slidersBackground.length) {
        next = 0;
    }
    slidersBackground[next].style.opacity = "1";
}

hideBackgroundSlides();

setTimeout(() => {
    slidersBackground[next].style.opacity = "1";
    setInterval(switchBackgroundSlide, 3000);
}, 2000);

mainTitle.classList.add("main-title-shadow-animation");
mainSubtitle.classList.add("main-subtitle-shadow-animation");

setTimeout(() => {
    sliderBackground.classList.remove("bgStart");
    mainTitle.classList.remove("main-title-shadow-animation");
    mainTitle.classList.add("main-title-shadow");
    mainSubtitle.classList.remove("main-subtitle-shadow-animation");
    mainSubtitle.classList.add("main-subtitle-shadow");
}, 4000);