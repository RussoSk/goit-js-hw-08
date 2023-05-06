// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line
const cardMarkup = createCardMarkup(galleryItems);
const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', cardMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createCardMarkup(cards) {
  return cards.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>
            </li>`;
  }).join('');
}

console.log(galleryItems);
