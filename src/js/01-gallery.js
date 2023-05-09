// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const cardMarkup = createCardMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardMarkup);

function createCardMarkup(cards) {
  return cards.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>
            </div>`;
  }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  cartionsType: "attr",
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
