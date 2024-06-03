const dateNow = (new Date()).toString();
const {bpages} = require('./bpages');



/*
/kronshtejny-pod-svetilniki/
/opory-osveshcheniya/
/opory-osveshcheniya/opory-silovye-flancevye-granenye/
/opory-osveshcheniya/opory-silovye-pryamostoechnye-granenye/
/opory-osveshcheniya/opory-nesilovye-flancevye-granenye/
*/

module.exports.paths = [
    {
      path: '/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
].concat( bpages.map((item)=> {
  return {
    path: `/${item.fileName}`,
    lastmod: dateNow,
    priority: 0.7,
    changefreq: 'monthly'
  }
}))