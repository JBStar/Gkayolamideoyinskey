// Image rotation for hero section
const heroImg = document.getElementById("heroImg");
const heroImages = [
    "prem.avif",
    "ox-street-BWPqHZBhMVA-unsplash.jpg",
    "premium_photo-1671718110912-2bf5ce67d504.avif",
    "photo-1712208848418-f35ed402762f.avif",
    " photo-1700676195086-81b936390de4.avif",
    "photo.avif"
];

let current = 0;
setInterval(() => {
    current = (current + 1) % heroImages.length;
    heroImg.src = heroImages[current];
}, 4000);


const products = document.querySelectorAll('.product');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupPrice = document.getElementById('popup-price');
const closeBtn = document.querySelector('.close');

products.forEach(product => {
    product.addEventListener('click', () => {
        const imgSrc = product.querySelector('img').src;
        const title = product.querySelector('h3').textContent;
        const price = product.querySelector('p').textContent;

        popupImg.src = imgSrc;
        popupTitle.textContent = title;
        popupPrice.textContent = price;

        popup.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});



// Animate elements when page loads
window.addEventListener('load', () => {
    const title = document.querySelector('.animate-title');
    const texts = document.querySelectorAll('.animate-text');

    // Fade in title first
    setTimeout(() => {
        title.style.opacity = 1;
        title.style.transform = 'translateY(0)';
    }, 300);

    // Then each paragraph one after another
    texts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = 1;
            text.style.transform = 'translateY(0)';
        }, 700 + index * 600);
    });
});

// Optional: glowing text on hover for elegance
const textBox = document.querySelector('.text-box');
textBox.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = textBox.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    textBox.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255, 230, 242, 0.9), #fff)`;
});

textBox.addEventListener('mouseleave', () => {
    textBox.style.background = 'rgba(255, 255, 255, 0.85)';
});