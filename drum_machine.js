const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");
const drumName = {
  "Q": "Heater 1",
  "W": "Heater 2",
  "E": "Heater 3",
  "A": "Heater 4",
  "S": "Clap",
  "D": "Open-HH",
  "Z": "Kick-n'-Hat",
  "X": "Kick",
  "C": "Closed-HH",
}

drumPads.forEach(drumPad => {
  const audio = drumPad.querySelector("audio");
  const activePad = pad => {
    pad.classList.add("active");
    setTimeout(() => {
      pad.classList.remove("active")
    }, 60);
  }
  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
    activePad(drumPad);
    display.textContent = drumName[audio.id];
  }
  drumPad.addEventListener("click", playAudio);
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (drumName.hasOwnProperty(key)) {
    const clip = document.getElementById(key);
    clip.parentElement.click();
  }
});
