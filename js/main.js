function menuToggle() {
  document.querySelector('#nav-menu').classList.toggle('toggle-mobile-menu');
}

let projects = [
  {
    'name': 'Multi-Post Stories Gain+Glory',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop',
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
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop',
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
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop',
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
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop',
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
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop',
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
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured-image': 'img/SnapshootPortfolioDesktop',
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