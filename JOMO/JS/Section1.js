var s1_0_1_1 = document.getElementById("s1_0_1_1"),
    s1_0_1_0_1 = document.getElementById("s1_0_1_0_1"),
    s1_0_2_1 = document.getElementById("s1_0_2_1"),
    s1_0_2_0_1 = document.getElementById("s1_0_2_0_1"),
    s1_0_3_1 = document.getElementById("s1_0_3_1"),
    s1_0_3_0_1 = document.getElementById("s1_0_3_0_1"),
    s1_0_4_1 = document.getElementById("s1_0_4_1"),
    s1_0_4_0_1 = document.getElementById("s1_0_4_0_1"),
    s1_0_5_1 = document.getElementById("s1_0_5_1"),
    s1_0_5_0_1 = document.getElementById("s1_0_5_0_1"),
    s1_0_6_1 = document.getElementById("s1_0_6_1"),
    s1_0_6_0_1 = document.getElementById("s1_0_6_0_1"),
    i,
    navIndex0 = -1,
    navIndex1 = -1,
    navIndex2 = -1,
    navIndex3 = -1,
    navIndex4 = -1,
    navIndex5 = -1,
    n;
function s1_0_1_0FC(i) {
    showNav0(navIndex0 += i);
}
function showNav0(n) {
    if (n > 0) {
        navIndex0 = -1;
        s1_0_1_1.style.maxHeight = "100%";
        s1_0_1_0_1.textContent = "-";
    } else {
        s1_0_1_1.style.maxHeight = "0";
        s1_0_1_0_1.textContent = "+";
    }
}
function s1_0_2_0FC(i) {
    showNav1(navIndex1 += i);
}
function showNav1(n) {
    if (n > 0) {
        navIndex1 = -1;
        s1_0_2_1.style.maxHeight = "100%";
        s1_0_2_0_1.textContent = "-";
    } else {
        s1_0_2_1.style.maxHeight = "0";
        s1_0_2_0_1.textContent = "+";
    }
}
function s1_0_3_0FC(i) {
    showNav2(navIndex2 += i);
}
function showNav2(n) {
    if (n > 0) {
        navIndex2 = -1;
        s1_0_3_1.style.maxHeight = "100%";
        s1_0_3_0_1.textContent = "-";
    } else {
        s1_0_3_1.style.maxHeight = "0";
        s1_0_3_0_1.textContent = "+";
    }
}
function s1_0_4_0FC(i) {
    showNav3(navIndex3 += i);
}
function showNav3(n) {
    if (n > 0) {
        navIndex3 = -1;
        s1_0_4_1.style.maxHeight = "100%";
        s1_0_4_0_1.textContent = "-";
    } else {
        s1_0_4_1.style.maxHeight = "0";
        s1_0_4_0_1.textContent = "+";
    }
}
function s1_0_5_0FC(i) {
    showNav4(navIndex4 += i);
}
function showNav4(n) {
    if (n > 0) {
        navIndex4 = -1;
        s1_0_5_1.style.maxHeight = "100%";
        s1_0_5_0_1.textContent = "-";
    } else {
        s1_0_5_1.style.maxHeight = "0";
        s1_0_5_0_1.textContent = "+";
    }
}
function s1_0_6_0FC(i) {
    showNav5(navIndex5 += i);
}
function showNav5(n) {
    if (n > 0) {
        navIndex5 = -1;
        s1_0_6_1.style.maxHeight = "100%";
        s1_0_6_0_1.textContent = "-";
    } else {
        s1_0_6_1.style.maxHeight = "0";
        s1_0_6_0_1.textContent = "+";
    }
}