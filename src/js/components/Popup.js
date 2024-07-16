import {ESC_CODE} from '../utils/constants.js';

export default class Popup {
    constructor(popupSelector) {
        this._modal = document.querySelector(popupSelector);
        
        this._handleEscButton = (evt) => {
            if (evt.key === ESC_CODE) {
                this.close();
            }
        }
        
        this._handleOverlayClick = (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        }
        this._modal.querySelector('.popup__button-close').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#f2f2f2" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f2f2f2" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>'
    }

    open() {
        this._modal.classList.add('popup_opened');
        console.log('222');
        document.addEventListener('keydown',  this._handleEscButton);
        this._modal.addEventListener("mousedown", this._handleOverlayClick);
    }

    close() {
        this._modal.classList.remove('popup_opened');
        document.removeEventListener('keydown',  this._handleEscButton);
        this._modal.removeEventListener("mousedown", this._handleOverlayClick);
    }

    setEventListeners(){
        this._modal
            .querySelector('.popup__button-close')
            .addEventListener('mousedown', () => {
                this.close();
            })
    }
}