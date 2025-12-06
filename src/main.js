import {home} from "./js/home.js";
import {bride} from "./js/bride.js";
import {time} from "./js/time.js";
import {galeri} from "./js/galeri.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";
import {shareButtons} from "./js/share.js";
import {initConfetti} from "./js/confetti.js";

// Optimized loading for mobile
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768;
    
    // Lightweight AOS for mobile
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: isMobile ? 600 : 1000,
            easing: 'ease-out',
            once: true,
            disable: isMobile ? false : false,
            offset: isMobile ? 50 : 100
        });
    }

    welcome();
    navbar();
    home();
    bride();
    time();
    galeri();
    wishas();
    shareButtons();
    
    // Lazy load confetti only on desktop or after delay
    if (!isMobile) {
        setTimeout(() => initConfetti(), 2000);
    }
});