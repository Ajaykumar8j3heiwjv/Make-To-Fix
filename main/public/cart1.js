document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");
    const popupSection = document.querySelector(".popup-section");
    const closeBtn = document.querySelector(".close-btn");
    const phoneInput = document.getElementById("phoneNumber");
    const verifyBtn = document.querySelector(".verify-btn");

    // Quantity Controls
    const quantityElement = document.querySelector(".quantity-control span");
    const decreaseBtn = document.querySelector(".quantity-control button:first-child");
    const increaseBtn = document.querySelector(".quantity-control button:last-child");

    let quantity = parseInt(quantityElement.textContent); // Get current quantity

    increaseBtn.addEventListener("click", function () {
        quantity++;
        quantityElement.textContent = quantity;
    });

    decreaseBtn.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
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
