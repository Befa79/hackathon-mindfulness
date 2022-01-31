let deleteTextSound = new Audio("static/audios/whoosh.flac");
let completeTaskAudio = new Audio("static/audios/complete-task.mp3");
let seaAudio = new Audio("static/audios/sea.flac");
let cityParkAudio = new Audio("static/audios/city-park.wav");

document.getElementById("clear-btn").addEventListener("click", clearBtnClick);
document.getElementById("nature-audio-start").addEventListener("click", natureAudioStart);
document.getElementById("nature-audio-pause").addEventListener("click", natureAudioPause);
let fiveMinuteButton = document.getElementById("5-min-btn").addEventListener("click", initFiveMinute);
let tenMinuteButton = document.getElementById("10-min-btn").addEventListener("click", initTenMinute);
let fifteenMinuteButton = document.getElementById("15-min-btn").addEventListener("click", initFifteenMinute);
let thirtyMinuteButton = document.getElementById("15-min-btn").addEventListener("click", initThirtyMinute);
let sixtyMinuteButton = document.getElementById("15-min-btn").addEventListener("click", initSixtyMinute);

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

function natureAudioStart() {
    seaAudio.play();
    seaAudio.volume = 0.3;
    seaAudio.loop = false;
}

function natureAudioPause (){
    stopAudio(seaAudio);   
}

function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}
