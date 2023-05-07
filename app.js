

const header = document.querySelector('#header');

const navbarHeight = header.offsetHeight; // Obtiene la altura de tu navbar

window.addEventListener('scroll', () => {
    if (window.pageYOffset > navbarHeight) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
