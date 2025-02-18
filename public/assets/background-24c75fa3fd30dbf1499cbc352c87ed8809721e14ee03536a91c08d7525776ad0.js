const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
console.log("Background.js is loaded!");

window.addEventListener('scroll', () => {
  let currentSection = Array.from(sections).find(section => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
  });

  if (currentSection) {
    if (currentSection.classList.contains('video-bg')) {
      navbar.classList.add('transparent');
      navbar.classList.remove('colored');
    } else if (currentSection.classList.contains('color-bg')) {
      navbar.classList.remove('transparent');
      navbar.classList.add('colored');
      navbar.style.backgroundColor = window.getComputedStyle(currentSection).backgroundColor;
    }
  }
});
