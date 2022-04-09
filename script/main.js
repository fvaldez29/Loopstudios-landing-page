const hamburger = document.querySelector('#icon');
const closetBtn = document.querySelector('#close');

const navBar = document.querySelector('.menu');

const navbarToggle = () =>
    navBar.classList.toggle('active');

hamburger.addEventListener('click', navbarToggle);
closetBtn.addEventListener('click', navbarToggle);