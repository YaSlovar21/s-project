import Api from "../js/components/Api";
import CardProject from "../js/components/CardProject";
import Section from "../js/components/Section";


const sskApi = new Api({
    baseUrl: 'https://api.ssk22.ru',
    headers: {
        'Content-Type': 'application/json'
    }
})

const objectsSectionEl = document.querySelector('.object-section');

const objectsSect = new Section({ 
    data: null,
    renderer: (cardData) => {
        const card = new CardProject({
            ...cardData,
            handleProjectClick: (title, equipment) => {
                console.log('Это коллбэк из объекта', title, equipment)
            },
            cardTemplateSelector: '#card-object-template', 
            cardSelector: '.card'
        });
        const cardNode = card.generateCard();
        objectsSect.appendItem(cardNode);
    }
}, '.object-list')

const objectsMoreButton = document.querySelector('.objects-more-button');

async function handleMoreButtonClick() {
    //objectsSect.setIsLoading('true');
    const preloader = document.createElement('div');
    preloader.classList.add('p-4', 'font-medium');
    preloader.textContent = 'Загружаем...'
    objectsSect.appendItem(preloader);
    const objectsData = await sskApi.getSskObjects();
    objectsSectionEl.scrollIntoView({behavior: 'smooth'});
    //objectsSect.setIsLoading('false');
    objectsSect.clear();
    objectsSect.setData(objectsData);
  
    objectsSect.renderItems();
}

objectsMoreButton.addEventListener('click', async (evt)=> {
   objectsMoreButton.classList.add('hidden');
   await handleMoreButtonClick();
})