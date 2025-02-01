document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');

        // Get the absolute path of each link
        const linkPath = new URL(link.href).pathname;

        // If the link's path matches the current path, add active class
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
