export const shareButtons = () => {
    const shareButtons = document.querySelectorAll('.share-btn');
    const currentUrl = window.location.href;
    const pageTitle = document.title || 'Undangan Pernikahan';

    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.dataset.platform;
            const shareText = `Undangan Pernikahan - ${pageTitle}`;

            switch (platform) {
                case 'whatsapp':
                    window.open(
                        `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`,
                        '_blank'
                    );
                    break;
                case 'facebook':
                    window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
                        '_blank'
                    );
                    break;
                case 'twitter':
                    window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
                        '_blank'
                    );
                    break;
                case 'copy':
                    navigator.clipboard.writeText(currentUrl).then(() => {
                        const originalIcon = button.querySelector('i').className;
                        button.querySelector('i').className = 'bx bx-check';
                        button.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
                        button.style.color = '#fff';
                        
                        setTimeout(() => {
                            button.querySelector('i').className = originalIcon;
                            button.style.background = '';
                            button.style.color = '';
                        }, 2000);
                    }).catch(err => {
                        console.error('Failed to copy:', err);
                    });
                    break;
            }
        });
    });
};

