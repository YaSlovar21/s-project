export const ESC_CODE = 'Escape';

//templates карточкек
export const projectTemplateSelector = "#project-template";
export const projectHorizontalTemplateSelector = "#project-horizontal-template";

//секции, куда рендерятся карточки
export const cardsContainerSelector = '.projects__items';

//селекторы модальных окон
export const popupImageSelector = '.popup-image';
//export const callBackPopupSelector = '.popup-callback';
//export const popupWithToSelector = '.popup-to';
//export const popupWithMenuSelector = '.popup-menu';

//конфиги
//конфиг селекторов в модальном окне с картиной и подписью

//попап с картинкой
export const popupImageSelectorsCongig = {
  popupImageSelector: '.popup__image',
  popupImageDescSelector: '.popup__image-description'
}

export const dgPopupConfig = {
  imageSchemeSelector: '.dg__popup-image',
  schemeContainerSelector: '.dg__popup-image-slider',
  titleSelector: '.dg__popup-info-title',
  introSelector: '.dg__popup-info-text',
  listSelector: '.dg__popup-list',
  clickedItemSelector: '.dg__list-item',
}

export const popupToConfig = {
  popupImageToSelector: '.popup__to-img',
  popupImageContainerSelector: '.popup__to-img-container',
  popupImageNameSelector: '.popup__to-name',
  popupImageDescSelector: '.popup__to-desc',
  popupImageLink3dSelector: '.popup__to-3dlink',
}

export const formValidatorConfig = {
  inputSelector: '.raschet-bem__input',
  submitButtonSelector: '.button-bem',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'raschet-bem__input_type_error',
  errorClass: 'raschet-bem__input-error_visible'
}

export const raschetValidatorConfig = {
  inputSelector: '.raschet-bem__input',
  submitButtonSelector: '.raschet-bem__submit-button',
  inactiveButtonClass: 'raschet-bem__submit-button_disabled',
  inputErrorClass: 'raschet-bem__input_type_error',
  errorClass: 'raschet-bem__input-error_visible'
}

export const lineformConfig = {
  inputSelector: '.lineform__input',
  submitButtonSelector: '.lineform__button-save',
  inactiveButtonClass: 'raschet-bem__submit-button_disabled',
  inputErrorClass: 'raschet-bem__input_type_error',
  errorClass: 'raschet-bem__input-error_visible'
}



