const search = document.querySelector('.search');
const hiddenForm = document.querySelector('.hidden');
const gamburger = document.querySelector('.gamburger');
const navbarContent = document.querySelector('.navbar-content');
const dropDown = document.querySelectorAll('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-list');
const firstLink  = document.querySelector('.dropdown-btn1');
const secondLink = document.querySelector('.dropdown-btn2');
const arr = ['apple', 'limon', 'banan']

search.addEventListener('click', () => {
    hiddenForm.classList.toggle('active');
});

gamburger.addEventListener('click', () => {
    gamburger.classList.toggle('active-gamburger');
    navbarContent.classList.toggle('navbar-content-active');
});

// firstLink.addEventListener('click', (e) => {
//    dropdownContent.classList.toggle('dropdown-list-active');
//    if(secondLink.includes('')) {
//     console.log('not includes');
//    }
// });


dropDown.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        e.preventDefault;
        const dropdown = e.currentTarget.nextElementSibling;
        dropdown.classList.toggle('dropdown-list-active');

        document.querySelector(".dropdown-btn + .dropdown-list").forEach((dropdown) => {
            if(dropdown !== e.currentTarget.nextElementSibling) {
                dropdown.classList.remove('dropdown-list-active');
            }
        });
    });
});


console.log(arr.includes('apple'));






