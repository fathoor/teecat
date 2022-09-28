// Navbar Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    if (hamburger.classList.contains('active')) {
        hamburger.innerHTML = '<i class="bi bi-x-lg"></i>';
    } else {
        hamburger.innerHTML = '<i class="bi bi-list"></i>';
    }
    navMenu.classList.toggle('active');
});

document.querySelectorAll('#nav-menu a').forEach(nav => nav.addEventListener('click', () => {
    hamburger.classList.remove('active');
    if (hamburger.classList.contains('active')) {
        hamburger.innerHTML = '<i class="bi bi-x-lg"></i>';
    } else {
        hamburger.innerHTML = '<i class="bi bi-list"></i>';
    }
    navMenu.classList.remove('active');
}));