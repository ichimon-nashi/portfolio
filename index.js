"use strict";

// hamburger menu
const navList = document.getElementById("nav-list");
const hamburgerIcon = document.querySelector(".hamburger-icon");

hamburgerIcon.addEventListener("click", () => {
    navList.classList.toggle("show-menu");
})

// contact form submit button
const submitButton = document.getElementById("submit-btn");
const envelopeIcon = document.getElementById("envelope-icon");

submitButton.addEventListener("mouseenter", () => {
    envelopeIcon.className = "fa-solid fa-envelope-open";
})

submitButton.addEventListener("mouseleave", () => {
    envelopeIcon.className = "fa-solid fa-envelope";
})