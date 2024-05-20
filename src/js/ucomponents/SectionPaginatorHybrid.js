import Section from "../components/Section.js";

export default class SectionPaginatorHybrid extends Section {
  constructor(props, cardsContainerSelector, moreButtonElement) {
    super(props, cardsContainerSelector);
    super.clear();

    this._countSumBase = 9; //абстрактных квадратиков грида, элементов может быть меньше
    this._buttonMore = moreButtonElement;

    // проверяем необходимость MoreButton
    this._checkMoreButtonState();
  }

  _showMoreButtonState() {
    if (this._buttonMore.classList.contains('apps__more-button_hidden')) {
      this._buttonMore.classList.remove('apps__more-button_hidden');
    }
  }

  _hideMoreButtonState() {
    this._buttonMore.classList.add('apps__more-button_hidden');
  }

  _checkMoreButtonState() {
    if (this._countBase < this._renderedItems.length) {
          this._showMoreButtonState();
    } else {
      this._hideMoreButtonState();
    }
  }

  renderItems() {
      this._renderedItems.slice(0, this._countBase).forEach(item => {
        this._renderer(item);
      });
  }

}