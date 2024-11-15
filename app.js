"use strict";
const triggers = document.querySelectorAll(".navbar > li");
const background = document.querySelector(".dropdown-bg");
const nav=document.querySelector(".navbar")


function HandleEnter(e) {
    console.log("Enter");
}

function HandleLeave(e) {
    console.log("Leave");
}
console.log(triggers);
triggers.forEach(trigger => trigger.addEventListener('mouseenter', HandleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', HandleLeave));