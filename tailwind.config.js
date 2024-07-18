/** @type {import('tailwindcss').Config} */

const path = require('path');

module.exports = {
  content: ["./src/**/*.html", "./src/*.html"],
  darkMode: ["class", "[data-mode='light']"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        ssk: {
          css: {
            '--tw-prose-body' : '#1a1a1a',
            '--tw-prose-headings' : '#1f1f1f',
            '--tw-prose-lead' : '#525252',
            '--tw-prose-links' : '#5F4D96',
            '--tw-prose-bold' : '#171717',
            '--tw-prose-counters' : '#737373',
            '--tw-prose-bullets' : '#7861C1',
            '--tw-prose-hr' : '#e5e5e5',
            '--tw-prose-quotes' : '#171717',
            '--tw-prose-quote-borders' : '#e5e5e5',
            '--tw-prose-captions' : '#737373',
            '--tw-prose-kbd' : '#171717',
            '--tw-prose-kbd-shadows' : '23 23 23',
            '--tw-prose-code' : '#171717',
            '--tw-prose-pre-code' : '#e5e5e5',
            '--tw-prose-pre-bg' : '#262626',
            '--tw-prose-th-borders' : '#d4d4d4',
            '--tw-prose-td-borders' : '#e5e5e5',
            '--tw-prose-invert-body' : '#d4d4d4',
            '--tw-prose-invert-headings' : '#fff',
            '--tw-prose-invert-lead' : '#a3a3a3',
            '--tw-prose-invert-bold' : '#fff',
            '--tw-prose-invert-counters' : '#a3a3a3',
            '--tw-prose-invert-bullets' : '#525252',
            '--tw-prose-invert-hr' : '#404040',
            '--tw-prose-invert-quotes' : '#f5f5f5',
            '--tw-prose-invert-quote-borders' : '#404040',
            '--tw-prose-invert-captions' : '#a3a3a3',
            '--tw-prose-invert-kbd' : '#fff',
            '--tw-prose-invert-kbd-shadows' : '255 255 255',
            '--tw-prose-invert-code' : '#fff',
            '--tw-prose-invert-pre-code' : '#d4d4d4',
            '--tw-prose-invert-pre-bg' : 'rgba(0,0,0,.5)',
            '--tw-prose-invert-th-borders' : '#525252',
            '--tw-prose-invert-td-borders' : '#404040',
            figure: {
              'margin-top': '.5em!important',
              'margin-bottom': '.5em!important'
            },
          },
        },
      }),
    
    screens: {
        'pc': {'max': '1537px'},
        // => @media (max-width: 1535px) { ... }
  
        'mvpc': {'max': '1441px'},
        // => @media (max-width: 1441px) { ... }
  
        'olpc': {'max': '1240px'},

        'laptop': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
  
        'mobile': {'max': '639px'},
        'mobilesm': {'max': '343px'},
        // => @media (max-width: 639px) { ... }
    },
    colors: {
      primary: {
        white: '#D1E2F1',
        lighterdouble: '#9FBCD9',
        lighter: '#6F97BA',
        light: '#46739C',
        DEFAULT: '#2D5F8B',
        dark: '#194A75',
        darker: '#0A365D',
        darkerdouble: '#042645',
        black: '#01172A'
      },
      secondary: {
        lighter: '#7E7BC4',
        light: '#5652A8',
        DEFAULT: '#3C3996',
        dark: '#27237F',
        darker: '#151264',
        
      },
      themewhite: {
        DEFAULT: '#E8F5FF',
      },
    },
    fontFamily: {
      ui: 'GolosUIWeb', 
      circe: 'Circe',
    },
    transitionDuration: {
      '500': '500ms',
    }
  }
},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}

