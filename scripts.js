document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');

    function animateOnScroll() {
        services.forEach(service => {
            const rect = service.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const animation = service.getAttribute('data-animate');
                service.classList.add('animate__animated', animation);
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run it once on load in case some elements are already in view
});
// JavaScript Document