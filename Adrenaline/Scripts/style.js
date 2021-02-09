'use strict';

document.getElementById("center1").addEventListener("mouseover", mouseOver);
document.getElementById("center1").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("center1").style.background = "grey";
    console.log("hover")
}

function mouseOut() {
    document.getElementById("center1").style.background = "white";
    console.log("hover")
}