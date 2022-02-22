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

/*translate*/
const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-title-1': 'Standart',
        'price-title-2': 'Premium',
        'price-title-3': 'Gold',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'email': 'E-mail',
        'phone': 'Phone',
        'message': 'Message',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-title-1': 'Стандарт',
        'price-title-2': 'Премиум',
        'price-title-3': 'Золото',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'e-mail': 'Электронная почта',
        'phone': 'Телефон',
        'message': 'Сообщение',
        'send-message': 'Отправить'
    }
}
const en = document.querySelector('.en');
const ru = document.querySelector('.ru');
const list = document.querySelectorAll('[data-i18]');

ru.addEventListener('click', () => {
    getTranslate('ru');
})

en.addEventListener('click', () => {
    getTranslate('en');
})

function getTranslate(lang) {
    const obj = i18Obj[lang];
    list.forEach((item) => {
        item.textContent = obj[item.getAttribute('data-i18')];
    })
}

let langButtons = document.querySelectorAll('.switch-item__lang');
langButtons.forEach(lang => {
    lang.addEventListener('click', function() {
        langButtons.forEach(currentLang => currentLang.classList.remove('active__lang'));
        this.classList.add('active__lang');
    })
})

getTranslate(DEFAULT_LANGUAGE);

