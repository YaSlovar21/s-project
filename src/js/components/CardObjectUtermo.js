import Card from "./Card.js";

export default class CardObjectUtermo extends Card {
  constructor({title, posterLink, desc,link, handleObjectClick, geo, ...props}) {
    super(props);
    this._title = title;
    this._desc = desc;
    this._link = link;
    this._posterLink = posterLink;
    this._handleObjectClick = handleObjectClick;

    if (geo) {
      this._geo= geo;
    }
  }

  generateCard() {
    this._element = super._getTemplate();
    this._posterElem = this._element.querySelector('.card__image');
    this._titleElem = this._element.querySelector('.card__title');

    if (this._element.querySelector('.card__description')) {
      this._descElem = this._element.querySelector('.card__description');
      this._descElem.textContent = this._desc;
    }

    if (this._element.querySelector('.card__linkwrapper')) {
      this._element.querySelector('.card__linkwrapper').href = this._link;
    }

    if (this._geo) {
      this._element.querySelector('.span-geo').textContent = this._geo;
    } else
    {
      
    }

    this._posterElem.src= this._posterLink;
    this._titleElem.textContent = this._title;


    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    //передадим из индекс коллбэк открытия попапа
    this._element.addEventListener("mousedown", () => {
      this._handleObjectClick(this);
    });
  }
}