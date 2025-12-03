// Animation removed as requested
console.log("Maccabee's Mission loaded");

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        // Start with first item open, rest closed
        if (index !== 0) {
            answer.style.maxHeight = '0';
            item.classList.remove('active');
        } else {
            // For the first item, set padding first, then maxHeight
            answer.style.padding = '0 1.75rem 1.5rem';
            answer.style.maxHeight = answer.scrollHeight + 'px';
            item.classList.add('active');
        }

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(faqItem => {
                const faqAnswer = faqItem.querySelector('.faq-answer');
                faqAnswer.style.maxHeight = '0';
                // Keep padding consistent for smooth animation
                faqAnswer.style.padding = '0 1.75rem 0';
                faqItem.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                // First set padding, then calculate and set maxHeight
                answer.style.padding = '0 1.75rem 1.5rem';
                // Use setTimeout to ensure padding is applied before calculating scrollHeight
                setTimeout(() => {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }, 10);
                item.classList.add('active');
            }
        });
    });
});

console.log('The Maccabee\'s Mission FAQ loaded successfully');
