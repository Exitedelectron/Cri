document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(function (item) {
        if (item.href === currentLocation) {
            item.classList.add('active');
            item.style.color = 'white';
        }
    });
});