const template = document.querySelector("#template__elements").content;
export class Card {
  constructor(data, { handlerCardClick }, cardSelector) {
    this._image = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handlerCardClick = handlerCardClick;
  }

  _getTemplate() {
    const cardElement = template
      .querySelector(this._cardSelector)
      .cloneNode(true);
    return cardElement;
  }

  _handleRemove() {
    this._element.remove();
  }

  _handleLike() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button-active");
  }

  _setEventListener() {
    this._element
      .querySelector(".element__trash-icon")
      .addEventListener("click", () => {
        this._handleRemove();
      });

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    this._element.addEventListener("click", () => {
      this._handlerCardClick(this._image, this._name);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__image").src = this._image;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;
    this._setEventListener();

    return this._element;
  }
}
