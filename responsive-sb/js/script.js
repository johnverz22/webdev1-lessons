const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const menu = document.querySelector(".main-nav");
// const menu2 = document.querySelector(".menu2");


hamburger.addEventListener("click", function(){
    menu.classList.toggle("visible")
    close.classList.toggle("menu-visible")
    hamburger.classList.toggle("menu-visible")

    // menu2.classList.toggle("visible")

});