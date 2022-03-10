console.log("main.js loaded");

const submit = document.querySelector(".submit-btn");
const timerInput = document.querySelector(".timer-input");
const timerText = document.querySelector(".timer-text");
const daySpan = document.querySelector(".day-span");
const hourSpan = document.querySelector(".hour-span");
const minuteSpan = document.querySelector(".minute-span");
const secondSpan = document.querySelector(".second-span");
// Variabelen

submit.addEventListener("click", function no() {
  console.log(timerInput.value);
})