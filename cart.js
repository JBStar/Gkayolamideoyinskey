const cartIcon = document.getElementById('cart-icon');
const cart = document.getElementById('cart');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const buyButtons = document.querySelectorAll('.buy-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const paymentPopup = document.getElementById('payment-popup');
const closePayment = document.getElementById('close-payment');
const paymentForm = document.getElementById('payment-form');

let cartData = [];

buyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const product = btn.closest('.product');
        const title = product.querySelector('h3').textContent;
        const priceText = product.querySelector('p').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        const imgSrc = product.querySelector('img').src;

        const existingItem = cartData.find(item => item.title === title);
        if (existingItem) {
            alert("Item already in cart!");
            return;
        }

        cartData.push({ title, price, imgSrc });
        updateCart();
        openCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cartData.forEach((item, index) => {
        total += item.price;

        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.title}">
      <div class="item-details">
        <h4>${item.title}</h4>
        <p>$${item.price.toFixed(2)}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
        cartItems.appendChild(div);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartCount.textContent = cartData.length;

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const i = e.target.dataset.index;
            cartData.splice(i, 1);
            updateCart();
        });
    });
}

function openCart() {
    cart.classList.add('open');
}
function closeCartMenu() {
    cart.classList.remove('open');
}
cartIcon.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartMenu);

/* OPEN PAYMENT FORM */
checkoutBtn.addEventListener('click', () => {
    if (cartData.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    paymentPopup.classList.add('active');
});


checkoutBtn.addEventListener('click', () => {
    if (cartData.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Build the order summary text
    const summary = cartData.map(item => `${item.title} - $${item.price}`).join("\n");
    const total = cartData.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("order-summary").value = `${summary}\n\nTotal: $${total.toFixed(2)}`;

    paymentPopup.classList.add('active');
});



/* CLOSE PAYMENT */
closePayment.addEventListener('click', () => {
    paymentPopup.classList.remove('active');
});

/* HANDLE PAYMENT */
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("🎉 Payment Successful! Thank you for shopping with BossLady Fashion.");
    paymentPopup.classList.remove('active');
    cartData = [];
    updateCart();
    closeCartMenu();
});