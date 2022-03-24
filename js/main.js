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
    const countToDate = new Date(timerInput.value);
    let year = countToDate.getFullYear();
    let month = countToDate.getMonth() + 1;
    let day = countToDate.getDate();
    let hour = countToDate.getHours();
    let minute = countToDate.getMinutes();
    console.log(countToDate);
    const second = 1000;
}

// Get input
// Get year, month, day, hour and minute of input
// get date
// get distance between date and time now