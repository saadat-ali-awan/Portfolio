function menuToggle() {
  document.querySelector('#nav-menu').classList.toggle('toggle-mobile-menu');
}

window.addEventListener('load', () => {
  document.querySelector('#menu-btn').addEventListener('click', () => {
    menuToggle();
  });

  document.querySelector('#nav-menu').addEventListener('click', () => {
    menuToggle();
  });
});