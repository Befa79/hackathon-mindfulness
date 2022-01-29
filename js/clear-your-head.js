let deleteTextSound = new Audio("audios/whoosh.flac");

document.getElementById("clear-btn").addEventListener("click", clearBtnClick);


function clearBtnClick() {
    document.getElementById("floatingTextarea2").value="";

    deleteTextSound.play();
    deleteTextSound.volume = 0.3;
    deleteTextSound.loop = false;
}


function timer (){
    document.getElementById("5-min-btn").addEventListener("click", fiveMinuteTimer);
}

function fiveMinuteTimer() {

}
