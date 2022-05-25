let boom = document.getElementById("boomD");
let clap = document.getElementById("clapD");
let hihat = document.getElementById("hihatD");
let kick = document.getElementById("kickD");
let openHat = document.getElementById("openHatD");
let ride = document.getElementById("rideD");
let snare = document.getElementById("snareD");
let tink = document.getElementById("tinkD");
let tom = document.getElementById("tomD");

document.addEventListener("keypress", (keyValue) => {
    if (keyValue.key == "a" || keyValue.key == "A") {
    boomD.pause();
    boomD.currentTime = 0;
    boomD.play();
    } else if (keyValue.key == "s" || keyValue.key == "S") {
    clapD.pause();
    clapD.currentTime = 0;
    clapD.play();
    } else if (keyValue.key == "d" || keyValue.key == "D") {
    hiHatD.pause();
    hiHatD.currentTime = 0;
    hiHatD.play();
    } else if (keyValue.key == "f" || keyValue.key == "F") {
    kickD.pause();
    kickD.currentTime = 0;
    kickD.play();
    } else if (keyValue.key == "g" || keyValue.key == "G") {
    openHatD.pause();
    openHatD.currentTime = 0;
    openHatD.play();
    } else if (keyValue.key == "h" || keyValue.key == "H") {
    rideD.pause();
    rideD.currentTime = 0;
    rideD.play();
    } else if (keyValue.key == "j" || keyValue.key == "J") {
    snareD.pause();
    snareD.currentTime = 0;
    snareD.play();
    } else if (keyValue.key == "k" || keyValue.key == "K") {
    tinkD.pause();
    tinkD.currentTime = 0;
    tinkD.play();
    } else if (keyValue.key == "l" || keyValue.key == "L") {
    tomD.pause();
    tomD.currentTime = 0;
    tomD.play();
    }
});

let count = 0;

bDrum.addEventListener("click", () => {
    boomD.pause();
    boomD.currentTime = 0;
    boomD.play();
});

kDrum.addEventListener("click", () => {
    kickD.pause();
    kickD.currentTime = 0;
    kick.play();
});

sDrum.addEventListener("click", () => {
    snareD.pause();
    snareD.currentTime = 0;
    snareD.play();
});

cDrum.addEventListener("click", () => {
    clapD.pause();
    clapD.currentTime = 0;
    clapD.play();
});

oDrum.addEventListener("click", () => {
    openHatD.pause();
    openHatD.currentTime = 0;
    openHatD.play();
});

tDrum.addEventListener("click", () => {
    tinkD.pause();
    tinkD.currentTime = 0;
    tinkD.play();
});

hDrum.addEventListener("click", () => {
    hiHatD.pause();
    hiHatD.currentTime = 0;
    hiHatD.play();
});

rDrum.addEventListener("click", () => {
    rideD.pause();
    rideD.currentTime = 0;
    rideD.play();
});

toDrum.addEventListener("click", () => {
    tomD.pause();
    tomD.currentTime = 0;
    tomD.play();
});

