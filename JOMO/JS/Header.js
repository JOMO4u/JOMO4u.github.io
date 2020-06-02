var slides = [
        document.getElementById("h_0_1_0"),
        document.getElementById("h_0_1_1"),
        document.getElementById("h_0_1_2")
    ];
var i;
var slideIndex = 1;
var index = 0;
var n;
h_0_1FC(1);
function h_0_0(i) {
    showSlides(slideIndex += i);
}
function h_0_1FC(i) {
    showSlides(index += i);
    setTimeout(h_0_1FC, 2000);
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
var h_1_1 = [
        document.getElementById("h_1_1_0"),
        document.getElementById("h_1_1_1"),
        document.getElementById("h_1_1_2"),
        document.getElementById("h_1_1_3")
    ],
    s = [
        document.getElementById("s0"),
        document.getElementById("s1"),
        document.getElementById("s2")
    ];
function h_1_1_0FC() {
    var i;
    for (i = 1; i <= 3; i = i + 1) {
        h_1_1[i].style.display = "none";
    }
    for (i = 0; i <= 2; i = i + 1) {
        s[i].style.display = "none";
    }
}
function h_1_1_1FC() {
    var i;
    for (i = 1; i <= 3; i = i + 1) {
        h_1_1[i].style.display = "block";
    }
    for (i = 0; i <= 2; i = i + 1) {
        s[i].style.display = "none";
    }
    s[0].style.display = "block";
}
function h_1_1_2FC() {
    var i;
    for (i = 1; i <= 3; i = i + 1) {
        h_1_1[i].style.display = "block";
    }
    for (i = 0; i <= 2; i = i + 1) {
        s[i].style.display = "none";
    }
    s[1].style.display = "block";
}
function h_1_1_3FC() {
    var i;
    for (i = 1; i <= 3; i = i + 1) {
        h_1_1[i].style.display = "block";
    }
    for (i = 0; i <= 2; i = i + 1) {
        s[i].style.display = "none";
    }
    s[2].style.display = "block";
}
var h_1 = document.getElementById("h_1");
window.onscroll = function() {h_1FC()};
function h_1FC() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        h_1.style.position = "fixed";
        h_1.style.top = "0";
        h_1.style.width = "100%";
    } else {
        h_1.style.position = "static";
    }
}