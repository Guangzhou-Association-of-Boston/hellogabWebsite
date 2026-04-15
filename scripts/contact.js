document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Prevent traditional form submission behavior
            e.preventDefault();
            
            // Retrieve input values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Construct the email body
            const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            
            // Open the default mail client using mailto:
            const mailtoLink = `mailto:bai2388@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
            
            window.location.href = mailtoLink;
        });
    }
});