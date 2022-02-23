document.addEventListener("DOMContentLoaded", function () {

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
        'send-message': 'Send message',
        'E-mail': 'E-mail',
        'Phone': 'Phone',
        'Message': 'Message',
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
        'send-message': 'Отправить',
        'E-mail': 'Электронный ящик',
        'Phone': 'Номер телефона',
        'Message': 'Сообщение',
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

    const dataTranslate = document.querySelectorAll('[data-i18]');
        dataTranslate.forEach((element) => {
            let a = element.dataset.i18;
            if (element.placeholder) {
                element.placeholder = element.innerHTML = i18Obj[`${lang}`][`${a}`];
                element.textContent = '';
            } else {
                element.innerHTML = i18Obj[`${lang}`][`${a}`];
            }
        });
        language = lang;
}

let language = 'en';
let themeColor = 'dark';

const setLocalStorage = () => {
    localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage)

const getLocalStorage = () => {
    if (localStorage.getItem('language')) {
        const language = localStorage.getItem('language');
        getTranslate(language);
    }
}
window.addEventListener('load', getLocalStorage);


let langButtons = document.querySelectorAll('.switch-item__lang');
langButtons.forEach(lang => {
    lang.addEventListener('click', function() {
        langButtons.forEach(currentLang => currentLang.classList.remove('active__lang'));
        this.classList.add('active__lang');
    })
})

getTranslate(DEFAULT_LANGUAGE);

/*theme*/
let moon = document.querySelector('.moon-icon');
let sun = document.querySelector('.sun-icon');

sun.addEventListener('click', () => {
    if (localStorage.getItem('theme')) {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
    }
    addLightClass();
})

function addLightClass() {
    const MUTABLE_VARIABLES =  [
        'body',
        '.skill-item',
        '.section-title',
        '.title-container',
        '.price-text',
        '.btn__transparent'];
    const TITLE_CONTAINERS = ['.title-container'];
    const WHITE_VARIABLES = ['.hero__description'];
    const BLACK_VARIABLES = ['h4', 'h3', '.price-description'];

    if (localStorage.getItem('theme')) {
        MUTABLE_VARIABLES.forEach((item) => {
            const elem = document.querySelectorAll(item);
            elem.forEach(el => el.classList.add('light-theme'));
        })
        WHITE_VARIABLES.forEach((item) => {
            const elem = document.querySelector(item);
            elem.classList.add('color__white');
        })
        BLACK_VARIABLES.forEach((itemList) => {
            const elements = document.querySelectorAll(itemList);
            elements.forEach(elem => elem.classList.add('color__black'));
        })
        TITLE_CONTAINERS.forEach((itemsTitle) => {
            const titles = document.querySelectorAll(itemsTitle);
            titles.forEach(e => e.classList.add('title-light-theme'));
        })

        document.querySelector('.footer').classList.add('footer-dark-theme');
        document.querySelector('header').classList.add('footer-dark-theme');
        document.querySelector('.hero').classList.add('footer-dark-theme');
        moon.src = 'assets/svg/moon.svg';
    } else {
        document.querySelector('.hero__description').classList.remove('color__white');

        const el = document.querySelectorAll(['body', '.skill-item', '.section-title', '.price-text', '.btn__transparent']);
        el.forEach(elem => elem.classList.remove('light-theme'));

        const elem = document.querySelectorAll(['h4', 'h3', '.price-description']);
        elem.forEach(elem => elem.classList.remove('color__black'));

        const title = document.querySelectorAll(['.title-container']);
        title.forEach(e => e.classList.remove('title-light-theme'));

        moon.src = 'assets/svg/sun.svg';
    }
}
addLightClass();

let iconBtns = document.querySelectorAll('.theme-icon');
iconBtns.forEach(icon => {
    icon.addEventListener('click', function() {
        iconBtns.forEach(currentIcon => currentIcon.classList.remove('active__icon'));
        this.classList.add('active__icon');
    })
})

/*video*/
const videoPlayer = document.querySelector('.video-player-video');
const videoPlayerCover = document.querySelector('.video-player-cover');
const progressBar = document.querySelector('.video-progressbar');
const currTime = document.querySelector('.video-controls-time');
const durationTime = document.querySelector('.video-controls-duration');
const videoPlayerButton = document.querySelector('.video-player-button');
const playButton = document.querySelector('.video-controls-play');
const volumeButton = document.querySelector('.video-controls-volume');
const volumeScale = document.querySelector('.volume-progressbar');
const titleColor = '#BDAE82';
const videoCotrolsColor = '#C8C8C8';

const videoActive = () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playButton.classList.add("video-controls-pause");
        videoPlayerButton.classList.add("hidden");
        videoPlayerCover.classList.add("hidden");
    } else {
        videoPlayer.pause();
        playButton.classList.remove("video-controls-pause");
        videoPlayerButton.classList.remove("hidden");
        videoPlayerButton.classList.add("open-video");
    }
    if (durationTime.innerHTML == '00:00') {
        durationTime.innerHTML = videoTime(videoPlayer.duration);
    }
}

playButton.addEventListener('click', videoActive);
videoPlayerButton.addEventListener('click', videoActive);
videoPlayer.addEventListener('click', videoActive);

const videoTime = (time) => {
    time = Math.floor(time);
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    let minutesValue = minutes;
    var secondsValue = seconds;
    if (minutes < 10) {
        minutesValue = `0${minutes}`;
    }
    if (seconds < 10) {
        secondsValue = `0${seconds}`;
    }
    return `${minutesValue}:${secondsValue}`;
}

const videoProgress = () => {
    let progress = (Math.floor(videoPlayer.currentTime) / (Math.floor(videoPlayer.duration) / 100));
    progressBar.value = progress;
    currTime.innerHTML = videoTime(videoPlayer.currentTime);
    progressBar.style.background = `linear-gradient(to right, ${titleColor} 0%, ${titleColor} ${progress}%, ${videoCotrolsColor} ${progress}%, ${videoCotrolsColor} 100%)`;
    if (videoPlayer.currentTime === videoPlayer.duration) {
        playButton.classList.remove("video-controls-pause");
    }
}

videoPlayer.addEventListener('timeupdate', videoProgress);

progressBar.addEventListener("input", function () {
    let newTime = videoPlayer.duration * (progressBar.value / 100);
    videoPlayer.currentTime = newTime;
})

const videoChangeVolume = () => {
    let volume = volumeScale.value / 100;
    videoPlayer.volume = volume;
    if (videoPlayer.volume == 0) {
        volumeButton.classList.add("video-controls-mute");
    } else {
        volumeButton.classList.remove("video-controls-mute");
    }
}

const videoMute = () => {
    if (videoPlayer.volume == 0) {
        videoPlayer.volume = volumeScale.value / 100;
        volumeButton.classList.remove("video-controls-mute");
    } else {
        videoPlayer.volume = 0;
        volumeButton.classList.add("video-controls-mute");
    }
}

volumeButton.addEventListener('click', videoMute);
volumeScale.addEventListener('change', videoChangeVolume);

volumeScale.addEventListener('input', function () {
    const value = this.value;
    console.log(value)
    this.style.background = `linear-gradient(to right, ${titleColor} 0%, ${titleColor} ${value}%, ${videoCotrolsColor} ${value}%, ${videoCotrolsColor} 100%)`
})

const videoWrap = document.querySelector('.video-wrap');
const videoFullscreenButton = document.querySelector('.video-controls-fullscreen');

const openFullscreen = () => {
    if (document.fullscreenElement === null) {
        videoWrap.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

videoFullscreenButton.addEventListener('click', openFullscreen);

document.addEventListener("fullscreenchange", () => {
    videoFullscreenButton.classList.toggle("active");
});

})