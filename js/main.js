const formData = localStorage.getItem('form-data')?JSON.parse(localStorage.getItem('form-data')):{
  Full_name: '',
  email: '',
  message: '',
};

let form;

function loadData(tempFormData) {
  Object.keys(tempFormData).forEach((inputName) => {
    form[inputName].value = tempFormData[inputName];
  });
}

function saveData(tempFormData) {
  localStorage.setItem('form-data', JSON.stringify(tempFormData));
}

function menuToggle() {
  document.querySelector('#nav-menu').classList.toggle('toggle-mobile-menu');
}

window.addEventListener('load', () => {

  form = document.getElementById('contact-me-form');
  loadData(formData);
  document.querySelector('#menu-btn').addEventListener('click', () => {
    menuToggle();
  });

  document.querySelector('#nav-menu').addEventListener('click', () => {
    menuToggle();
  });

  form.addEventListener('submit', (event) => {
    if (document.querySelector('small')) form.removeChild(document.querySelector('small'));
    if (form.email.value !== form.email.value.toLowerCase()) {
      event.preventDefault();
      const listItem = document.createElement('li');
      const errorMessage = document.createElement('small');
      errorMessage.innerText = 'Email Contains Capital Letters';
      listItem.append(errorMessage);
      form.querySelector('ul').append(listItem);
    }
  });

  document.querySelectorAll('input, textarea').forEach((inp) => {
    inp.addEventListener('change', () => {
      const inputName = inp.getAttribute('name');
      formData[inputName] = inp.value;
      saveData(formData);
    });
  });
});