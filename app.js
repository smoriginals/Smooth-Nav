"use strict";
const triggers = document.querySelectorAll('.lists>li');
const background = document.querySelector(".dropdown-bg");
const nav = document.querySelector(".navbar");
function HandleEnter() {

    background.classList.add("opens");
    this.classList.add("trigger-enter");

    setTimeout(() => {

        if (this.classList.contains("trigger-enter")) {
            this.classList.add("trigger-enter-active");
        }
    }, 100);

    const dropdowns = this.querySelector(".item-info");
    if (!dropdowns) return;
    const dropCoord = dropdowns.getBoundingClientRect();
    const navCoord = nav.getBoundingClientRect();

    const coords = {
        height: dropCoord.height,
        width: dropCoord.width,
        top: dropCoord.top-navCoord.top,
        left: dropCoord.left-navCoord.left,
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px,${coords.top}px)`);
    
}

function HandleLeave() {
    background.classList.remove("opens");
    this.classList.remove("trigger-enter", "trigger-enter-active");
    
}
triggers.forEach(trigger => trigger.addEventListener('mouseenter', HandleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', HandleLeave));