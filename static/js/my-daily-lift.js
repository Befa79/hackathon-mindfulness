//code used from "https://www.codegrepper.com/code-examples/html/refresh+button+html"
const reloadButton = document.getElementById("reload");
//Reload everything
function reload() {
    reload = location.reload();
}

reloadButton.addEventListener("click", reload, false);