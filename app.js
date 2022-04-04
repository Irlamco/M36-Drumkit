const displayPressedKey = document.getElementById("displayPressedKey")
const h1 = document.querySelector("h2");


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

//boom
document.addEventListener("keypress", (event) => {
	if (event.key == "a") {
        boomAudio.src = "sounds/boom.wav";
        displayPressedKey.innerHTML = "Boom";
    }});

boom.addEventListener("click", () => {
        boomAudio.src = "sounds/boom.wav";
        displayPressedKey.innerHTML = "Boom";
    });

//clap
document.addEventListener("keypress", (event) => {
	if (event.key == "b") {
        clapAudio.src = "sounds/clap.wav";
        displayPressedKey.innerHTML = "Clap";
    }});

clap.addEventListener("click", () => {
        clapAudio.src = "sounds/clap.wav";
        displayPressedKey.innerHTML = "Clap";
    });

//hihat
document.addEventListener("keypress", (event) => {
	if (event.key == "c") {
        hihatAudio.src = "sounds/hihat.wav";
        displayPressedKey.innerHTML = "Hihat";
    }});

hihat.addEventListener("click", () => {
        hihatAudio.src = "sounds/hihat.wav";
        displayPressedKey.innerHTML = "Hihat";
    });

//kick
document.addEventListener("keypress", (event) => {
	if (event.key == "d") {
        kickAudio.src = "sounds/kick.wav";
        displayPressedKey.innerHTML = "Kick";
    }});

kick.addEventListener("click", () => {
        kickAudio.src = "sounds/kick.wav";
        displayPressedKey.innerHTML = "Kick";
    });  

//Openhat
document.addEventListener("keypress", (event) => {
    if (event.key == "e") {
        openhatAudio.src = "sounds/openhat.wav";
        displayPressedKey.innerHTML = "Openhat";
    }});

openhat.addEventListener("click", () => {
        openhatAudio.src = "sounds/openhat.wav";
        displayPressedKey.innerHTML = "Openhat";
    });    

//Ride
document.addEventListener("keypress", (event) => {
    if (event.key == "f") {
        rideAudio.src = "sounds/ride.wav";
        displayPressedKey.innerHTML = "Ride";
    }});

ride.addEventListener("click", () => {
        rideAudio.src = "sounds/ride.wav";
        displayPressedKey.innerHTML = "Ride";
    });    

//Snare
document.addEventListener("keypress", (event) => {
    if (event.key == "g") {
        snareAudio.src = "sounds/snare.wav";
        displayPressedKey.innerHTML = "Snare";
    }});

    snare.addEventListener("click", () => {
        snareAudio.src = "sounds/snare.wav";
        displayPressedKey.innerHTML = "Snare";
    }); 
//Tink
document.addEventListener("keypress", (event) => {
    if (event.key == "h") {
        tinkAudio.src = "sounds/tink.wav";
        displayPressedKey.innerHTML = "Tink";
    }});

    tink.addEventListener("click", () => {
        tinkAudio.src = "sounds/tink.wav";
        displayPressedKey.innerHTML = "Tink";
    });
//Tom
document.addEventListener("keypress", (event) => {
    if (event.key == "i") {
        tomAudio.src = "sounds/tom.wav";
        displayPressedKey.innerHTML = "Tom";
    }});

    tom.addEventListener("click", () => {
        tomAudio.src = "sounds/tom.wav";
        displayPressedKey.innerHTML = "Tom";
    });

