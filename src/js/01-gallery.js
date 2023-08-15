import LightBoxSimple from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
console.log(LightBoxSimple); // Перевірка підключення

const gallery = document.querySelector('.gallery');
gallery.style.listStyleType = 'none'; // Відключення крапок у списку

const createMarkup = galleryItems
  .map(({ preview, original, description }) => {
    const item = `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
    return item;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', createMarkup);

new LightBoxSimple('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
