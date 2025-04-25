export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _isResponseOk(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
    }

    getSskObjects() {
        return fetch(`https://api.ssk22.ru/data/objects`, {
              headers: this._headers,
          })
          .then((response) => {
              return this._isResponseOk(response);
          })
    }

    getInitialNews() {
        return fetch(`https://api.ssk22.ru/news`, {
              headers: this._headers,
          })
          .then((response) => {
              return this._isResponseOk(response);
          })
      }

    sendCallForm(formDataJson) {
        return fetch(`${this._baseUrl}`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataJson),
            isBase64Encoded: false
        })
        .then((response) => {
            console.log(response);
            return this._isResponseOk(response);
        })
    }

    sendBigForm(formDataJson) {
      return fetch(`${this._baseUrl}`, {
        method : 'POST',
        headers: {

          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataJson),
        //isBase64Encoded: false
    })
    .then((response) => {
        return this._isResponseOk(response);
    })
  }
}
