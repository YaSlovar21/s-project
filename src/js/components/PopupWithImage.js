import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor({popupImageSelector, popupImageDescSelector}, popupSelector) {
        super(popupSelector)
        this._popupImage = this._modal.querySelector(popupImageSelector);
        this._popupImageDesc = this._modal.querySelector(popupImageDescSelector);
        this._preloader = this._modal.querySelector('.popup-preloader');
    }

    _setPreloader() {
        if (this._preloader) {
            this._preloader.hidden = false;
            this._popupImage.src= '';
            this._popupImageDesc.textContent= 'Картинка загружается';
        }
    }

    _unsetPreloader() {
        if (this._preloader) {
            this._preloader.hidden = true;
        }
    }

    _loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error (`Не удалось загрузить по ${src}`));
            img.src = src;
        });
    }

    async open({link, desc}) {
        this._setPreloader();
        try {
            super.open();
            await this._loadImage(link);
            this._popupImage.src = link;
            this._popupImage.alt = desc;
            this._popupImageDesc.textContent = desc;
           
            requestAnimationFrame(()=>{
                this._popupImage.classList.remove('opacity-0', 'scale-90');
                this._popupImageDesc.classList.remove('opacity-0', 'scale-90');
            })
           
        } catch (e) {
            console.log(e);
            this._popupImageDesc.textContent='Что то пошло не так'
        } finally {
            this._unsetPreloader();
        }
       
    }

    close() {
        setTimeout(()=> {
          this._popupImage.src = "";
        }, 500)

        this._popupImage.alt = "";
        this._popupImage.classList.add('opacity-0', 'scale-90');
        this._popupImageDesc.classList.add('opacity-0', 'scale-90');
        super.close();
    }
}