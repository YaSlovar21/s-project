const dateNow = (new Date()).toString();
const {bpages} = require('./bpages');

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