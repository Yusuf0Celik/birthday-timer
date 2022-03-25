console.log("main.js loaded");

const submitBtn = document.querySelector(".submit-btn");
const timerInput = document.querySelector(".timer-input");
const timerText = document.querySelector(".timer-text");
const timeSpans = document.querySelectorAll(".time-span");
const daySpan = document.querySelector(".day-span");
const hourSpan = document.querySelector(".hour-span");
const minuteSpan = document.querySelector(".minute-span");
const secondSpan = document.querySelector(".second-span");
const announcement = document.querySelector(".announcement");
let interval;
// Variabelen

submitBtn.addEventListener("click", submit);

function submit() {
  if (interval > 1) {
    clearInterval(interval);
  } else {
    interval = setInterval(calculateTime, 1000);
  }
}

function calculateTime() {
  const localTime = localStorage.setItem("timer", JSON.stringify(timerInput.value));
  let timerParse = JSON.parse(localStorage.getItem("timer"));
  // if (timerParse === null) {
    console.log(localTime);
    const countToDate = new Date(timerInput.value);
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const distance = countToDate - new Date();
    const textSecond = Math.floor((distance % minute) / second);
    const textMinute = Math.floor((distance % hour) / minute);
    const textHour = Math.floor((distance % day) / hour);
    const textDay = Math.floor(distance / day);
    secondSpan.textContent = textSecond;
    minuteSpan.textContent = textMinute;
    hourSpan.textContent = textHour;
    daySpan.textContent = textDay;
    if (countToDate < new Date()) {
      timerText.style.display = "none";
      announcement.style.display = "block";
      announcement.textContent = "Het Event is geweest";
    } else if(countToDate > new Date()) {
      timerText.classList.remove("hide");
      timerText.style.display = "block";
      announcement.style.display = "none";
    }
  // } else {
    // timerParse;
    // timerInput.value = timerParse
  // }
}