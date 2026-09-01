const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Menyudagi istalgan havolaga bosilganda menyuni yopish
document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});