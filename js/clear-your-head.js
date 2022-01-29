let deleteAudio = new Audio("audios/whoosh.flac");

document.getElementById("clear-btn").addEventListener("click", deleteBtnClick);

function deleteBtnClick() {
    document.getElementById("floatingTextarea2").value="";

    deleteAudio.play();
    deleteAudio.volume = 0.3;
    deleteAudio.loop = false;
}


