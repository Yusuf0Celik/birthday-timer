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
let timer;
// Variabelen

submitBtn.addEventListener("click", submit);

function submit() {
  checkTime(new Date(timerInput.value))
  // Gets time and gives it to checkTime
  localStorage.setItem("timer", JSON.stringify(timerInput.value))
}

start()

function start() {
  const eventDate = JSON.parse(localStorage.getItem("timer"));
  // Get our localstorage
  if (eventDate) {
    checkTime(new Date(eventDate));
    // if it exists set it as the evenDate
  }
}

function checkTime(eventDate) {
  // eventDate = new Date(timerInput.value)
  clearInterval(timer);
  // clearinterval so intervals dont overlap
  const dateNow = new Date();
  const distance = eventDate - dateNow;
  // get distance and todays date
  if (distance > 0) {
    // If distance is bigger then one
    startTimer(distance);
    timerText.classList.remove("hide");
    announcement.classList.add("hide");
  } else {
    timeHasPassed(distance < -86400000);
    // 86400000ms = 1 day
  }
}

function startTimer(distance) {
  // distance is distance checkTime
  distance -= 1000;
  // distance - 1 sec
  updateTime(distance);
  timer = setInterval(() => {
    distance -= 1000;
    // distance - 1 sec because setInterval takes one second to start
      if (distance <= 0) {
        // if distance is less then or equal to 0
          clearInterval(timer);
          // stop timer
          timeHasPassed(false) 
          // distance < 86400000 = false
          return;
          // Dont execute the rest of the function
        }
        updateTime(distance);
        // update time every second
  }, 1000);
}

function updateTime(distance) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Calculate s, m, h and d
  const textSecond = Math.floor((distance % minute) / second);
  const textMinute = Math.floor((distance % hour) / minute);
  const textHour = Math.floor((distance % day) / hour);
  const textDay = Math.floor(distance / day);
  // Calulate s, m, h and d to text
  secondSpan.textContent = textSecond;
  minuteSpan.textContent = textMinute;
  hourSpan.textContent = textHour;
  daySpan.textContent = textDay;
  // put it in span
}

function timeHasPassed(eventDay) {
  if (eventDay) {
    // als meer dan 1 dag is geweest van de event
    announcement.textContent = "Event has passed";
  } else {
    // als niet meer dan 1 dag is geweest van de event
    announcement.textContent = "Event is here";
  }

  // announcement hide gets removed
  announcement.classList.remove("hide");
  // localStorage timer gets removed
  localStorage.removeItem("timer");
}