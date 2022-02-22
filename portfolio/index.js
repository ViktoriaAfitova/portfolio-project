/*burger*/
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
    toggleBtn.classList.toggle('collapsed');
    nav.classList.toggle('collapsed');
    navList.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
    setTimeout(() => {
        toggleBtn.classList.remove('collapsed');
        nav.classList.remove('collapsed');
        navList.classList.remove('collapsed');
    }, 1000);
}
navItems.forEach(el => el.addEventListener('click', closeMenu));

/*images*/
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const DEFAULT_LANGUAGE = 'en';

if (portfolioBtns) {
    for (let btn of portfolioBtns) {
        btn.addEventListener('click', (e) => {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${e.target.dataset.season}/${index + 1}.jpg`);
        })
    }
}

function preloadSummerImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach((element, i) => {
        for(i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${i}/${element}jpg`;
        }
    })
}
preloadSummerImages();

let portfolioButtons = document.querySelectorAll('.portfolio-btn');
portfolioButtons.forEach(button => {
    button.addEventListener('click', function() {
        portfolioButtons.forEach(currentBtn => currentBtn.classList.remove('active'));
        this.classList.add('active');
    })
})
