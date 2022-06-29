import './styles/fonts.css';
import './styles/style.css';
import 'swiper/css/bundle';
import animate from 'animateplus';
import Swiper, { Navigation, Pagination, Parallax } from 'swiper';
import * as svgImg from './mediaFiles';


const body = document.querySelector('body');

function createElement(elementType, appendChild, atribute, innerText, innerHtml) {
    if (elementType) {
        const element = document.createElement(elementType);
        if (innerText) { element.innerText = innerText };
        if (innerHtml) { element.innerHtml = innerHtml };
        if (atribute) {Object.keys(atribute).forEach(key => {element.setAttribute(`${key}`, atribute[key])});};
        if (appendChild) { appendChild.appendChild(element) };
        return element;
    }
};

function createImg(path, appendChild, atribute, width, height) {
    const image = new Image(width, height)
    image.src = path
    appendChild.appendChild(image)
    if (atribute) {Object.keys(atribute).forEach(key => {image.setAttribute(`${key}`, atribute[key])});};
};

function navbar() {
    const navbar = createElement('nav', body, { class: 'navbar' });
    const companyLogo = createElement('a', navbar, { class: 'companyLogo', href:'index.html'});
    const companyEmblem = createImg(svgImg.Emblem, companyLogo);
    const companyName = createElement('p', companyLogo, { class: 'companyName' }, 'JE Restaurant');
    const ul = createElement('ul', navbar, { class: 'navBtnContainer' });
    const home = createElement('li', ul, { class: 'homeItem' });
    const about = createElement('li', ul, { class: 'aboutItem' });
    const contact = createElement('li', ul, { class: 'contactItem' });
    const homeBtn = createElement('button', home, { class: 'homeBtn' }, 'HOME');
    const aboutBtn = createElement('button', about, { class: 'aboutBtn' }, 'ABOUT');
    const contactBtn = createElement('button', contact, { class: 'contactBtn' }, 'CONTACT');
    
};

function section1() {
    function descriptionTemplate(appendChild, title, descriptionText) {
        const description = createElement('div', appendChild, { class: 'description' });
        const descriptionTitle = createElement('h2', description, { class: "descriptionTitle", "data-swiper-parallax" :"-800"}, title);
        const descriptionLine = createElement('hr', description);
        const descriptionContent = createElement('p', description, { class: 'descriptionContent', "data-swiper-parallax" :"-400"}, descriptionText);
    }

    const section1 = createElement('section', body, { class: 'homeSection' });
    const swiperContainer = createElement('div', section1, { class: 'swiper' });
    const swiperWrapper = createElement('div', swiperContainer, { class: 'swiper-wrapper' });
    const swiperSlider1 = createElement('div', swiperWrapper, { class: 'swiper-slide' });
    const swiperSlider2 = createElement('div', swiperWrapper, { class: 'swiper-slide' });
    const swiperSlider3 = createElement('div', swiperWrapper, { class: 'swiper-slide' });
    const swiperSlider4 = createElement('div', swiperWrapper, { class: 'swiper-slide' });
    const swiperPagination = createElement('div', swiperContainer, { class: 'swiper-pagination' });
    const swiperPrevBtn = createElement('div', swiperContainer, { class: 'swiper-button-prev' });
    const swiperNextBtn = createElement('div', swiperContainer, { class: 'swiper-button-next' });

    const hamburgerImg = createImg(svgImg.hamburguers, swiperSlider1, { class: 'hamburgerImg', "data-swiper-parallax" :"-200" }, 530,333);
    const pizzaImg = createImg(svgImg.pizza, swiperSlider2, { class: 'pizzaImg', "data-swiper-parallax" :"-200" }, 530,333);
    const potatoesImg = createImg(svgImg.friesPotatoes, swiperSlider3, { class: 'pizzaImg', "data-swiper-parallax" :"-200" }, 530,333);
    const hotDogImg = createImg(svgImg.hotDog, swiperSlider4, { class: 'pizzaImg', "data-swiper-parallax" :"-200" }, 530, 333);
    
    const swiperSlider1Description = descriptionTemplate(swiperSlider1, 'HAMBURGUER', 'A rich, big and juicy burger that will melt in your mouth, with the finest ingredients and beef of the highest quality. Just let yourself go and enjoy life there is only one, you probably think this is just a hamburger, but it really is the hamburger.');
    const swiperSlider2Description = descriptionTemplate(swiperSlider2, 'PIZZA', 'Simple and tempting, its essence is the perfect combination of ingredients: bread dough, tomato sauce and mozzarella. From this base, the combinations are endless. Coming from Italy, more precisely from the Naples region, pizza is consumed all over the world and leads the gastronomic deliveries category in most countries. ');
    const swiperSlider3Description = descriptionTemplate(swiperSlider3, 'FRENCH-FRIES', 'We also have the possibility of ordering separately the fries by grams and by kilos, why not? These culinary wonders are exquisite, easy to eat, easy to transport, you can eat them wherever and whenever you want. In this place we prepare each potato with dedication and love so that they reach your stomach in the most pleasant way possible.');
    const swiperSlider4Description = descriptionTemplate(swiperSlider4, 'HOT-DOG', 'The famous and beloved hot dog, who hasn\'t eaten one on the way to work, home or any other situation? These little delicacies can come with an infinite number of things and will always taste delicious. Simply one of the many masterpieces.');
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Parallax],
        parallax:true,
        speed: 800,
        loop:true,
        spaceBetween: 100,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
    
    animate({
        elements: swiperContainer,
        duration: 1000,
        delay: 100,
        transform: ["scale(0.8)", "scale(1)"]
    })
};

function section2() {
    const section2 = createElement('section', body, { class: 'aboutSection' });
    const info1 = createElement('div', section2, { class: 'info1' });
    const info1Title = createElement('h2', info1, { class: 'info1Title' }, 'WHO ARE WE?');
    const info1Description = createElement('p', info1, { class: 'info1Description' }, 'We are "JustEnjoy", a fast food restaurant, where we offer exquisite dishes, prepared with the highest culinary quality, that delight with the best attention and flavor, the palate of locals and foreigners, in a cozy and safe environment, where trust, responsibility, and punctuality are our letter of introduction.');
    const info2 = createElement('div', section2, { class: 'info2' });
    const info2Title = createElement('h2', info2, { class: 'info2Title' }, 'WHERE WE ARE GOING');
    const info2Description = createElement('p', info2, { class: 'info2Description' }, 'Consolidate as the best fast food restaurant in the region, to be recognized for the quality of food and products we offer, projecting us to the global market, improving every day our service, with a better physical and human infrastructure that meets the needs of our customers.');
};

function section3() {
    const section3 = createElement('section',body, { class: 'contactSection' });
    const contactUsTitle = createElement('h2', section3, { class: 'contactUsTitle' }, 'CONTACT US');
    const form = createElement('form', section3, { class: 'form' });
    const nameInput = createElement('input', form, { type: 'text', placeholder: 'Name', class: 'nameInput' });
    const lastNameInptu = createElement('input', form, { type: 'text', placeholder: 'Last name', class: 'lastNameInput' });
    const phoneInput = createElement('input', form, { type: 'tel', placeholder: 'Phone number', class: 'phoneInput' });
    const emailInput = createElement('input', form, { type: 'email', placeholder: 'Email', class: 'emailImput' });
    const subjectInput = createElement('textarea', form, { type: 'text', placeholder: 'Subject', class: 'subjectInput' });
    const submit = createElement('input', form, { type: 'submit', class: 'submit' }, 'Send');
};

function footer() {
    const footer = createElement('footer', body, { class: 'footer' });
};

navbar();
section1();
section2();
section3();