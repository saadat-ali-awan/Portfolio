const formData = localStorage.getItem('form-data') ? JSON.parse(localStorage.getItem('form-data')) : {
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

function modalTemplate(obj) {
  document.querySelector('.popupContent h1').textContent = obj.name;
  document.querySelector('.popupContent p').textContent = obj.description;
  document.querySelector('.popupContent > img').src = obj['featured-image'];
  document.querySelector('.popupContent ul').innerHTML = '';
  obj.technologies.forEach((x) => {
    const li = document.createElement('li');
    li.textContent = x;
    document.querySelector('.popupContent ul').appendChild(li);
  });
  document.querySelector('.popupContent .actions a:nth-child(1)').href = obj['live-version'];
  document.querySelector('.popupContent .actions a:nth-child(2)').href = obj['repo-link'];
  document.querySelector('#popUpModal').style.display = 'flex';
}

function cardsTemplate(project, index) {
  return `<div class="portfolio-card">
    <div class="card-body">
      <h3>${project.name}</h3>
      <ul> ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}</ul>
      <button type="button" data-number="${index}">See Project</button>
    </div>
  </div>`;
}

function onWindowResize() {
  if (window.innerWidth > 992) {
    document.querySelector('.close-popup-btn > img').src = 'img/close-desktop.svg';
    document.querySelector('#popupProjectImage').src = 'img/SnapshootPortfolioDesktop.png';
  } else {
    document.querySelector('.close-popup-btn > img').src = 'img/popup-close-icon.svg';
    document.querySelector('#popupProjectImage').src = 'img/SnapshootPortfolio.svg';
  }
}

const projects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    technologies: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    'live-version': 'https://saadat123456.github.io/Portfolio/',
    'repo-link': 'https://github.com/Saadat123456/Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    technologies: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    'live-version': 'https://saadat123456.github.io/Portfolio/',
    'repo-link': 'https://github.com/Saadat123456/Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    technologies: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    'live-version': 'https://saadat123456.github.io/Portfolio/',
    'repo-link': 'https://github.com/Saadat123456/Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    technologies: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    'live-version': 'https://saadat123456.github.io/Portfolio/',
    'repo-link': 'https://github.com/Saadat123456/Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    technologies: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    'live-version': 'https://saadat123456.github.io/Portfolio/',
    'repo-link': 'https://github.com/Saadat123456/Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    technologies: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    'live-version': 'https://saadat123456.github.io/Portfolio/',
    'repo-link': 'https://github.com/Saadat123456/Portfolio',
  },
];

window.addEventListener('load', () => {

  onWindowResize();

  const portfolioRef = document.querySelector('.portfolio');
  projects.forEach((project, index) => {
    portfolioRef.innerHTML += cardsTemplate(project, index);
  });

  form = document.getElementById('contact-me-form');
  loadData(formData);
  document.querySelector('#menu-btn').addEventListener('click', () => {
    menuToggle();
  });

  document.querySelector('#nav-menu').addEventListener('click', () => {
    menuToggle();
  });


  const popUpButtons = document.querySelectorAll('button[data-number]');
  popUpButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.dataset.number, 10);
      modalTemplate(projects[val]);
    });
  });

  document.querySelector('.close-popup-btn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#popUpModal').style.display = 'none';
  });

  window.addEventListener('resize', () => {
    onWindowResize();
  }, true);

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