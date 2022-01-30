let deleteTextSound = new Audio("audios/whoosh.flac");
let completeTaskAudio = new Audio("audios/complete-task.mp3");

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
    setInterval(barCount, 600);
    taskAudio();
}

function initTenMinute() {
    setInterval(barCount, 1200)
    taskAudio();
}

function initFifteenMinute() {
    setInterval(barCount, 1800)
    taskAudio();
}

function initThirtyMinute() {
    setInterval(barCount, 3600)
    taskAudio();
}

function initSixtyMinute() {
    setInterval(barCount, 7200)
    taskAudio();
}


function barCount() {
    var timeLeft = document.getElementById("time-left");
    var countdownBar = document.getElementById("countdown-bar");

    if (timeLeft.clientWidth < countdownBar.clientWidth) {
        timeLeft.style.width = timeLeft.clientWidth + 1 + "px";
    } else {
        timeLeft.style.width = countdownBar.clientWidth + "px";
    }

}

function taskAudio() {
    completeTaskAudio.play();
    completeTaskAudio.volume = 0.3;
    completeTaskAudio.loop=false;
    
}