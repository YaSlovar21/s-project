
import { dgPopupConfig } from "../utils/constants";

export default class DynamicGrid {

  constructor() {

    this._dg = document.querySelector('.dg');

    this._modal = this._dg.querySelector('.dg__popup');
    this._image = this._modal.querySelector('.dg__popup-image');
    this._title = this._modal.querySelector('.dg__popup-info-title');
    this._intro = this._modal.querySelector('.dg__popup-info-text');
    this._list = this._modal.querySelector('.dg__popup-list');

    this._baseUrl = this._modal.querySelector('.dg__popup-link_more');
  }

  open({image, title, intro, baseUrl}) {
      this._image.src = image;
      this._image.alt = title;

      this._title.textContent = title;
      this._intro.textContent = intro;
      this._baseUrl.href = baseUrl;

      this._modal.classList.add('dg__popup_opened');
  }

  close() {
    this._modal.classList.remove('dg__popup_opened');

  }

  setEventListeners(){
    this._modal
        .querySelector('.dg__popup-close-button')
        .addEventListener('mousedown', () => {
            this.close();
        })
}
}