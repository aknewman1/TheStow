// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle CTA button click
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                // Focus on first form field after scroll
                setTimeout(() => {
                    const firstInput = contactSection.querySelector('input');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 1000);
            }
        });
    }

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                property: document.getElementById('property').value,
                message: document.getElementById('message').value
            };

            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            console.log('Form submitted:', formData);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Function to show success message
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('.submit-button');
    
    // Create success message element
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = 'Thank you for your interest. We will be in touch soon.';
    successMsg.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        background-color: #D4AF37;
        color: #000;
        text-align: center;
        font-family: var(--font-sans);
        font-size: 0.875rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    `;
    
    // Insert after form
    form.parentNode.insertBefore(successMsg, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successMsg.remove();
    }, 5000);
}

// Add scroll reveal animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});



