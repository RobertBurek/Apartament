let sliderBackground = document.getElementById("backgroundShow")
let slidersBackground = sliderBackground.getElementsByTagName("li");

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


setTimeout(() => {
    sliderBackground.classList.remove("bgStart");
}, 4000);