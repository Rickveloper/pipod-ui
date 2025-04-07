const playPauseBtn = document.querySelector(".play-pause");
let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playPauseBtn.textContent = isPlaying ? "Pause" : "Play";
});
