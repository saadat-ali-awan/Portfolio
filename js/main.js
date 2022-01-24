window.addEventListener('load', () => {
  document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.toggle('toggle-mobile-menu');
  });
});