import {home} from "./js/home.js";
import {bride} from "./js/bride.js";
import {time} from "./js/time.js";
import {galeri} from "./js/galeri.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";
import {shareButtons} from "./js/share.js";
import {initConfetti} from "./js/confetti.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });

    welcome();
    navbar();
    home();
    bride()
    time();
    galeri();
    wishas();
    shareButtons();
    initConfetti();
});