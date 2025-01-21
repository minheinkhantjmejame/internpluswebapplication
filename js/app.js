document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Highlight the active link based on URL or user click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active')); // Remove active class from all links
            link.classList.add('active'); // Add active class to clicked link
        });

        // Optionally set active link based on current URL
        if (link.href === window.location.href) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        }
    });
});
