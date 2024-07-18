const { ROUTES } = require("./constants");

const dateNow = (new Date()).toString();


const staticPages = Object.keys(ROUTES).map((route)=> {
  return {
    path: ROUTES[route],
    lastmod: dateNow,
    priority: 1,
    changefreq: 'monthly'
  }
})

module.exports.paths = [
    {
      path: '/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
].concat(staticPages);