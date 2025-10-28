// Simple form validation and feedback
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');

    if (!name || !email || !message) {
        status.textContent = "⚠️ Please fill in all fields.";
        status.style.color = "red";
        return;
    }

    status.textContent = "⏳ Sending message...";
    status.style.color = "#ff007b";

    setTimeout(() => {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "green";
        document.getElementById('contactForm').reset();
    }, 1500);
});
