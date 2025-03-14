

// Array of image sources, titles, and background colors
const images = [
    { src: 'assets/img/icecream-hero-1.png', title: 'Strawberry Cone', bgColor: '#BE1241', bgColor2: '#F64776' },
    { src: 'assets/img/icecream-hero-2.png', title: 'Blueberry Cone', bgColor: '#236CDA', bgColor2: '#478DF6' },
    { src: 'assets/img/icecream-hero-3.png', title: 'Chocolate Cone', bgColor: '#A06D55', bgColor2: '#E0BDB0' },
    { src: 'assets/img/icecream-hero-4.png', title: 'Vanilla Cone', bgColor: '#2A9949', bgColor2: '#47F66E' }
];

// Function to change hero image, title, and background color
function changeHeroContent(index) {
    const heroImage = document.getElementById('heroImage');
    const heroTitle = document.getElementById('heroTitle');
    const heroSection = document.querySelector('.hero-section');

    // Animate image and title out
    heroImage.style.transform = 'scale(0.9)';
    heroImage.style.opacity = '0';
    heroTitle.style.opacity = '0';

    setTimeout(() => {
        // Change content
        heroImage.src = images[index].src;
        heroTitle.textContent = images[index].title;
        heroSection.style.background = `radial-gradient(circle, ${images[index].bgColor} 0%, ${images[index].bgColor2} 100%)`;

        // Animate image and title in
        heroImage.style.transform = 'scale(1)';
        heroImage.style.opacity = '1';
        heroTitle.style.opacity = '1';
    }, 500); // Match the transition duration
}

// Add event listeners to squares
document.querySelectorAll('.square').forEach((square, index) => {
    square.addEventListener('click', () => {
        changeHeroContent(index);
    });
});