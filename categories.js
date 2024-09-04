const { ROUTES } = require("./constants");


const categories = [
  {
    title: "Опоры силовые фланцевые граненые СФГ",
    h1: "Опоры СФГ",

    itemName: "Силовая фланцевая грененая опора",
    gost1: "mso-fg",

    staticData: {
      crumbName: "Опоры сфг",
    },
    type: 'sfg',
    filename: `${ROUTES['sfg'].substr(1)}index.html`,
    route: ROUTES['sfg'],
    pathGenerator: (P, H, DB) => {
      return `/catalog/opory-sfg/sfg-${P}-${Number(H)/1000}-${DB}.html`
    },
    nameGenerator: null,
  },
  {
    title: "Опоры силовые прямостоечные граненые СПГ",
    h1: "Опоры СПГ",
    
    itemName: "Силовая прямостоечная грененая опора",
    gost1: "mso-pg",

    staticData: {
      crumbName: "Опоры спг",
    },
    type: 'spg',
    filename: `${ROUTES['spg'].substr(1)}index.html`,
    route: ROUTES['spg'],
    pathGenerator: (P, H, DB) => {
      return `/catalog/opory-spg/spg-${P}-${Number(H)/1000}-${DB}.html`
    },
    nameGenerator: null,
  },
  {
    title: "Опоры несиловые фланцевые граненые НФГ",
    h1: "Опоры НФГ",
    itemName: "Несиловая фланцевая грененая опора",
    gost1: "mno-fg",

    staticData: {
      crumbName: "Опоры нфг",
    },
    type: 'nfg',
    route: ROUTES['nfg'],
    filename: `${ROUTES['nfg'].substr(1)}index.html`,
    pathGenerator: (P, H, DB) => {
      return `/catalog/opory-nfg/nfg-${Number(H)/1000}-${DB}.html`
    },
    nameGenerator: null,
  },
  {
    title: "Опоры несиловые прямостоечные граненые НПГ",
    h1: "Опоры НПГ",
    itemName: "Силовая прямостоечная грененая опора",
    gost1: "mno-pg",
    
    staticData: {
      crumbName: "Опоры нпг",
    },
    type: 'npg',
    route: ROUTES['npg'],
    filename: `${ROUTES['npg'].substr(1)}index.html`,
    pathGenerator: (P, H, DB) => {
      return `/catalog/opory-npg/npg-${Number(H)/1000}-${DB}.html`
    },
    nameGenerator: null,
  },

  {
    title: "Опоры МСО-ФГ ГОСТ силовые фланцевые граненые",
    h1: "Опоры МСО-ФГ",

    itemName: "Силовая фланцевая грененая опора",
    gost1: "mso-fg",

    staticData: {
      crumbName: "Опоры мсо-фг",
    },
    type: 'sfg', ///ГДЕ ИСПОЛЬЗУЕТСЯ,??????Template execution failed: Error: Cannot find module './cat-mso-fg.png'
    filename: `${ROUTES['msofg'].substr(1)}index.html`,
    route: ROUTES['msofg'],
    pathGenerator: (P, H, DB) => {
      return `/catalog/opory-mso-fg/mso-fg-${Number(P)/100}-${Number(H)/1000}-${DB}.html`
    },
    nameGenerator: (P, H, DB) => {
      return `МСО-ФГ-${Number(P)/100}-${Number(H)/1000}`
    },
  },

  {
    title: "Опоры МНО-ФГ ГОСТ несиловые фланцевые граненые",
    h1: "Опоры МНО-ФГ",

    itemName: "Несиловая фланцевая грененая опора",
    gost1: "mno-fg",

    staticData: {
      crumbName: "Опоры мно-фг",
    },
    type: 'nfg',
    filename: `${ROUTES['mnofg'].substr(1)}index.html`,
    route: ROUTES['mnofg'],
    pathGenerator: (P, H, DB) => {
      return `/catalog/opory-mno-fg/mno-fg-${Number(H)/1000}-${DB}.html`
    },
    nameGenerator: (P, H, DB) => {
      return `МНО-ФГ-${Number(H)/1000}-02(05)-Ц`
    },
  }
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


const categoriesPageOpory = [
  {
    title: "Опоры силовые фланцевые граненые",
    type: 'sfg',
  },
  {
    title: "Опоры несиловые фланцевые граненые",
    type: 'nfg',
  },
  {
    title: "Опоры силовые прямостоечные граненые",
    type: 'spg',
  },
  {
    title: "Опоры несиловые прямостоечные граненые",
    type: 'npg',
  }
];

module.exports = {
  categoriesPageOpory,
  categories
}