// Animation removed as requested
console.log("Maccabee's Mission loaded");

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');

        // Start with first item open, rest closed
        if (index !== 0) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            if (!isActive) {
                // Close all items first
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });

                // Open the clicked item
                item.classList.add('active');
            }
        });
    });
});

console.log('The Maccabee\'s Mission FAQ loaded successfully');
