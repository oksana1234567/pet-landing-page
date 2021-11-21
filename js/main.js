'use strict';

// Массив изображений для карусели
const images = [
    { original: './png/first_hero.png', description: 'first-picture', },
    { original: './png/first_hero.png', description: 'second-picture', },
    { original: './png/first_hero.png', description: 'third-picture', },
    { original: './png/first_hero.png', description: 'forth-picture', },
    { original: './png/first_hero.png', description: 'fifth-picture', },
];

// Добавление галереи для карусели через js


const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createGalleryMarkup(images);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);



function createGalleryMarkup(images) {
  return images.map(({ original, description}) => {
      return `
<li><img src="${original}" class="imageHero" alt="${description}"></li>
    `;
    })
    .join('');
};

// Пролистывание карусели
let slideNumber = 1;
showSlides(slideNumber);


function changeSlides(n) {
  showSlides(slideNumber += n);
}


function activeSlide(n) {
  showSlides(slideNumber = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("imageHero");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideNumber = 1}    
    if (n < 1) { slideNumber = slides.length }
   
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNumber-1].style.display = "block";  
    dots[slideNumber - 1].className += " active";
    
}

