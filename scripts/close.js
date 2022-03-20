var menu = document.querySelector(".navbar-collapse");
var close = document.querySelector(".menu-close");
var open = document.querySelector(".menu-open");
var btn = document.querySelector(".navbar-toggler");
var nav_bg = document.querySelector(".nav-container");

btn.addEventListener("click", () => {
    console.log("btn pressed");
    if (btn.classList.contains("collapsed")) {
        open.style = "display:block";
        close.style = "display:none";
        nav_bg.style = "background:transparent !important;";
    } else {
        open.style = "display:none";
        close.style = "display:block";
        nav_bg.style = "background:white !important;";
    }
})