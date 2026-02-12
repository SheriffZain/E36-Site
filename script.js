document.addEventListener('DOMContentLoaded', () => {
    const revButton = document.getElementById('revButton');
    const carImage = document.getElementById('main-car');

    // Simple animation when the button is clicked
    revButton.addEventListener('click', () => {
        // Shake animation to simulate "revving"
        carImage.style.transform = 'scale(1.05) translateY(-10px)';
        
        revButton.innerText = "VROOM VROOM!";
        revButton.style.borderColor = "#ff0000";

        setTimeout(() => {
            carImage.style.transform = 'scale(1) translateY(0)';
            revButton.innerText = "Start Engine";
            revButton.style.borderColor = "#0066bf";
        }, 500);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
