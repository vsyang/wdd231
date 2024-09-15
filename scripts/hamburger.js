const hamburgerButton = document.querySelector('#hamburgerButton');
const navLink = document.querySelector('.navLinks');

hamburgerButton.addEventListener('click', () => {
    navLink.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
})