export default class Card {
    constructor({cardTemplateSelector, cardSelector, animateClass} ) {
        this._cardSelector =cardSelector;
        this._cardTemplateSelector = cardTemplateSelector;
        this._animateClass= animateClass;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._cardTemplateSelector)
          .content
          .querySelector(this._cardSelector)
          .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();


        return this._element;
    }



  }