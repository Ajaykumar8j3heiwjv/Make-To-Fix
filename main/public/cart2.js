document.addEventListener("DOMContentLoaded", function () {
    const otpPopup = document.querySelector(".otp-popup");
    const closeOtpBtn = document.querySelector(".close-btn");
    const otpInputs = document.querySelectorAll(".otp-inputs input");
    const resendBtn = document.getElementById("resend");
    const timerDisplay = document.getElementById("timer");
    const loginBtn = document.querySelector(".login-btn");

    let timer = 10;
    let timerInterval;

    // Show OTP popup (Remove 'hidden' class)
    function showOtpPopup() {
        otpPopup.classList.remove("hidden");
        startTimer();
    }

    // Close OTP popup
    closeOtpBtn.addEventListener("click", () => {
        otpPopup.classList.add("hidden");
        clearInterval(timerInterval);
    });

    // OTP Input Auto-Focus with Backspace Support
    otpInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
            checkOtpFilled();
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                if (input.value) {
                    input.value = ""; // Clear current input
                } else if (index > 0) {
                    otpInputs[index - 1].focus();
                    otpInputs[index - 1].value = ""; // Clear previous input
                }
                checkOtpFilled();
            }
        });
    });

    // Enable login button when all OTP inputs are filled
    function checkOtpFilled() {
        const allFilled = [...otpInputs].every(input => input.value.trim() !== "");
        loginBtn.disabled = !allFilled;
    }

    // Resend OTP Timer
    function startTimer() {
        timer = 10;
        timerDisplay.textContent = `00:${timer}`;
        resendBtn.style.pointerEvents = "none";
        resendBtn.style.opacity = "0.5";

        timerInterval = setInterval(() => {
            timer--;
            timerDisplay.textContent = `00:${timer < 10 ? "0" + timer : timer}`;
            if (timer <= 0) {
                clearInterval(timerInterval);
                resendBtn.style.pointerEvents = "auto";
                resendBtn.style.opacity = "1";
            }
        }, 1000);
    }

    // Resend OTP
    resendBtn.addEventListener("click", () => {
        startTimer();
    });

    // Show OTP popup when needed (Call this function when triggering the popup)
    showOtpPopup();
});
