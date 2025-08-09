document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
