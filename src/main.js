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
    
    // Disable AOS completely on mobile for better performance
    if (typeof AOS !== 'undefined' && !isMobile) {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: true,
            offset: 100
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
    
    // Lazy load confetti only on desktop
    if (!isMobile) {
        setTimeout(() => initConfetti(), 3000);
    }
});