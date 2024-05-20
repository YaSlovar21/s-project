import Card from "../components/Card.js";

export default class BlogCard extends Card {
  constructor({ cardSize, isColorInverse, path, name, description, ...props}) {
    super(props);
    this._cardSize = cardSize;
    this._isColorInverse = isColorInverse;

    this._link = path;
    this._title = name;
    this._description = description;
  }


  getSize() {
    if (this._cardSize === 'medium') {
      return 2;
    }
    if (this._cardSize === 'big') {
      return 3;
    }
    return 1;
  }

  generateCard() {
    this._element = super._getTemplate();

    const titleEl = this._element.querySelector('.blog-grid__title');
    titleEl.textContent = this._title;

    this._element.querySelector('.blog-grid__description').textContent = this._description;
    this._element.querySelector('.blog-grid__link').href = this._link;

    if (this._isColorInverse) {
      this._element.classList.add(`blog-grid__list-item_white`);
      titleEl.classList.add('blog-grid__title_black');
    }

    if (this._cardSize === 'small') {
      this._element.classList.add('blog-grid__list-item_m');
      titleEl.classList.add('blog-grid__title_m');
    }
    if (this._cardSize === 'medium') {
      this._element.classList.add('blog-grid__list-item_l');
      titleEl.classList.add('blog-grid__title_l');
    }
    if (this._cardSize === 'big') {
      this._element.classList.add('blog-grid__list-item_xl');
      titleEl.classList.add('blog-grid__title_xl');
    }

    return this._element;
  }
}