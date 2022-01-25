function menuToggle() {
  document.querySelector('#nav-menu').classList.toggle('toggle-mobile-menu');
}

function modalTemplate(obj) {
  document.querySelector('.popUpScreen h1').textContent = obj.name;
  document.querySelector('.popUpScreen p').textContent = obj.description
  document.querySelector('.popUpScreen > img').src = obj['featured-image']
  document.querySelector('.popUpScreen ul').innerHTML = '';
  obj.technologies.forEach(x => {
    const li = document.createElement('li');
    li.textContent = x;
    document.querySelector('.popUpScreen ul').appendChild(li)
  });
  document.querySelector('.popUpScreen .actions a:nth-child(1)').href = obj['live-version']
  document.querySelector('.popUpScreen .actions a:nth-child(2)').href = obj['repo-link']
}

let projects = [
  {
    'name': 'hello',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    'technologies': [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen'
    ],
    'live-version': "https://saadat123456.github.io/Portfolio/",
    'repo-link': 'https://github.com/Saadat123456/Portfolio'
  },
  {
    'name': 'Multi-Post Stories Gain+Glory',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    'technologies': [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen'
    ],
    'live-version': "https://saadat123456.github.io/Portfolio/",
    'repo-link': 'https://github.com/Saadat123456/Portfolio'
  },
  {
    'name': 'Multi-Post Stories Gain+Glory',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    'technologies': [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen'
    ],
    'live-version': "https://saadat123456.github.io/Portfolio/",
    'repo-link': 'https://github.com/Saadat123456/Portfolio'
  },
  {
    'name': 'Multi-Post Stories Gain+Glory',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    'technologies': [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen'
    ],
    'live-version': "https://saadat123456.github.io/Portfolio/",
    'repo-link': 'https://github.com/Saadat123456/Portfolio'
  },
  {
    'name': 'Multi-Post Stories Gain+Glory',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    'technologies': [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen'
    ],
    'live-version': "https://saadat123456.github.io/Portfolio/",
    'repo-link': 'https://github.com/Saadat123456/Portfolio'
  },
  {
    'name': 'Multi-Post Stories Gain+Glory',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop.png',
    'technologies': [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen'
    ],
    'live-version': "https://saadat123456.github.io/Portfolio/",
    'repo-link': 'https://github.com/Saadat123456/Portfolio'
  },
]

window.addEventListener('load', () => {
  document.querySelector('#menu-btn').addEventListener('click', () => {
    menuToggle();
  });

  document.querySelector('#nav-menu').addEventListener('click', () => {
    menuToggle();
  });
});