import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor({popupImageSelector, popupImageDescSelector}, popupSelector) {
        super(popupSelector)
        this._popupImage = this._modal.querySelector(popupImageSelector);
        this._popupImageDesc = this._modal.querySelector(popupImageDescSelector);
    }

    open({link, desc}) {
        this._popupImage.src = link;
        this._popupImage.alt = desc;
        this._popupImageDesc.textContent = desc;
        super.open();
    }

    close() {
        setTimeout(()=> {
          this._popupImage.src = "";
        }, 500)

        this._popupImage.alt = "";
        super.close();
    }
}