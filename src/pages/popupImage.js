import PopupWithImage from '../js/components/PopupWithImage.js';

import {
  popupImageSelector,     //попап с картинкой (селектор)
  popupImageSelectorsCongig
} from '../js/utils/constants.js'

const popupImage = new PopupWithImage(popupImageSelectorsCongig, popupImageSelector);
popupImage.setEventListeners();

document.querySelectorAll('.popup-image-item').forEach((item) => {
    item.addEventListener("mousedown", (evt) => {

      const block = evt.target.closest('.popup-image-item');
      popupImage.open({
        link: block.querySelector('img') ?
          block.querySelector('img').dataset.src ?  block.querySelector('img').dataset.src:  block.querySelector('img').src
        : block.dataset.src ? block.dataset.src : block.src,
        desc: block.querySelector('img') ? block.querySelector('img').alt : block.alt,
      });
    });
  });
  