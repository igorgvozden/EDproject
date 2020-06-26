let hamburgerBtn = document.querySelector(".nav__item__button--ham");
let closeBtn = document.querySelector(".nav__item__button--x");
let menu = document.querySelector(".page-container__right");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.style.display = "none";
    menu.style.width = "290px";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    menu.style.width = "0px";
    hamburgerBtn.style.display = "block";
});
