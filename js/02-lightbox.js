import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEL = document.querySelector('.gallery');
const galleryEL2 = document.querySelector('.gallery__image');
const onImgElCLick = galleryEL.addEventListener("click",event => {
    event.preventDefault()
 

})
const makeGalleryCard = ({preview, original,description} = {}) => {
    return `<a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
      />
  </a>
  `;
  };

  const galleryLiElements = galleryItems.map(pic => {
      return makeGalleryCard(pic);
  });
  
  galleryEL.insertAdjacentHTML('afterbegin', galleryLiElements.join(''));
  console.log(galleryItems);
  
  
  const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });