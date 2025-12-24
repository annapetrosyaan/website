const menuIcon = document.getElementById('mobile-menu-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});
