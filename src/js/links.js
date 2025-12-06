export const linksSection = () => {
    // Get current URL and create base URL (without query parameters)
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('?')[0];
    
    // Update base link
    const baseLinkCode = document.getElementById('base-link-code');
    if (baseLinkCode) {
        baseLinkCode.textContent = baseUrl;
    }
    
    // Update personal links with examples
    const personalLinkCode = document.getElementById('personal-link-code');
    if (personalLinkCode) {
        personalLinkCode.textContent = `${baseUrl}?to=Husain
${baseUrl}?to=Budi
${baseUrl}?to=Siti`;
    }
    
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const targetId = button.dataset.copyTarget;
            const codeElement = document.getElementById(targetId);
            
            if (!codeElement) return;
            
            const textToCopy = codeElement.textContent;
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Add copied class for visual feedback
                button.classList.add('copied');
                
                // Change icon temporarily
                const icon = button.querySelector('i');
                const originalClass = icon.className;
                icon.className = 'bx bx-check';
                
                // Change button text
                const buttonText = button.querySelector('span');
                const originalText = buttonText.textContent;
                buttonText.textContent = 'Copied!';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    button.classList.remove('copied');
                    icon.className = originalClass;
                    buttonText.textContent = originalText;
                }, 2000);
                
            } catch (error) {
                console.error('Failed to copy:', error);
                
                // Fallback: select text
                const range = document.createRange();
                range.selectNode(codeElement);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                
                try {
                    document.execCommand('copy');
                    button.classList.add('copied');
                    const buttonText = button.querySelector('span');
                    const originalText = buttonText.textContent;
                    buttonText.textContent = 'Copied!';
                    setTimeout(() => {
                        button.classList.remove('copied');
                        buttonText.textContent = originalText;
                    }, 2000);
                } catch (err) {
                    console.error('Fallback copy failed:', err);
                }
            }
        });
    });
};

