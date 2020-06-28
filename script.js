let hamburgerBtn = document.querySelector(".nav__item__button--ham");
let closeBtn = document.querySelector(".nav__item__button--x");
let menu = document.querySelector(".page-container__right");

// this toggles menu view 

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

// services section -- this puts active link class on selected service

let serviceButtons = document.querySelectorAll(".services-container__box__button");
let serviceTitle = document.querySelector(".services-info__container__title");

function removeActiveClass() {
    serviceButtons.forEach(el => {
        el.classList.remove("active-service");
        el.innerHTML = "learn more";
    });
};

serviceButtons.forEach(el => {
    el.addEventListener("click", (e) => {
        removeActiveClass();
        e.target.classList.add("active-service");
        e.target.innerHTML = "see below";
        serviceTitle.innerHTML = `${e.target.id}<span> services</span>`;
    })
});

window.onload = () => {
    serviceButtons[0].classList.add("active-service");
    serviceButtons[0].innerHTML = "see below";
};