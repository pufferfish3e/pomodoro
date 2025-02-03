const playButton = document.getElementById("button-play");
const pauseButton = document.getElementById("button-pause");
const toggleButton = document.getElementById("play-button");
toggleButton.addEventListener("click",toggleIcons);
function toggleIcons() {
  if (playButton.style.display != "none") {
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
  } else {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
  }
}
