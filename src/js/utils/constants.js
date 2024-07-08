//import zatonUfa from '../../images/projects/ufa_zaton.png';
//import timashevskCondit from '../../images/projects/timashevsk_condit.png';
//import ufaUmnDom from '../../images/projects/ufa_umn_dom.png';



export const callbackFormId = 'mdoygyzz';


//секция, куда загружаются карточки проектов
export const projectsContainerSelector = '.projects__items';

//template карточки проекта
export const projectTemplateSelector = "#project-template";
export const projectHorizontalTemplateSelector = "#project-horizontal-template";

export const cardArticleConfig = {
  cardArticleTemplateSelector: '#article-template',
  articleCardSelector: '.infoitem',
  articleTagsSectionSelector: '.infoitem__header',
  articleTagClass: 'infoitem__span-button',
  articleHeadSelector: '.infoitem__name',
  articleDescSelector: '.infoitem__description',
  articleLinkSelector: '.infoitem__link',
  cardListSection: '.cards-js-rendered',
}

/*    name: item.name,
      link: item.link,
      to: item.model,
      naznach: item.naznach,
      q: item.q,
*/
/*
export const initialProjects = [
    {
      name: "Котельная в квартале 34, г. Уфа, жилой район «Затон-Восточный»",
      link: zatonUfa,
      to: "ТИ82-201",
      naznach: "Отопление, ГВС",
      q: "17500 кВт",
      animateClass: 'animate__fadeIn',
    },
];
*/

const blogPath = 'blog-proizvodstva'

export const tagsAliases = {
  'gkh' : 'ЖКХ',
  'project': 'Проект',
  'btp': 'БТП',
  'food': 'Пищевые',
  'example': 'Пример расчёта',
  'prod': 'Продукция',
}





export const ESC_CODE = 'Escape';

//секция, куда загружаются карточки проектов
export const cardsContainerSelector = '.projects__items';

//template карточки проекта
export const cardTemplateSelector = "#project-template";

export const partnersSectionConfig = {
  containerSelector: '.map__list',
  itemTemplateSelelector: '#partner-item-template',
  activeClass: 'map__list-item_active',
}

//селекторы модальных окон
export const popupImageSelector = '.popup-viewport';
export const callBackPopupSelector = '.popup-callback';
export const popupWithToSelector = '.popup-to';
export const popupWithMenuSelector = '.popup-menu';

//конфиги
// конфиг селекторов в модальном окне с картиной и подписью

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



