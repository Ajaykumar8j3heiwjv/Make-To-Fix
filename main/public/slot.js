document.addEventListener('DOMContentLoaded', function() {
    // Select first date option by default
    const dateOptions = document.querySelectorAll('.date-option');
    dateOptions[0].classList.add('selected');
    
    // Handle date selection
    dateOptions.forEach(option => {
        option.addEventListener('click', function() {
            dateOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Handle time selection
    const timeOptions = document.querySelectorAll('.time-option');
    timeOptions.forEach(option => {
        option.addEventListener('click', function() {
            timeOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Handle checkout button click
    const checkoutButton = document.querySelector('.checkout-button');
    checkoutButton.addEventListener('click', function() {
        const selectedDate = document.querySelector('.date-option.selected');
        const selectedTime = document.querySelector('.time-option.selected');
        
        if (selectedDate && selectedTime) {
            const date = selectedDate.getAttribute('data-date');
            const time = selectedTime.getAttribute('data-time');
            alert(`Booking confirmed for date: ${date} at time: ${time}`);
        }
    });
});