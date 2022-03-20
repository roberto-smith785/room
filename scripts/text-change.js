var images = document.querySelectorAll(".carousel-item");
var texts = document.querySelectorAll(".slide-text");

var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', () => {
    setTimeout(() => {
        if (images[0].classList.contains("active")) {
            texts[0].style = "display:block";
            texts[1].style = "display:none";
            texts[2].style = "display:none";
        } else if (images[1].classList.contains("active")) {
            texts[1].style = "display:block";
            texts[0].style = "display:none";
            texts[2].style = "display:none";
        } else if (images[2].classList.contains("active")) {
            texts[2].style = "display:block";
            texts[0].style = "display:none";
            texts[1].style = "display:none";
        }
    }, 1000)

})