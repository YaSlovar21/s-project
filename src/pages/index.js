import './tw.css';
import './index.css';
import './popup.css';

import '../images/favicon.svg';

import '../userfiles/oprosnii-opory.pdf';
import '../userfiles/price-stankosteelconstr.pdf';
import '../userfiles/sto_stankostalkonstrukciya_akt.pdf';

import './tw.css';
import './index.css';


import '../images/favicon.svg';
import Popup from '../js/components/Popup';
import { gsap, ScrollTrigger } from "gsap/all";


const popupMenu = new Popup('.popup-menu');
popupMenu.setEventListeners();

const navMobileButton = document.querySelector('.nav__mobile-icon');
navMobileButton.addEventListener('click', () => {
    popupMenu.open();
    console.log('111');
});

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger:{
      trigger: '.panel',
      start: "top center",
      end: "top 20%",
      pin: false,
      snap: 0.1,
      scrub: 0.3,
    }
});

tl.from('.panel', {
    scale: 1.1,
}).fromTo('.svg-plus-in svg', {
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    rotation: -70,
}, {
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
    rotation: 0,
}, "-=60%")



/* MARKETING */
function goalCallback () {
    console.log('запрос в Метрику успешно отправлен');
  }
  document.addEventListener('copy', (evt)=> {
      ym(88973338,'reachGoal','copied', {path: evt.target.baseURI, el: evt.target.innerText}, goalCallback );
  });