const { ROUTES } = require("./constants");


module.exports.categories = [
  {
    title: "Опоры силовые фланцевые граненые СФГ",
    h1: "Опоры силовые фланцевые граненые",
    staticData: {
      crumbName: "Опоры сфг",
    },
    type: 'sfg',
    filename: `${ROUTES['sfg'].substr(1)}index.html`
  },
  {
    title: "Опоры силовые прямостоячные граненые СПГ",
    h1: "Опоры силовые прямостоячные граненые",
    staticData: {
      crumbName: "Опоры спг",
    },
    type: 'spg',
    filename: `${ROUTES['spg'].substr(1)}index.html`
  },
  {
    title: "Опоры несиловые фланцевые граненые НФГ",
    h1: "Опоры несиловые фланцевые граненые",
    staticData: {
      crumbName: "Опоры нфг",
    },
    type: 'nfg',
    filename: `${ROUTES['nfg'].substr(1)}index.html`
  },
  {
    title: "Опоры несиловые прямостоячные граненые НПГ",
    h1: "Опоры несиловые прямостоячные граненые",
    staticData: {
      crumbName: "Опоры нпг",
    },
    type: 'npg',
    filename: `${ROUTES['npg'].substr(1)}index.html`
  },
  /*
  {
    name: "Высокомачтовые опоры",
    modClass: 'col-span-2 border-r-2 border-b-2'
  },
  {
    name: "Мачты со стационарной короной",
  },
  {
    name: "Мачты с мобильной короной",
  },
  {
    name: "Молниеотводы на базе граненых мачт",
  },
  {
    name: "Фундаменты под опоры",
    modClass: 'col-span-2 border-r-2 border-b-2'
  },*/
];
