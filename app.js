// Button IDs
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom= document.getElementById("tom");

// Sound IDs
const boomAudio = document.getElementById("boomAudio");
const clapAudio = document.getElementById("clapAudio");
const hihatAudio = document.getElementById("hihatAudio");
const kickAudio = document.getElementById("kickAudio");
const openhatAudio = document.getElementById("openhatAudio");
const rideAudio = document.getElementById("rideAudio");
const snareAudio = document.getElementById("snareAudio");
const tinkAudio = document.getElementById("tinkAudio");
const tomAudio = document.getElementById("tomAudio");

// Keypress
document.addEventListener("keypress", (event) => {
	if (event.key == "a") {
        console.log(event.key)
        clapAudio.src = "sounds/clap.wav";
    }});

clap.addEventListener("click", () => {
        console.log("clicked")
        clapAudio.src = "sounds/clap.wav";
    });