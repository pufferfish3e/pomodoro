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
    alert("Timer is done!");
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
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
