import './tw.css';
import './index.css';
import './popup.css';

import '../images/favicon.svg';


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