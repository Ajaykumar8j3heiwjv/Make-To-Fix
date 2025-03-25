document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");
    const popupSection = document.querySelector(".popup-section");
    const closeBtn = document.querySelector(".close-btn");
    const phoneInput = document.getElementById("phoneNumber");
    const verifyBtn = document.querySelector(".verify-btn");

    document.addEventListener('DOMContentLoaded', function() {
        function displayCartItems() {
            const cartItemsContainer = document.getElementById('cart-items');
            const itemTotalContainer = document.getElementById('item-total');
            const totalAmountContainer = document.getElementById('total-amount');
            const amountToPayContainer = document.getElementById('amount-to-pay');
            
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartItemsContainer.innerHTML = '';
            let totalPrice = 0;

            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `<p>${item.name}</p><p>${item.price}</p>`;
                cartItemsContainer.appendChild(itemElement);
                totalPrice += parseInt(item.price.replace('₹', ''));
            });

            itemTotalContainer.textContent = `₹${totalPrice}`;
            totalAmountContainer.textContent = `₹${totalPrice + 59}`; // Assuming a fixed tax/fee of 59
            amountToPayContainer.textContent = `₹${totalPrice + 59}`;
        }

        displayCartItems();

        // Update cart when the page is shown (in case it was updated in another tab)
        window.addEventListener('pageshow', displayCartItems);
    });
    // Open popup when clicking login
    loginBtn.addEventListener("click", function () {
        popupSection.classList.add("show-popup");
    });

    // Close popup when clicking close (×)
    closeBtn.addEventListener("click", function () {
        popupSection.classList.remove("show-popup");
    });

    // Enable verification button when phone number is entered
    phoneInput.addEventListener("input", function () {
        if (phoneInput.value.length >= 10) {
            verifyBtn.classList.add("active");
            verifyBtn.disabled = false;
        } else {
            verifyBtn.classList.remove("active");
            verifyBtn.disabled = true;
        }
    });
});
