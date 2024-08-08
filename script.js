window.addEventListener('DOMContentLoaded', () => {
    const introSection = document.querySelector('.intro-section');
    const title = document.querySelector('.title');
    const fields = document.querySelectorAll('.field');
    const subtexts = document.querySelectorAll('.subtext');

    const handleScroll = () => {
        let scrollY = window.scrollY;

        // Parallax effect on background image
        introSection.style.filter = `grayscale(${Math.min(scrollY / 10, 50)}%)`;

        // Fade out the title as we scroll
        title.style.opacity = 1 - Math.min(scrollY / 300, 1);
        // Reveal fields on scroll
        fields.forEach((field) => {
            if (scrollY > field.offsetTop - window.innerHeight + 100) {
                field.classList.add('visible');
            } else {
                field.classList.remove('visible');
            }
        });
        subtexts.forEach((subtext) => {
            if (scrollY > subtext.offsetTop - window.innerHeight + 10) {
                subtext.classList.add('visible');
            } else {
                subtext.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to handle the initial scroll position
});
document.addEventListener('DOMContentLoaded', () => {
    const brainImage = document.querySelector('.floating-brain img');
    const brainMenu = document.getElementById('brainMenu');
    const brain3d = document.getElementById('brain-container');
    const closeMenu = document.querySelector('.close-menu');

    const openMenu = () => {
        brainMenu.classList.add('show');
    };

    const closeMenuFunction = () => {
        brainMenu.classList.remove('show');
    };

    brainImage.addEventListener('click', openMenu);
    brain3d.addEventListener('click', openMenu);

    closeMenu.addEventListener('click', closeMenuFunction);
    brainMenu.addEventListener('click', (event) => {
        if (event.target === brainMenu) {
            closeMenuFunction();
        }
    });
});
