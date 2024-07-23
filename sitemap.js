const { ROUTES } = require("./constants");

const dateNow = (new Date()).toString();


const staticPages = Object.keys(ROUTES).filter(i => !i.includes('File')).map((route)=> {
  return {
    path: ROUTES[route],
    lastmod: dateNow,
    priority: 1,
    changefreq: 'monthly'
  }
})

const staticFiles = Object.keys(ROUTES).filter(i => i.includes('File')).map((route)=> {
  return {
    path: ROUTES[route],
    lastmod: dateNow,
    priority: 0.7,
    changefreq: 'yearly'
  }
})

module.exports.paths = [
    {
      path: '/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
].concat(staticPages, staticFiles);