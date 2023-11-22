import { galleryItems } from './gallery-items.js';
// Change code below this line
const ul = document.querySelector('.gallery');

ul.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
        const urlBig = event.target.getAttribute('data-source');

        const instance = basicLightbox.create(`<img src="${urlBig}">`, {
            onShow: (instance) => {
                window.addEventListener('keydown', (e) => {
                    onEscClick(e, instance);
                });
            },
            onClose: (instance) => {
                window.removeEventListener('keydown', (e) => {
                    onEscClick(e, instance);
                });
            },
        });

        instance.show();
    }
});

function onEscClick(e, instance) {
    if (e.key === 'Escape') {
        instance.close();
    }
    return;
}

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
