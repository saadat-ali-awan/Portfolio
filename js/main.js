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
  const form = document.getElementById('contact-me-form');
  form.addEventListener('submit', (event) => {
      if(form.email.value !== form.email.value.toLowerCase()){
          event.preventDefault();
      }
  })
});