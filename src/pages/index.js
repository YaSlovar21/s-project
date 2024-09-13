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



const popupMenu = new Popup('.popup-menu');
popupMenu.setEventListeners();

const navMobileButton = document.querySelector('.nav__mobile-icon');
navMobileButton.addEventListener('click', () => {
    popupMenu.open();
    console.log('111');
});

/* MARKETING */
function goalCallback () {
    console.log('запрос в Метрику успешно отправлен');
  }
  document.addEventListener('copy', (evt)=> {
      ym(84773554,'reachGoal','copied', {path: evt.target.baseURI, el: evt.target.innerText}, goalCallback );
  });