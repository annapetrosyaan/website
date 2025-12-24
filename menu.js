const menuIcon = document.getElementById('mobile-menu-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
  if (mobileNav.style.display === 'flex') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'flex';
  }
});
