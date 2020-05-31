var h_1 = document.getElementById("h_1");
window.onscroll = function() {h_1FS()};
function h_1FS() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 750) {
        h_1.style.position = "fixed";
        h_1.style.top = "0";
        h_1.style.width = "100%";
    } else {
        h_1.style.position = "static";
    }
}