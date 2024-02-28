function portfolio(){
    location.href="./portfolios.html"
}

function booking(){
    location.href="./booking.html"
}

function artists(){
    location.href="./artists.html"
}
function awards(){
    location.href="./awards.html"

}
function blog(){
    location.href="./blog.html"

}

function home(){
    location.href="./index.html"
}

function cesar(){
    location.href="./cesar.html"
}
function jason(){
    location.href="./jason.html"
}
function reko(){
    location.href="./reko.html"
}
function dev(){
    location.href="./dev.html"
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.querySelectorAll('.slide');
    if(n>slides.length) {slideIndex=1}
    if(n<1){slideIndex=slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block"
}

function full(x){
    if(!document.fullscreenElement){
        x.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}