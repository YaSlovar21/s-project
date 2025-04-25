import Card from "./Card.js";

export default class CardProject extends Card {
    constructor({title, equipment, location, region, handleProjectClick, ...props}) {
        super(props);

        this._title = title;
        this._equipment = equipment;
        this._location = location;
        if (!location) {
          console.log(' Undefined?', location);
        }
        this._region = region;
        this._handleProjectClick = handleProjectClick; //функция коллбэк открытия попапа проекта
    }

    generateCard() {
        this._element = super._getTemplate();
        /*
        this._cardImage = this._element.querySelector('.projects__image');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        */
        this._cardTitleEl = this._element.querySelector(".card-title");
        this._cardTitleEl.textContent = this._title;
        this._cardEquipmentEl = this._element.querySelector(".card-equipment");
        this._cardEquipmentEl.textContent = this._equipment;
        this._cardTitleEl = this._element.querySelector(".card-reg-and-location");
        this._cardTitleEl.textContent = `${this._region}${this._location ? ` (${this._location})`: ''}`;

        this._setEventListeners();
        return this._element;
    }


    _setEventListeners() {
      //передадим из индекс коллбэк открытия попапа
      this._element.addEventListener("mousedown", () => {
        this._handleProjectClick(this._title, this._equipment)
      });
    }
  }