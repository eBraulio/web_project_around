import { popupOpenImage, closeShowImageButton } from "./utils";
export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this.handleCardClick = handleCardClick;
  }
  //Función para clonar plantilla
  _getTemplate() {
    this._cardElement = document
      .querySelector("#template__elements")
      .content.querySelector(".template__element")
      .cloneNode(true);

    return this._cardElement;
  }

  _setProperties() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector(".element__image");
    this._cardImage.alt = `Fotografia de ${this._name}`;
    this._cardImage.src = this._link;
    this._cardTitle = this._card.querySelector(".element__text").textContent =
      this._name;
    this._buttonLikeCard = this._card.querySelector(".element__like-button");
    this._buttonDeleteCard = this._card.querySelector(".element__trash-icon");
  }

  _handleLikeBtn() {
    this._buttonLikeCard.classList.toggle("element__like-button-active");
  }
  _handleDeleteBtn() {
    this._card.remove();
  }
  handleOpenCard() {
    this.handleCardClick(this._cardTitle, this._link);
  }

  _setEventListeners() {
    this._buttonLikeCard.addEventListener("click", () => {
      this._handleLikeBtn();
    });
    this._buttonDeleteCard.addEventListener("click", () => {
      this._handleDeleteBtn();
    });
    this._cardImage.addEventListener("click", () => {
      this.handleOpenCard();
    });
  }

  generateCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
