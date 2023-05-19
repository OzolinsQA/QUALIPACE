/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const fadeElems = document.querySelectorAll('.fade-in');

function checkFade() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  fadeElems.forEach(fadeElem => {
    const elemTop = fadeElem.getBoundingClientRect().top;

    if (elemTop < triggerBottom) {
      fadeElem.classList.add('active');
    } else {
      fadeElem.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('resize', checkFade);

checkFade();