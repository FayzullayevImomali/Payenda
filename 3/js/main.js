'use strict';

const search = document.querySelector('.search');
const hiddenForm = document.querySelector('.hidden');
const gamburger = document.querySelector('.gamburger');
const navbarContent = document.querySelector('.navbar-content');

search.addEventListener('click', () => {
    hiddenForm.classList.toggle('active');
});

gamburger.addEventListener('click', () => {
    gamburger.classList.toggle('active-gamburger');
    navbarContent.classList.toggle('navbar-content-active');
})


