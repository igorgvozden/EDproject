let hamburgerBtn = document.querySelector(".nav__item__button--ham");
let closeBtn = document.querySelector(".nav__item__button--x");
let menu = document.querySelector(".page-container__right");
let menuContent = document.querySelector(".page-container__right-content");

// this toggles menu view 

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.style.display = "none";
    menu.style.width = "290px";
    menuContent.style.display = "block";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    menuContent.style.display = "none";
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

    informator.innerHTML = "";

    let validator = true; 
    let informations = [];

    if (firstName.value.length < 3) {
        informations.push("First Name must have at least 3 characters");
        validator = false;
    }

    if (lastName.value.length < 3) {
        informations.push("Last Name must have at least 3 characters");
        validator = false;
    }
    
    if (informations.length >= 1) {
        informations.forEach(el => {
        let paragh = document.createElement("P");
        let nodeText = document.createTextNode(el);
        paragh.appendChild(nodeText);
        
        informator.appendChild(paragh);
        })
    }
    
    return validator;
};

// social section

let socialTextJson = `[{"count":"21", "text":"This is awesome"}, {"count":3, "text":"Take care of what you eat. You are what you eat!"}, {"count":"15", "text":"Are your Zzz's beeing affected by stress? Sleeping eight hours every night reduces stress, makes you more alert, and helps your immune response. Get better sleep by turning off all blue light devices two hours before bed, exercising, lowering the temperature in your bedroom, and taking Melatonin. Have a restful weekend, everyone!"}, {"count":"16", "text":"Sun bathing can have many benefits for your health, from boosting immune system to looking nice and tanned during summer days"}, {"count":"41", "text":"Turn your Zen mode on! According to HO, living space can stage your performance and mental health"}]`;
let socialText = JSON.parse(socialTextJson);

let socialLikes = document.querySelectorAll(".social__container__box--hidden-likes");
let socialMessage = document.querySelectorAll(".social__container__box--hidden-text");

socialLikes.forEach((el, i) => el.appendChild(document.createTextNode(socialText[i].count)));
socialMessage.forEach((el, i) => el.appendChild(document.createTextNode(socialText[i].text)));
