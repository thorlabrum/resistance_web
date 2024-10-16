
function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("videos").style.display = "none";
}


function showAbout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("videos").style.display = "none";
}

function showContact() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("videos").style.display = "none";
}

function showVideos() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("videos").style.display = "block";
}