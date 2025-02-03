let time;
let isPlaying;
let isTimerRunning = true;
const playButton = document.getElementById("button-play");
const pauseButton = document.getElementById("button-pause");
const toggleButton = document.getElementById("play-button");
const restartButton = document.getElementById("restart-button");
const addInputButton = document.getElementById("addInputButton");

toggleButton.addEventListener("click",toggleIcons);
addInputButton.addEventListener("click", userInput);
playButton.addEventListener("click",startTimer);

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
    if (event.key === "Enter") {
      let inputValue = inputField.value;
      let inputCheck = inputValue.split("");
      if (parseInt((inputCheck[0]).toString()+(inputCheck[1]).toString()) >= 24) {
        alert("Invalid time. Please try again.");
      } 
      else if (parseInt((inputCheck[3]).toString()+(inputCheck[4]).toString()) > 60) {
        alert("Invalid time. Please try again.");
      } 
      else if (parseInt((inputCheck[6]).toString()+(inputCheck[7]).toString()) > 60) {
        alert("Invalid time. Please try again.");
      }
      time = inputField.value;
      time = time.split(":");
    }
  })
}

function updateDisplay(timeLeft) {
  timerDisplay.textContent = timeLeft;
}

function startTimer() {
  isTimerRunning = true;
  isPlaying = true;
  let hours = parseInt(time[0], 10);
  let minutes = parseInt(time[1], 10);
  let seconds = parseInt(time[2], 10);

  const timerElement = document.getElementById('addInputButton');

  function updateDisplay() {
    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function decrementTime() {
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
    if (isTimerRunning && isPlaying) {
      setTimeout(decrementTime, 1000);
    }
  }
  updateDisplay();
  decrementTime();
}

function restart() {
  isTimerRunning = false;
  updateDisplay();
}
