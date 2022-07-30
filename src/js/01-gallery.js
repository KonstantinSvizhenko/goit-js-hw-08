// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const gallaryList = makeGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', gallaryList)

function makeGalleryItems(items) {
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

function openModal(e) {
    e.preventDefault();
};

const galleryBox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'

});

