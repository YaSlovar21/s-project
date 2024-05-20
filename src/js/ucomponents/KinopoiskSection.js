
export default class KinopoiskSection {

  constructor() {

    this._kps = document.querySelector('.to-info-secret');
    this._activatedSection = document.querySelector('.uplates');

    this._imageEl = this._kps.querySelector('.heatex__image');
    this._titleEl = this._kps.querySelector('.heatex__title');
    this._descEl = this._kps.querySelector('.heatex__paragraph');
    this._3dlinkEl = this._kps.querySelector('.to-info-secret__3dlink');

  }

  open(data) {
    this._titleEl.textContent = data.name;
    this._imageEl.src = data.img;
    this._imageEl.alt = data.name;
    this._descEl.textContent = data.desc;
    this._3dlinkEl.href = data.baseUrl;

    this._kps.classList.add('to-info-secret_active');
    this._kps.scrollIntoView({
      behavior: 'smooth'
    });
  }

  close() {
    this._kps.classList.remove('to-info-secret_active');
    this._activatedSection.scrollIntoView({
      behavior: 'smooth'
    });
  }

  setEventListeners() {
    this._kps
      .querySelector(".to-info-secret__close-button")
      .addEventListener("click", () => {
        this.close();
      });
  }
}