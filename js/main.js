console.log("main.js loaded");

const submitBtn = document.querySelector(".submit-btn");
const timerInput = document.querySelector(".timer-input");
const timerText = document.querySelector(".timer-text");
const daySpan = document.querySelector(".day-span");
const hourSpan = document.querySelector(".hour-span");
const minuteSpan = document.querySelector(".minute-span");
const secondSpan = document.querySelector(".second-span");
// Variabelen

submitBtn.addEventListener("click", submit);

function submit() {
    const dateObj = new Date(timerInput.value);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    // calc to d h m s
    // put in span
}

function calculateTime() {
}

const distance = new Date();
console.log(distance);