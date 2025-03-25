document.addEventListener("DOMContentLoaded", () => {
    // Add smooth scroll behavior and active highlighting to section links
    const sectionLinks = document.querySelectorAll('a[href^="#"]');
    
    sectionLinks.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        sectionLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                sectionLinks.forEach((link) => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});
