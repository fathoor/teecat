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

// Next Button
const nexts = document.querySelectorAll('#next');
const eventLists = document.querySelectorAll('.event-list');

nexts.forEach((next, index) => {
    const eventItem = eventLists[index].querySelectorAll('img').length;
    if (eventItem < 3) {
        next.style.display = 'none';
    }
    let counter = 0;
    next.addEventListener('click', () => {
        counter++;
        if (eventItem - (1 + counter) > 0) {
            eventLists[index].style.transform = `translateX(-${counter * 300}px)`;
        } else {
            eventLists[index].style.transform = `translateX(0)`;
            counter = 0;
        }
    });
});