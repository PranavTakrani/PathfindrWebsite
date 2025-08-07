function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('span:last-child');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-content').forEach(item => {
        if (item !== content && !item.classList.contains('hidden')) {
            item.classList.add('hidden');
            item.previousElementSibling.querySelector('span:last-child').style.transform = 'rotate(0deg)';
        }
    });
    
    content.classList.add('faq-content');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header effects on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('glass-effect', 'shadow-lg');
    } else {
        header.classList.remove('glass-effect', 'shadow-lg');
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
