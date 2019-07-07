"use strict";

const menu = document.querySelector(".nav");
const openButton = document.querySelector(".nav-trigger");
const closeButton = document.querySelector(".nav-close");

const toggleMenu = () => {
  menu.classList.toggle("slide-in");
};

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
