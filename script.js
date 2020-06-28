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

// contact section -- form

let locationForm = document.getElementById("location");
let stateForm = document.getElementById("state");

locationForm.addEventListener("change", () => {
    if (locationForm.value === "1") {
        stateForm.classList.remove("select-hide")
    } else {
        stateForm.classList.add("select-hide")
    }
});

function validateForm() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let informator = document.querySelector(".contact-container__form-container__informator");

    if (firstName.value.length < 3) {
        informator.innerHTML = "First Name must have at least 3 characters";
        return false;
    }

    if (lastName.value.length < 3) {
        informator.innerHTML = "First Name must have at least 3 characters";
        return false;
    }
    return true;
};