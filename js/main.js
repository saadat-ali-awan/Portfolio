window.addEventListener('load', () => {
  document.querySelector('#menu-btn').addEventListener('click', () => {
    menuToggle();
  });
});

function menuToggle(){
  document.querySelector('#nav-menu').classList.toggle('toggle-mobile-menu');
}