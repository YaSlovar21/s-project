import Card from "./Card.js";

export default class CardRaschet extends Card {
    constructor({name, desc, link, ...props} ) {
        super(props)
        this._link = link;
        this._desc = desc;
        this._name = name;

    }


    generateCard() {
        this._element = super._getTemplate();

        this._element.querySelector('.recomendation__title').textContent = this._name;
        this._element.querySelector('.recomendation__predesc').textContent = this._desc;
        this._element.querySelector('.recomendation_type_link').href = this._link;

        return this._element;
    }

  }