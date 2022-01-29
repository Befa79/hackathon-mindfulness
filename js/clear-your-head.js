let deleteTextSound = new Audio("audios/whoosh.flac");

document.getElementById("clear-btn").addEventListener("click", clearBtnClick);
let fiveMinuteButton = document.getElementById("5-min-btn").addEventListener("click", initBarCount);

function clearBtnClick() {
    document.getElementById("floatingTextarea2").value="";

    deleteTextSound.play();
    deleteTextSound.volume = 0.3;
    deleteTextSound.loop = false;
}


function timer (){
    
}

function initBarCount() {
    var timeLeft = document.getElementById("time-left");
    var countdownBar = document.getElementById("countdown-bar");
    var fiveMinuteTimer = setInterval(barCount, 5000);
    function barCount (){
        if (timeLeft.clientWidth < countdownBar.clientWidth) {
            timeLeft.style.width = timeLeft.clientWidth + 1 + "px";
        } else {
            timeLeft.style.width = countdownBar.clientWidth + "px";
            clearInterval(fiveMinuteTimer);
        }
    }
}