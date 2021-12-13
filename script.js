var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
    $('#login').click(function() {
        window.location.replace("login.html");
    })

})