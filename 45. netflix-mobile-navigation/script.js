const nav = document.querySelector("nav");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close");
const menuEle = document.querySelector(".menu");
const menuBgRedEle = document.querySelector(".menu-bg-red");
const menuBgBlackEle = document.querySelector(".menu-bg-black");

openMenu.addEventListener("click", () => {
    nav.classList.add("active");
    menuEle.style.transitionDelay = "0.4s";
    menuBgRedEle.style.transitionDelay = "0.2s";
    menuBgBlackEle.style.transitionDelay = "0s";
});

closeMenu.addEventListener("click", () => {
    nav.classList.remove("active");
    menuEle.style.transitionDelay = "0s";
    menuBgRedEle.style.transitionDelay = "0.2s";
    menuBgBlackEle.style.transitionDelay = "0.4s";
});
