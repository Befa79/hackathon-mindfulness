function hamburgerMenu() {
    const x = document.getElementById("menu-navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

const x = document.getElementsByClassName("menu-navbar");

console.log(x);