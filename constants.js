const ROUTES = {
    catalog: '/catalog/',
    oporyMain: '/opory-osveshcheniya/',
    /*sfg: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/',
    spg: '/opory-osveshcheniya/opory-silovye-pryamostoechnye-granenye/',
    nfg: '/opory-osveshcheniya/opory-nesilovye-flancevye-granenye/',
    npg: '/opory-osveshcheniya/opory-nesilovye-pryamostoechnye-granenye/',*/
    sfg: '/catalog/opory-sfg/',
    spg: '/catalog/opory-spg/',
    nfg: '/catalog/opory-nfg/',
    npg: '/catalog/opory-npg/',

    msofg: '/catalog/opory-mso-fg/',
    mnofg: '/catalog/opory-mno-fg/',

    machty: '/vysokomachtovye-opory/',
    fundamenty: '/opory-osveshcheniya/fundamenty-pod-opory/',
    brackets: '/opory-osveshcheniya/kronshtejny-pod-svetilniki/',
    about: '/about/',
    uslugiAndEquip: '/about/factory-equipment/',
    ourValues: '/about/nashi-cennosti/',
    //ourDocs: '/about/documents/',
    news: '/news/',
    contacts: '/contacts/',
    techDocs: '/proektirovshchikam/',

    //FILES
    priceFile: '/docs/price-stankosteelconstr.pdf',
    oprosniiFile: '/docs/oprosnii-opory.pdf',
    stoFile: '/docs/sto_stankostalkonstrukciya_akt.pdf',
};

const techNames = {
  "H": 'Высота опоры (надземной части) (H)',
  "h1": 'Высота фундамента (подземной части)',
  "Dh": '⌀ в нижней части опоры',
  "Db": '⌀ в вехней части опоры',

  "H1": 'Высота приложения максимального горизонтального усилия (H1)', //только для силовых
  "P": 'Максимальное горизонтальное усилие в точке опоры на высоте (P)',

  "Massa": 'Масса',
  "Name": 'Название',
  "metalThin": 'Толщина металла',
  
  "A": 'Размер фланца',
  "B": 'Межосевое расстояние крепёжных деталей во фланце',
  "V": 'Высота лючка',
  "G": 'Ширина лючка',

  "d": 'Номинальный диаметр резьбы крепёжных изделий',
  "n": 'Количество отверстий во фланце под крепежные изделия',

  "id": 'id',
}

const featuresForCats = {
  'sfg' : ['Возможность подвески СИП', 'Повышенная толщина металла', 'Усиленный фланец для крепления к фундаменту'],
  'nfg' : ['Без возможности подвески СИП', 'Экономия на толщине металла', 'Фланцевое крепление к поверхности'],
  'spg' : ['Возможность подвески СИП', 'Повышенная толщина металла', 'Крепление к поверхности не через закладной фундамент'],
  'npg' : ['Без возможности подвески СИП', 'Экономия на толщине металла', 'Крепление к поверхности не через закладной фундамент'],
}

const standartClasses = {
  popupImageClass: 'popup-image-item',
  ctaButtonClass: 'cta-button',
}

module.exports = {
  ROUTES,
  techNames,
  standartClasses,
  featuresForCats
}