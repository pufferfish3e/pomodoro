// timer section

let time;
let isPlaying;
let isTimerRunning = true;
let hours;
let minutes;
let seconds;
const playButton = document.getElementById("button-play");
const pauseButton = document.getElementById("button-pause");
const toggleButton = document.getElementById("play-button");
const restartButton = document.getElementById("restartButton");
const addInputButton = document.getElementById("addInputButton");
const ringTone = new Audio("assets/alarm.mp3");

toggleButton.addEventListener("click",toggleIcons);
addInputButton.addEventListener("click", userInput);
playButton.addEventListener("click",startTimer);
restartButton.addEventListener("click",restart);

function toggleIcons() {
  if (playButton.style.display != "none") {
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
    isPlaying = true;
  } else {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
    isPlaying = false;
  }
}

function userInput() {
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("placeholder", "00:00:00");
  inputField.setAttribute("maxlength","8");
  inputField.classList.add("button-text");
  addInputButton.innerHTML = "";
  addInputButton.appendChild(inputField);
  inputField.focus();
  inputField.addEventListener("keyup", function (event) {
    let charlength = inputField.value.length;
    if (charlength === 2 || charlength === 5) {
      inputField.value += ":";
    }
    if (charlength === 8) {
      let inputValue = inputField.value;
      let inputCheck = inputValue.split(":");
      if ((!isNaN(inputCheck[0])) && (!isNaN(inputCheck[1])) && (!isNaN(inputCheck[2]))) {
      if (parseInt((inputCheck[0]).toString()) >= 24) {
        alert("Invalid time. Please try again.");
        return;
      } 
      else if (parseInt((inputCheck[1]).toString()) > 60) {
        alert("Invalid time. Please try again.");
        return;
      } 
      else if (parseInt((inputCheck[2])) > 60) {
        alert("Invalid time. Please try again.");
        return;
      }
      time = inputField.value;
      time = time.split(":");
      inputField.blur();
      initialize();
      } else {
        alert("Not a number!");
        inputField.blur();
      }
    }
  })
}


function updateDisplay(timeLeft) {
  timerDisplay.textContent = timeLeft;
}

function initialize() {
  hours = parseInt(time[0], 10);
  minutes = parseInt(time[1], 10);
  seconds = parseInt(time[2], 10);
}

function startTimer() {
  isTimerRunning = true;
  isPlaying = true;
  const timerElement = document.getElementById('addInputButton');

function updateDisplay() {
  timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function decrementTime() {
  if (!isPlaying) {
    return;
  }
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    seconds = 59;
    minutes--;
  } else if (hours > 0) {
    seconds = 59;
    minutes = 59;
    hours--;
  } else {
    isTimerRunning = false;
    ringTone.play();
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
    let userResponse = confirm("Timer Done!"); 
    if (userResponse) {
      ringTone.pause();
    } else {
      ringTone.pause();
    }
    return;
  }
    updateDisplay();
    if (isTimerRunning) {
      setTimeout(decrementTime, 1000);
    }
  }
  updateDisplay();
  decrementTime();
}

function restart() {
  if (pauseButton.style.display != "none") {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
  }
  isTimerRunning = false;
  isPlaying = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  addInputButton.innerHTML = "00:00:00";
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  const pufferfishIcon = document.getElementById("pufferfish");
  const navBar = document.getElementById("navbar");
  const navBarElement = document.getElementsByTagName("ul");
  
  pufferfishIcon.addEventListener("click", () => {
    document.querySelectorAll("li").forEach((navBarElement) => {
  navBarElement.style.display = "flex";
  })
    pufferfishIcon.classList.remove("pufferfish-move");
    pufferfishIcon.classList.add("pufferfish-move");
    navBar.classList.remove("navbar-spit-out");
    navBar.classList.add("navbar-spit-out");
    document.querySelectorAll("li").forEach((navBarElement) => {
      navBarElement.style.animation = "2s split ease-out forwards";
    })
  });
});

const pomodoroTimer = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortbreak");
const longBreak = document.getElementById("longbreak");

pomodoroTimer.addEventListener("click",setPomodoroTimer);
shortBreak.addEventListener("click",setShortBreak);
longBreak.addEventListener("click",setLongBreak);


function setPomodoroTimer() {
  if (pauseButton.style.display != "none") {
  playButton.style.display = "inline";
  pauseButton.style.display = "none";
  }
  isTimerRunning = false;
  isPlaying = false;
  hours = 0;
  minutes = 25;
  seconds = 0;
  addInputButton.innerHTML = "00:25:00";
  updateDisplay();
}

function setShortBreak() {
  if (pauseButton.style.display != "none") {
  playButton.style.display = "inline";
  pauseButton.style.display = "none";
  }
  isTimerRunning = false;
  isPlaying = false;
  hours = 0;
  minutes = 5;
  seconds = 0;
  addInputButton.innerHTML = "00:05:00";
  updateDisplay();
}
function setLongBreak() {
  if (pauseButton.style.display != "none") {
  playButton.style.display = "inline";
  pauseButton.style.display = "none";
  }
  isTimerRunning = false;
  isPlaying = false;
  hours = 0;
  minutes = 15;
  seconds = 0;
  addInputButton.innerHTML = "00:15:00";
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  const themeChanger = document.getElementById("themebtn");
  const toggleTheme = document.documentElement;

  themeChanger.addEventListener("click", () => {
    toggleTheme.classList.toggle("theme-1");
    toggleTheme.classList.toggle("theme-2");
  });
});