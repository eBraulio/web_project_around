//Crea la clase Card
export default class Card {
  constructor(data, cardSelector) {
    this._text = data.text;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }

  //métodos privado para cada controlador de eventos
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".template__element")
      .cloneNode(true);

    return cardElement;
  }

  //método público que devuelve un elemento card
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__image").src = this._image;
    this._element.querySelector(".element__text").textContent = this._text;

    this._setEventListeners();

    return this._element;
  }

  //métodos privado para cada controlador de eventos
  _setEventListeners() {
    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._handleMessageClick();
      });
  }

  //métodos privado para cada controlador de eventos
  _handleMessageClick() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button-active");
  }
}
