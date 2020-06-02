var s1_0_1_1 = document.getElementById("s1_0_1_1"),
    s1_0_1_0_1 = document.getElementById("s1_0_1_0_1"),
    s1_0_2_1 = document.getElementById("s1_0_2_1"),
    s1_0_2_0_1 = document.getElementById("s1_0_2_0_1"),
    i,
    navIndex = -1,
    n;
function s1_0_1_0FC(i) {
    showNav0(navIndex += i);
}
function showNav0(n) {
    if (n > 0) {
        navIndex = -1;
        s1_0_1_1.style.display = "block";
        s1_0_1_0_1.textContent = "-";
    } else {
        s1_0_1_1.style.display = "none";
        s1_0_1_0_1.textContent = "+";
    }
}
function s1_0_2_0FC(i) {
    showNav1(navIndex += i);
}
function showNav1(n) {
    if (n > 0) {
        navIndex = -1;
        s1_0_2_1.style.display = "block";
        s1_0_2_0_1.textContent = "-";
    } else {
        s1_0_2_1.style.display = "none";
        s1_0_2_0_1.textContent = "+";
    }
}