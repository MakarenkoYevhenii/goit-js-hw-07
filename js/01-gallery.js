import { galleryItems } from './gallery-items.js';


// Change code below this line
const galleryEL = document.querySelector('.gallery');
const onImgElCLick = galleryEL.addEventListener("click",event => {
    event.preventDefault()
    if(event.target.nodeName !== "IMG")
    {
      // console.dir(event.target.nodeName);
      return alert("честно я это подсмотрел");
    }
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source}>
`)
instance.show() 
})
const makeGalleryCard = ({preview, original,description} = {}) => {
  return `<a class="gallery__link" href=${original}>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
`;
};

const galleryLiElements = galleryItems.map(pic => {
  return makeGalleryCard(pic);
});

galleryEL.insertAdjacentHTML('afterbegin', galleryLiElements.join(''));
