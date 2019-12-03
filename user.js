const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const user = document.querySelector(".js-user");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function handleSubmit(event) {
    event.preventDefault();

    const currentValue = input.value;

    paintInfo(currentValue);
    saveInfo(currentValue);
}

function paintInfo(text) {
    form.classList.remove(SHOWING_CN);
    user.classList.add(SHOWING_CN);
    user.innerText = `Hello ${text}`;
}

function saveInfo(text) {
    localStorage.setItem(USER_LS, text);
}

function askForInfo() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadInfo() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        askForInfo();
    } else {
        paintInfo(currentUser);
    }
}

function init() {
    loadInfo();
}

init();