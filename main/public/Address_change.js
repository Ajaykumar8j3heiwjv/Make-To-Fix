// DOM Elements
const changeAddressBtn = document.getElementById('changeAddressBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const saveAddressBtn = document.getElementById('saveAddressBtn');
const addressModal = document.getElementById('addressModal');
const tipButtons = document.querySelectorAll('.tip-btn');
const quantityBtns = document.querySelectorAll('.quantity-btn');
const quantityDisplay = document.querySelector('.quantity');

// Initialize quantity
let quantity = 1;

// Open address modal
changeAddressBtn.addEventListener('click', () => {
    addressModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

// Close address modal
function closeModal() {
    addressModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

closeModalBtn.addEventListener('click', closeModal);
saveAddressBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
addressModal.addEventListener('click', (e) => {
    if (e.target === addressModal) {
        closeModal();
    }
});

// Tip button selection
tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tipButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // If custom is selected, you could show a custom input field here
        if (button.dataset.amount === 'custom') {
            // Implementation for custom amount input
            console.log('Custom amount selected');
        }
    });
});

// Quantity buttons
quantityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('minus') && quantity > 1) {
            quantity--;
        } else if (btn.classList.contains('plus')) {
            quantity++;
        }
        
        // Update quantity display
        quantityDisplay.textContent = quantity;
    });
});

// Initialize the modal state
document.addEventListener('DOMContentLoaded', () => {
    // Set the default tip amount
    const defaultTipBtn = document.querySelector('.tip-btn[data-amount="100"]');
    if (defaultTipBtn) {
        defaultTipBtn.classList.add('active');
    }
});