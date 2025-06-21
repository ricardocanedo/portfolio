// Scrollspy custom 
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function onScroll() {
        const headerHeight = 76;
        let scrollPos = window.scrollY + headerHeight;
        let currentSection = '';

        // Detecta a seção atual
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
});