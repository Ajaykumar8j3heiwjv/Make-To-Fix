document.addEventListener("DOMContentLoaded", function() {
    const blogCard = document.querySelector(".service-cards");
    const articles = blogCard.children;
    const nextBtn = document.querySelector(".nexts");
    const prevBtn = document.querySelector(".prevs");
    let index = 0; 
    const dots = document.querySelectorAll(".dot"); // Assuming dots have a class 'dot'

    function updateView() {
        blogCard.style.transform = `translateX(-${index * 280}px)`;
        updateDots(); // Update dots whenever the view changes
    }

    function updateDots() {
        dots.forEach((dot, idx) => {
            dot.style.backgroundColor = '#ccc'; // Reset all dots to default color
        });
        dots[index].style.backgroundColor = '#000080'; // Change color for active dot
    }

    nextBtn.addEventListener("click", function() {
        if (index >= articles.length - 1) {
            index = 0;
        } else {
            index++;
        }
        updateView();
    });

    prevBtn.addEventListener("click", function() {
        if (index <= 0) {
            index = articles.length - 1;
        } else {
            index--;
        }
        updateView();
    });

    // Touch event listeners for swipe functionality
    let startX = 0;
    let endX = 0;

    blogCard.addEventListener("touchstart", function(event) {
        startX = event.touches[0].clientX;
    });

    blogCard.addEventListener("touchmove", function(event) {
        endX = event.touches[0].clientX;
    });

    blogCard.addEventListener("touchend", function() {
        updateView(); // Ensure the view is updated after a swipe

        if (startX > endX + 50) { // Swiped left
            if (index < articles.length - 1) {
                index++;
            } else {
                index = 0;
            }

            // Swiped left
            if (index < articles.length - 1) {
                index++;
            } else {
                index = 0;
            }
            updateView();
        } else if (startX < endX - 50) { // Swiped right
            if (index > 0) {
                index--;
            } else {
                index = articles.length - 1;
            }

            // Swiped right
            if (index > 0) {
                index--;
            } else {
                index = articles.length - 1;
            }
            updateView();
        }
    });

});
