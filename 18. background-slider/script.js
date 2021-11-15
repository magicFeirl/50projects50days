const slider = document.querySelector(".slider");
let interval_id = undefined;
let currentIdx = +slider.getAttribute("data-index") || 0;
let slideInterval = +slider.getAttribute("data-interval");

const sliderItems = slider.querySelectorAll(".slider-item");
const leftBtn = slider.querySelector(".left");
const rightBtn = slider.querySelector(".right");

const background = document.querySelector('.background');

function slide(step) {
    currentIdx += step;

    if (currentIdx < 0) {
        currentIdx = sliderItems.length - 1;
    } else if (currentIdx >= sliderItems.length) {
        currentIdx = 0;
    }

    sliderItems.forEach((item) => {
        item.classList.remove("active");
    });

    sliderItems[currentIdx].classList.add("active");
    const bgsrc = sliderItems[currentIdx].querySelector('img').src;

    document.body.style.backgroundImage = `url(${bgsrc})`;

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            slide(1);
        }, slideInterval);
    }
}


leftBtn.addEventListener("click", () => {
    slide(-1);
});

rightBtn.addEventListener("click", () => {
    slide(1);
});

intervalId = setInterval(() => {
    slide(1);
}, slideInterval);

slide(0);
