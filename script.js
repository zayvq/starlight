document.addEventListener("DOMContentLoaded", () => {
    const background = document.getElementById('background');

    // Create the animated background stars
    function createBackgroundStars() {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDuration = `${2 + Math.random() * 3}s`;
            background.appendChild(star);
        }
    }

    // Redirect Safety Button
    const safetyButton = document.getElementById('safety-button');
    safetyButton.addEventListener('click', () => {
        window.location.href = 'https://google.com';
    });

    // Initialize background
    createBackgroundStars();
});