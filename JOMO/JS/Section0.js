var slides = [
        document.getElementById("h_0_1_0"),
        document.getElementById("h_0_1_1"),
        document.getElementById("h_0_1_2")
    ];
var i;
var slideIndex = 1;
var index;
var n;
autoShowSlides();
function h_0_0(i) {
    showSlides(slideIndex += i);
}
function h_0_2(i) {
    showSlides(slideIndex += i);
}
function showSlides(n) {
    var x;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (x = 0; x < slides.length; x = x + 1) {
        slides[x].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}