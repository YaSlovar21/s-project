//import zatonUfa from '../../images/projects/ufa_zaton.png';
//import timashevskCondit from '../../images/projects/timashevsk_condit.png';
//import ufaUmnDom from '../../images/projects/ufa_umn_dom.png';

const ti025Img = new URL('../../images/descTO/ti025.png', import.meta.url);
const ti077Img = new URL('../../images/descTO/ti077.png', import.meta.url);
const ti13Img = new URL('../../images/descTO/ti13.png', import.meta.url);
const ti18Img = new URL('../../images/descTO/ti18.png', import.meta.url);
const ti28Img = new URL('../../images/descTO/ti28.png', import.meta.url);
const ti45Img = new URL('../../images/descTO/ti45.png', import.meta.url);
const ti52Img = new URL('../../images/descTO/ti52.png', import.meta.url);
const ti65Img = new URL('../../images/descTO/ti65.png', import.meta.url);
const ti82Img = new URL('../../images/descTO/ti82.png', import.meta.url);
const ti95Img = new URL('../../images/descTO/ti95.png', import.meta.url);

import schVvoda from '../../images/schemes_btp/3d/vvoda.png';
import schSoNezav from '../../images/schemes_btp/3d/so-nezav.png';
import schSoZav from '../../images/schemes_btp/3d/so-zav.png';
import schGvsOneStep from '../../images/schemes_btp/3d/gvs-one-step.png';
import schGvsTwoStep from '../../images/schemes_btp/3d/gvs-two-step.png';
import schGvsReserve from '../../images/schemes_btp/3d/gvs-reserve-pto.png';

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

export const initialHeatEx = {
  "ti-025": {
    name: "ТИ 025",
    img: ti025Img,
    desc: "ТИ025 – имеет широкую гамму подключения подтрубков: Ду20, Ду25, Ду32, Ду40. Применение: небольшие промышленные помещения, коттеджи, здания детских садов, подогрев бассейнов, обогрев гаражных помещений.",
    link3d: "https://disk.yandex.ru/d/p4EH75u--S1Dzg",
    baseUrl: "/catalog/ti-025.html",
  },
  "ti-077": {
    name: "ТИ 077",
    img: ti077Img,
    desc: `ТИ077 – имеет широкую гамму подключения подтрубков: Ду25, Ду32, Ду40.
    Подходит для задач ЖКХ на типовые 5ти этажные дома.
    Типоразмер также часто применяется в пищевой отрасли. (в т.ч. в многоступенчатом исполнении)`,
    link3d: "https://disk.yandex.ru/d/kEiGbHo7Fi8Uwg",
    baseUrl: "/catalog/ti-077.html",
  },
  "ti-13": {
    name: "ТИ 13",
    img: ti13Img,
    desc: `ТИ13 – имеет подключения подтрубков: Ду50, Ду65.
    Применение: если ориентироваться на жилые дома, данный теплообменник подходит на типовой 4-6 подъездный 9-ти этажный жилой дом.`,
    link3d: "https://disk.yandex.ru/d/7C26Ov2CVbgl6w",
    baseUrl: "/catalog/ti-13.html",
  },
  "ti-18": {
    name: "ТИ 18",
    img: ti18Img,
    desc: `ТИ18 – имеет гамму подключения подтрубков: Ду50, Ду65.
    Применение: если ориентироваться на жилые дома, данный теплообменник зачастую используются в многоквартирных высотных домах.
    Теплообменный аппарат похож на ТИ13, но в отличие от него лучше справляется с более жесткими температурными режимами`,
    link3d: "https://disk.yandex.ru/d/O2lzhXAOWaA4ug",
    baseUrl: "/catalog/ti-18.html",
  },
  "ti-16-5": {
    name: "ТИ 16,5",
    img: "",
    desc: `ТИ16,5 – имеет подключение подтрубков ДУ50, ДУ65, ДУ80.
    Если температурные графики не типовые (не отопление и гвс), с небольшим перепадом температур,
    специфические среды, программа расчёта вероятно подберет данный теплообменник.
    Зачастую он подбирается, когда требуется охладить жидкость на 1-3 градуса при небольших тепловых нагрузках`,
    link3d: "",
    baseUrl: "/catalog/ti-16-5.html",
  },
  "ti-28": {
    name: "ТИ 28",
    img: ti28Img,
    desc: "ТИ28 – имеет подключения подтрубков: ДУ100, ДУ125.",
    link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
    baseUrl: "/catalog/ti-28.html",
  },
  "ti-45": {
    name: "ТИ 45",
    img: ti45Img,
    desc: "ТИ45 – имеет подключения подтрубков: ДУ100, ДУ125",

    link3d: "https://disk.yandex.ru/d/3lo5g4MpzvYFcA",
    baseUrl: "/catalog/ti-45.html",
  },
  "ti-65": {
    name: "ТИ 65",
    img: ti65Img,
    desc: "ТИ65 – имеет подключения подтрубков: ДУ100, ДУ125.",
    link3d: "https://disk.yandex.ru/d/1c62zYE1I9yvyA",
    baseUrl: "/catalog/ti-65.html",
  },
  "ti-52": {
    name: "ТИ 52",
    img: ti52Img,
    desc: `ТИ52 – имеет подключение ДУ150.
    Применение: промышленные заводы, центральные тепловые пункты (ЦТП), центральные котельные.
    Масштаб обогрева - микрорайоны, большие торговые и бизнес центры (крупной квадратуры от 15 000 квадратных метров и более)`,
    link3d: "https://disk.yandex.ru/d/1c62zYE1I9yvyA",
    baseUrl: "/catalog/ti-52.html",
  },
  "ti-82": {
    name: "ТИ 82",
    img: ti82Img,
    desc: `ТИ82 – имеет подключение ДУ150. В отличие от ТИ52 имеет более удлиненную пластину, что позволяет удерживать больший перепад температур.
    Применение аналогичное ТИ52: промышленные заводы, центральные тепловые пункты (ЦТП), котельные микрорайонов.
    Зачастую применяется также в больших торговых и бизнес центрах (крупной квадратуры от 15 000 квадратных метров и более).`,
    link3d: "https://disk.yandex.ru/d/1c62zYE1I9yvyA",
    baseUrl: "/catalog/ti-82.html",
  },
  "ti-95": {
    name: "ТИ 95",
    img: ti95Img,
    desc: `ТИ95 – имеет подключения подтрубков: ДУ200, ДУ250.
    Применение: ТЭЦ. (Обогревается совокупность микрорайонов)`,

    link3d: "",
    baseUrl: "/catalog/ti-95.html",
  },
  "ti-116": {
    name: "ТИ 116",
    img: "",
    desc: `ТИ116 – имеет подключения подтрубков: ДУ200, ДУ250.
    Применение: ТЭЦ. (Обогревается совокупность микрорайонов)`,
    link3d: "",
    baseUrl: "/catalog/ti-116.html",
  },
};

/*
export const initialPartners = [
  {
    name: 'Краснодар',
    htmlData: {
      nameOfPartner: 'ООО \"Ютермо\"',
      telephoneNumbers: ['8 800 700-09-58', '+7 (905) 406-75-76'],
      site: 'https://utermo.ru/',
    },
  },
];
*/
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

export const schemesDg = [
  {
    id: 'vvoda',
    image: schVvoda,
    title: 'Узел ввода и учёта',
    intro: 'Узел ввода и учёта используется в следующих целях:',
    list: ['Ввод трубопроводов системы теплоснабжения в здание или сооружение;', 'Очистка теплоносителя;', 'Учёт поступающей тепловой энергии;', 'Регулировка расхода в соответствии с заданным графиком температуры.'],
    baseUrl: "/blochnye-teplovye-punkty/schemes/vvoda.html",
  },
  {
    id: 'so-zav',
    image: schSoZav,
    title: 'Узел отопления с зависимой схемой подключения',
    intro: 'Узел отопления с зависимой схемой подключения используется в следующих целях:',
    list: ['1234', '2345', '3456'],
    baseUrl: "/blochnye-teplovye-punkty/schemes/so-zav.html",
  },
  {
    id: 'so-nezav',
    image: schSoNezav,
    title: 'Узел отопления с независимой схемой подключения',
    intro: 'Узел отопления с независимой схемой подключения используется в следующих целях:',
    list: ['не1234', 'не2345', 'не3456'],
    baseUrl: "/blochnye-teplovye-punkty/schemes/so-nezav.html",
  },
  {
    id: 'gvs-one-step',
    image: schGvsOneStep,
    title: 'Узел ГВС одноступенчатая схема',
    intro: 'Узел ГВС одноступенчатая схема подключения используется в следующих целях:',
    list: ['не1234', 'не2345', 'не3456'],
    baseUrl: "/blochnye-teplovye-punkty/schemes/gvs-odn.html",
  },
  {
    id: 'gvs-two-step',
    image: schGvsTwoStep,
    title: 'Узел ГВС двухступенчатая схема',
    intro: 'Узел ГВС двухступенчатая схема подключения используется в следующих целях:',
    list: ['не1234', 'не2345', 'не3456'],
    baseUrl: "/blochnye-teplovye-punkty/schemes/gvs-two-step.html",
  },
   {
    id: 'gvs-reserve-pto',
    image: schGvsReserve,
    title: 'Узел ГВС с резервными теплообменниками',
    intro: 'Узел ГВС с резервными теплообменниками используется в следующих целях:',
    list: ['не1234', 'не2345', 'не3456'],
    baseUrl: "/blochnye-teplovye-punkty/schemes/gvs-reserve.html",
  },
]




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



/*
export const initialArticles = [
  {
    tags: ['gkh', 'prod'],
    linkPath: `/${blogPath}/plastinchatye-teploobmenniki-otopleniya.html`,
    heading: 'Пластинчатые теплообменники отопления',
    description: 'Производство теплообменников для отопления',
  },
  {
    tags: ['prod', 'food'],
    linkPath: `/${blogPath}/plastinchatyy-pasterizator.html`,
    heading: 'Пластинчатые пастеризаторы',
    description: 'Производство пластинчатых пастеризаторов пищевых жидкостей',
  },
  {
    tags: ['gkh', 'project', 'example'],
    linkPath: `/${blogPath}/plastinchatye-teploobmenniki-gvs.html`,
    heading: 'Пластинчатые теплообменники для гвс',
    description: 'Производство теплобменников горячего водоснабжения',
  },
  {
    tags: ['gkh'],
    linkPath: `/${blogPath}/preimushchestva-plastinchatykh-teploobmennikov.html`,
    heading: 'Преимущества пластинчатых теплообменников',
    description: 'Преимущества теплообменных аппаратов пластинчатого типа',
  },
  {
    tags: ['gkh', 'btp'],
    linkPath: `/${blogPath}/plastinchatye-teploobmenniki-otopleniya.html`,
    heading: '10Проектирование блочных тепловых пунктов',
    description: 'Квалифицированные инженеры завода по производству теплообменников спроектируют БТП',
  },
];
*/

