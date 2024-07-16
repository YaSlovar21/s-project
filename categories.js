const { ROUTES } = require("./constants");


module.exports.categories = [
  {
    title: "Опоры силовые фланцевые граненые СФГ",
    h1: "Опоры силовые фланцевые граненые",

    itemName: "Силовая фланцевая грененая опора",
    gost1: "mso-fg",

    staticData: {
      crumbName: "Опоры сфг",
    },
    type: 'sfg',
    filename: `${ROUTES['sfg'].substr(1)}index.html`
  },
  {
    title: "Опоры силовые прямостоечные граненые СПГ",
    h1: "Опоры силовые прямостоечные граненые",
    
    itemName: "Силовая прямостоечная грененая опора",
    gost1: "mso-pg",

    staticData: {
      crumbName: "Опоры спг",
    },
    type: 'spg',
    filename: `${ROUTES['spg'].substr(1)}index.html`
  },
  {
    title: "Опоры несиловые фланцевые граненые НФГ",
    h1: "Опоры несиловые фланцевые граненые",
    itemName: "Несиловая фланцевая грененая опора",
    gost1: "mno-fg",

    staticData: {
      crumbName: "Опоры нфг",
    },
    type: 'nfg',
    filename: `${ROUTES['nfg'].substr(1)}index.html`
  },
  {
    title: "Опоры несиловые прямостоечные граненые НПГ",
    h1: "Опоры несиловые прямостоечные граненые",
    itemName: "Силовая прямостоечная грененая опора",
    gost1: "mno-pg",
    
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
