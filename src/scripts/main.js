'use strict';

const image = document.querySelectorAll('.list-item');
const mainImage = document.querySelector('.gallery__large-img');

image.forEach((img) => {
  img.addEventListener('click', () => {
    event.preventDefault();

    let newSrc;

    if (event.target.tagName === 'IMG') {
      newSrc = event.target.parentNode.href;
    } else if (event.target.tagName === 'A') {
      newSrc = event.target.href;
    }

    mainImage.src = newSrc;
  });
});
