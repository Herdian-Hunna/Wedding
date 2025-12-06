export const createConfetti = () => {
    const confettiCount = 50;
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];
    
    // Add confetti animation to global CSS if not exists
    if (!document.querySelector('#confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    const createParticle = () => {
        const particle = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 3 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 0.5;
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${left}vw;
            top: -10px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            pointer-events: none;
            z-index: 9999;
            opacity: ${Math.random() * 0.5 + 0.5};
            animation: confettiFall ${duration}s linear ${delay}s forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, (duration + delay + 1) * 1000);
    };
    
    // Create confetti particles
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => createParticle(), i * 50);
    }
};

// Trigger confetti on welcome button click
export const initConfetti = () => {
    const welcomeButton = document.querySelector('.welcome button');
    if (welcomeButton) {
        welcomeButton.addEventListener('click', () => {
            setTimeout(() => {
                createConfetti();
            }, 1000);
        });
    }
};

