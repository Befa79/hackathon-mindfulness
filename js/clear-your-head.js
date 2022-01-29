let deleteTextSound = new Audio("audios/whoosh.flac");

document.getElementById("clear-btn").addEventListener("click", clearBtnClick);
let fiveMinuteButton = document.getElementById("5-min-btn").addEventListener("click", initFiveMinute);
let tenMinuteButton = document.getElementById("10-min-btn").addEventListener("click", initTenMinute);
let fifteenMinuteButton = document.getElementById("15-min-btn").addEventListener("click", initFifteenMinute);
let thirtyMinuteButton = document.getElementById("15-min-btn").addEventListener("click", initThirtyMinute);
let sixtyMinuteButton = document.getElementById("15-min-btn").addEventListener("click", initSixtyyMinute);

function clearBtnClick() {
    document.getElementById("floatingTextarea2").value = "";

    deleteTextSound.play();
    deleteTextSound.volume = 0.3;
    deleteTextSound.loop = false;
}


function initFiveMinute() {
    setInterval(barCount, 5000)
    barCount;
}

function initTenMinute() {
    setInterval(barCount, 10000)
    barCount;
}

function initFifteenMinute() {
    setInterval(barCount, 15000)
    barCount;
}

function initThirtyMinute() {
    setInterval(barCount, 30000)
    barCount;
}

function initSixtyMinute() {
    setInterval(barCount, 60000)
    barCount;
}


var timeLeft = document.getElementById("time-left");
var countdownBar = document.getElementById("countdown-bar");

function barCount() {
    if (timeLeft.clientWidth < countdownBar.clientWidth) {
        timeLeft.style.width = timeLeft.clientWidth + 1 + "px";
    } else {
        timeLeft.style.width = countdownBar.clientWidth + "px";
        clearInterval(timer);
    }
}