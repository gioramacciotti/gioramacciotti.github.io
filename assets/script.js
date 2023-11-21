function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var closeIcon = document.querySelector('.mobile-menu-close-icon');

    mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
    mobileMenu.classList.toggle('active');
    closeIcon.classList.toggle('active');
}

function closeMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var closeIcon = document.querySelector('.mobile-menu-close-icon');

    mobileMenu.style.display = 'none';
    closeIcon.classList.remove('active');
}

window.addEventListener('resize', function() {
    var mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (window.innerWidth <= 1200) {
        mobileMenuIcon.style.display = 'block';
        mobileMenu.style.display = 'none'; 
    } else {
        mobileMenuIcon.style.display = 'none';
        mobileMenu.style.display = 'block'; 
    }
});

window.addEventListener('load', function() {
    var mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (window.innerWidth <= 1200) {
        mobileMenuIcon.style.display = 'block';
        mobileMenu.style.display = 'none';
    } else {
        mobileMenuIcon.style.display = 'none';
        mobileMenu.style.display = 'block';
    }
});