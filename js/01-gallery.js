import { galleryItems } from './gallery-items.js';
// Change code below this line
const ul = document.querySelector('.gallery');

const imgArr = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
});
ul.insertAdjacentHTML('beforeend', imgArr.join('\n'));

ul.addEventListener('click', onImgClick);
const instance = basicLightbox.create(`<img src="">`, {
    onShow: (instance) => {
        window.addEventListener('keydown', onEscClick);
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', onEscClick);
    },
});

function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    instance.element().querySelector('img').src =
        event.target.getAttribute('data-source');

    instance.show();
}

function onEscClick(e) {
    if (e.key === 'Escape') {
        instance.close();
    }
    return;
}
