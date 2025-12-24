const menuIcon = document.getElementById('menu-icon');
const headerNav = document.getElementById('header-nav');

function toggleMenu() {
  if(headerNav.style.display === 'block'){
    headerNav.style.display = 'none';
  } else {
    headerNav.style.display = 'block';
  }
}

menuIcon.addEventListener('click', toggleMenu);

function handleResize() {
  if(window.innerWidth <= 768){
    headerNav.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    headerNav.style.display = 'flex';
    menuIcon.style.display = 'none';
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
