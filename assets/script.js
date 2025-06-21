document.addEventListener('DOMContentLoaded', function() {
    // Scrollspy custom implementation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function onScroll() {
        const headerHeight = 76;
        let scrollPos = window.scrollY + headerHeight;
        let currentSection = '';

        // detects the current section based on scroll position
        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                currentSection = section.getAttribute('id');
            }
        });

        // if current section is not found, default to 'home'
        if (!currentSection) {
            currentSection = 'home';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if ((currentSection === 'home' && (href === '#' || href === '#home')) || href === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); 

    // smooth scroll with offset for fixed header
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = 76;
                    const sectionTop = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: sectionTop - headerHeight + 1, // +1 to ensure the section is fully visible
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});