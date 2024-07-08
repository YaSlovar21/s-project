const ROUTES = {
    brackets: '/kronshtejny-pod-svetilniki/',
  
    oporyMain: '/opory-osveshcheniya/',
    sfg: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/',
    sfg400: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-4-sfg-400-c/',
    sfg700: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-7-sfg-700-c/',
    sfg1000: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-10-sfg-1000-c/',
    sfg1300: '/opory-osveshcheniya/opory-silovye-flancevye-granenye/mso-fg-13-sfg-1300-c/',
  
    spg: '/opory-osveshcheniya/opory-silovye-pryamostoechnye-granenye/',
    nfg: '/opory-osveshcheniya/opory-nesilovye-flancevye-granenye/',
    npg: '/opory-osveshcheniya/opory-nesilovye-pryamostoechnye-granenye/',
  
    machty: '/vysokomachtovye-opory/',
  
    fundamenty: '/fundamenty-pod-opory/',
  
    about: '/about/',
    news: '/novosti-proizvodstva/',
    contacts: '/contacts/',
    techDocs: '/proektirovshchikam/',
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
  
  "A": 'Размер фланца',
  "B": 'Межосевое расстояние крепёжных деталей во фланце',
  "V": 'Высота лючка',
  "G": 'Ширина лючка',

  "d": 'Номинальный диаметр резьбы крепёжных изделий',
  "n": 'Количество отверстий во фланце под крепежные изделия',

  "id": 'id',
  
}

module.exports = {
  ROUTES,
  techNames
}