const navOpen = document.querySelector('#nav-open-btn');
const navClose = document.querySelector('.close-menu-icon');
const overlay = document.querySelector('.overlay');
const navBarMob = document.querySelector('.nav-bar-mobile');

navOpen.addEventListener('click', () => {
    navBarMob.classList.add("active");
    overlay.style.visibility = 'visible';
    overlay.style.opacity = 1;
});

navClose.addEventListener('click', () => {
    navBarMob.classList.remove("active");
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = 0;
});