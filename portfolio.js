document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }

    // Show and hide the modal
    const profilePhoto = document.getElementById('profile-photo');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-btn');

    profilePhoto.addEventListener('click', function() {
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
