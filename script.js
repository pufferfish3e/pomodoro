let isTimerRunning = false;
const playButton = document.getElementById("button-play");
const pauseButton = document.getElementById("button-pause");
const toggleButton = document.getElementById("play-button");
const restartButton = document.getElementById("restart-button");
const addInputButton = document.getElementById("addInputButton");

toggleButton.addEventListener("click",toggleIcons);
addInputButton.addEventListener("click", userInput)

function toggleIcons() {
  if (playButton.style.display != "none") {
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
  } else {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
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
      if (parseInt((inputCheck[0]).toString()+(inputCheck[1]).toString()) >= 24) {alert("Invalid time. Please try again.");} 
      else if (parseInt((inputCheck[3]).toString()+(inputCheck[4]).toString()) > 60) {"Invalid time. Please try again.";} 
      else if (parseInt((inputCheck[6]).toString()+(inputCheck[7]).toString()) > 60) {"Invalid time. Please try again.";}
    }
  })
}



/*
function updateDisplay() {
  timerDisplay.textContent = timeLeft;
}


function startTimer() {
  
}

function restart() {
  pauseTimer();
  timeinseconds = 0;
  updateDisplay();
}
*/