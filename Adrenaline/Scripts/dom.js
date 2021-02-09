document.getElementById("center1").addEventListener("mouseover", mouseOver);
document.getElementById("center1").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("center1").style.background = "grey";
}

function mouseOut() {
    document.getElementById("center1").style.background = "white";
}