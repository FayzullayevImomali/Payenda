const search = document.querySelector('.search');
const hiddenForm = document.querySelector('.hidden');
const gamburger = document.querySelector('.gamburger');
const navbarContent = document.querySelector('.navbar-content');
const dropDown = document.querySelectorAll('.dropdown-btn');

search.addEventListener('click', () => {
    hiddenForm.classList.toggle('active');
});

gamburger.addEventListener('click', () => {
    gamburger.classList.toggle('active-gamburger');
    navbarContent.classList.toggle('navbar-content-active');
});
<<<<<<< HEAD

dropDown.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        e.preventDefault;
        const dropdown = e.currentTarget.nextElementSibling;
        dropdown.classList.toggle('dropdown-list-active');

        document.querySelectorAll('.dropdown-list + .dropdown-btn').forEach((element ) => {
            if(element !== e.currentTarget.nextElementSibling) {
                dropdown.classList.remove('dropdown-list-active');
            }
        });
    });
});

window.onclick = (e) => {
    if(!e.target.matches('.dropdown-list')) {
        const dropdowns = document.querySelectorAll('.dropdown-list');
        dropdowns.forEach((btns) => {
            btns.classList.remove('dropdown-list-active');
        });
    }
};
=======

dropDown.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        e.preventDefault;
        const dropdown = e.currentTarget.nextElementSibling;
        dropdown.classList.toggle('dropdown-list-active');
    });
});
>>>>>>> aac8c80647db95fca4d8dd28dcef35c29d0e55a3
