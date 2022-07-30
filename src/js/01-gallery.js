// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContent = document.querySelector('.gallery')
const galleryList = createGalleryItems(galleryItems);

galleryContent.insertAdjacentHTML('beforeend', galleryList)

function createGalleryItems(items) {
    return items.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href='${original}'>
         <img
      class="gallery__image"
      src='${preview}' 
      data-source='${original}
      alt='${description}'
    />
  </a>
</div>`
    })
    .join('');
}

galleryList.addEventListener('click', openModal);

function openModal(e) {
    e.preventDefault();
};

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });