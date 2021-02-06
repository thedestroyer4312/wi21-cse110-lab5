// main.js

// TODO

// Volume elements
const volumeSlider = document.getElementById("volume-slider");
const volumeNumber = document.getElementById("volume-number");
const volumeIcon = document.getElementById("volume-image");
const audio = document.getElementById("horn-sound");

// Image elements
const soundImage = document.getElementById("sound-image");

// button element (click on to play unless volume is 0)
const button = document.getElementById("honk-btn");

// radio elements
const airHorn = document.getElementById("radio-air-horn");
const carHorn = document.getElementById("radio-car-horn");
const partyHorn = document.getElementById("radio-party-horn");

// add event listeners
volumeSlider.addEventListener("input", () => {
    updateVolume(parseInt(volumeSlider.value));
});
volumeNumber.addEventListener("input", () => {
    updateVolume(parseInt(volumeNumber.value));
});
button.addEventListener("click", (event) => {
    playSound();
    event.preventDefault();
});
airHorn.addEventListener("input", () => {
    changeSound("air-horn");
});
carHorn.addEventListener("input", () => {
    changeSound("car-horn");
});
partyHorn.addEventListener("input", () => {
    changeSound("party-horn");
});

// update slider, volume level, icons, etc.
function updateVolume(volumeLevel){
    volumeSlider.value = volumeLevel;
    volumeNumber.value = volumeLevel;
    audio.volume = volumeLevel / 100.0;
    const volumeValues = [0, 33, 66, 100]; // scale levels accordingly
    for(i = 0; i < volumeValues.length; i++){
        if(volumeLevel <= volumeValues[i]){
            volumeIcon.src = `./assets/media/icons/volume-level-${i}.svg`;
            break;
        }
    }
}

function changeSound(hornType){
    const soundSource = `./assets/media/audio/${hornType}.mp3`;
    const imageSource = `./assets/media/images/${hornType}.svg`;
    soundImage.src = imageSource;
    audio.src = soundSource;
}

// when the button is clicked, if volume is not 0, play the audio
function playSound(){
    if(parseInt(volumeNumber.value) != 0){
        audio.play();
    }
}