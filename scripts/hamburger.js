const hamburgerButton = document.querySelector('#hamburgerMenu');
const navLink = document.querySelector('.navLinks');

hamburgerButton.addEventListener('click', () => {
    navLink.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});