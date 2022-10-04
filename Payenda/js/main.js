'use strict';

const search = document.querySelector('.search');
const hiddenForm = document.querySelector('.hidden');
const gamburger = document.querySelector('.gamburger');
const navbarContent = document.querySelector('.navbar-content');
const dropDown = document.querySelectorAll('dropdown-btn');

search.addEventListener('click', () => {
    hiddenForm.classList.toggle('active');
});

gamburger.addEventListener('click', () => {
    gamburger.classList.toggle('active-gamburger');
    navbarContent.classList.toggle('navbar-content-active');
});

dropDown.forEach(btns) => {
    btns.addEventListener('click', (e) => {
        const dropdown = e.currentTarget.nextElementSibling;
        document.querySelector('.dropdown-list').classList.toggle('dropdown-list-active');
    })
};




