import { galleryItems } from './gallery-items.js';
// Change code below this line

const ul = document.querySelector('.gallery');

const imgArr = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
 </li>`;
});
ul.insertAdjacentHTML('beforeend', imgArr.join('\n'));

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

ul.addEventListener('click', (event) => {
    event.preventDefault();

    if (!gallery.visible()) {
        gallery.open();
    } else {
        gallery.close();
    }
});
