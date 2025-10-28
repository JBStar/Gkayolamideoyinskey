
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggle.classList.toggle('toggle');
});







document.getElementById('newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('✨ Thank you for joining BossLady Club!');
    e.target.reset();
});


const fashionItems = [
    {
        img: "premium_photo-1661265889377-d949c214e9f7.avif",
        title: "Luxury Red Dress",
        desc: "Elegance and power in one outfit. The BossLady collection redefines modern beauty with bold colors and graceful lines."
    },
    {
        img: "prem.avif",
        title: "Street Chic Jacket",
        desc: "Confidence meets comfort with our premium leather collection. Style that dominates every street corner."
    },
    {
        img: "premium_photo-1744312220261-200237b9166b.avif",
        title: "Golden Glamour Heels",
        desc: "Step into your spotlight with stunning golden heels, designed to make you shine anywhere, anytime."
    },
    {
        img: "photo-1552419272-b0d8e736ea2d.avif",
        title: "Casual Bold Look",
        desc: "Everyday wear that makes a statement. Because you don’t need a reason to look fabulous."
    }
];

let currentIndex = 0;
const imageEl = document.getElementById("fashionImage");
const titleEl = document.getElementById("fashionTitle");
const descEl = document.getElementById("fashionDesc");

function changeFashionItem() {
    // Fade out current image
    imageEl.classList.add("fade-out");

    setTimeout(() => {
        // Change image and text
        currentIndex = (currentIndex + 1) % fashionItems.length;
        const currentItem = fashionItems[currentIndex];

        imageEl.src = currentItem.img;
        titleEl.textContent = currentItem.title;
        descEl.textContent = currentItem.desc;

        // Fade in new image
        imageEl.classList.remove("fade-out");
        imageEl.classList.add("fade-in");

        setTimeout(() => {
            imageEl.classList.remove("fade-in");
        }, 1000);
    }, 1000);
}

// Change every 5 seconds
setInterval(changeFashionItem, 5000);

