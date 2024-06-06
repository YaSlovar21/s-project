

export default class FormStatic {
  constructor({formSubmitHandler, formCleanError, checherValidation}, formElement, formInputSelector) {
      this._formSubmitHandler = formSubmitHandler;
      this._formCleanError = formCleanError;
      this._formElement = formElement; //.popup__form
      this._inputSelector = formInputSelector;
      this._absolutePopup = this._formElement.querySelector('.popup-absolute');

      this._checker = checherValidation;
  }

  //собираем поля формы
  _getInputValues() {
      // достаём все элементы полей
      this._inputList = this._formElement.querySelectorAll(this._inputSelector); //'.popup__input'

      // создаём пустой объект
      this._formValues = {};

      // добавляем в этот объект значения всех полей
      this._inputList.forEach(input => {
        if (input.dataset.alias) {
          if (input.name==='moshnost') {
            return this._formValues[input.dataset.alias] = input.value;// +' '+ this._formElement.t_typesr1.value;
          }
          if (input.name==='rashod') {
            return this._formValues[input.dataset.alias] = input.value;// +' '+ this._formElement.t_typesr2.value;
          }
          this._formValues[input.dataset.alias] = input.value;
        } else {

          if (input.name === 'uzel') {
            this._formValues['Оборудование'] = Array.from(this._formElement.elements.uzel).filter((item)=>{
              return item.checked;
            }).map((item)=> {
              return item.dataset.aliasob;
            });
          } else {
            this._formValues[input.name] = input.value;
          }

        }
      });

      if (localStorage.getItem('clientId')) {
        this._formValues['clientId'] = localStorage.getItem('clientId');
      }
      this._formValues['page'] = window.location.pathname;
      console.log(this._formValues);
      // возвращаем объект значений
      return this._formValues;
  }


  cleanAll() {
      this._formElement.reset();
      this._formCleanError();
      if (this._absolutePopup.classList.contains('popup__form-fio_opened')) {
        console.log('Открыто!');
        this._absolutePopup.classList.remove('popup__form-fio_opened');
      }
  }

  setEventListeners() {
      this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
          if (this._checker()) {
            this._formSubmitHandler(this._getInputValues());
          }
      });
  }
}