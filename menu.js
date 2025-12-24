// Check if the screen is mobile
if (window.innerWidth <= 768) {
  // Create mobile header
  const mobileHeader = document.createElement('div');
  mobileHeader.className = 'mobile-header';
  mobileHeader.innerHTML = `
    <strong>Էլեկտրո Գրուպ</strong>
    <div id="mobile-menu-icon">&#9776;</div>
  `;
  document.body.insertBefore(mobileHeader, document.body.firstChild);

  // Create mobile menu
  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.id = 'mobile-nav';
  mobileNav.innerHTML = `
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#products">Products</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#licenses">Licenses</a>
  `;
  document.body.insertBefore(mobileNav, mobileHeader.nextSibling);

  // Add toggle for mobile menu
  const menuIcon = document.getElementById('mobile-menu-icon');
  menuIcon.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    mobileNav.style.flexDirection = 'column';
  });
}
