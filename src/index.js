import about from "./modules/about";
import menu from "./modules/menu";
import contact from "./modules/contact";
const content = document.querySelector('#content');
about(content);

const aboutTab = document.querySelector('.about-tab');
const menuTab = document.querySelector('.menu-tab');
const contactTab = document.querySelector('.contact-tab');

aboutTab.addEventListener("click", function() {
    loadTab(about);
});
menuTab.addEventListener("click", function() {
    loadTab(menu);
});
contactTab.addEventListener("click", function() {
    loadTab(contact);
});

function loadTab(tab) {
    content.innerHTML = "";
    tab(content);
};