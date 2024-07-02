import './styles.css';
import {menuHTML} from './tabs/menu.js'
import {homeHTML} from './tabs/home.js'
import {aboutHTML} from './tabs/about.js'

const navLinks = document.querySelectorAll('.nav-link');
const container = document.querySelector('#container')
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        navLinks.forEach((link) => {link.classList.remove("current-page")})
        e.target.classList.add("current-page");
        switch (e.target.textContent) {
            case "Home":
                container.innerHTML = homeHTML;
                break;
            case "Menu":
                container.innerHTML = menuHTML;
                break;
            case "About Us":
                container.innerHTML = aboutHTML;
                break;
        }
    })
})
