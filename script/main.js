const hamburger = document.querySelector('#icon');

const navBar = document.querySelector('.navbar');

const navbarToggle = () => navBar.classList.toggle('active');

hamburger.addEventListener('click', navbarToggle);

