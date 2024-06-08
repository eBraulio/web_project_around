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
    this._element.querySelector(".element__text").alt = this._title;
    this._element.querySelector(".element__text").textContent = this._text;

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => this._activeLike());

    this._element
      .querySelector(".element__trash-icon")
      .addEventListener("click", () => this._trashCard());

    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => this._zoomImage());

    return this._element;
  }

  //métodos privado para cada controlador de eventos
  _activeLike() {
    const buttonLike = this._element.querySelector(".element__like-button");
    if (buttonLike.classList.contains("active")) {
      buttonLike.classList.remove("element__like-button-active");
    } else {
      buttonLike.classList.toggle("element__like-button-active");
    }
  }

  //métodos privado para cada controlador de eventos
  _trashCard() {
    this._buttonTrash = this._element.querySelector(".element__trash-icon");
    this._element.remove(this._buttonTrash);
  }

  //métodos privado para cada controlador de eventos
  _zoomImage() {
    this._imagePopout = document.querySelector("#image-popup");
    this._overlayPopout = document.querySelector("#popup-overlay-image");

    this._imagePopout.classList.add("popup__opened");
    this._overlayPopout.classList.add("popup__overlay");

    document.querySelector(".popup__element-image").src =
      this._element.querySelector(".element__image").src;
    document.querySelector(".popup__element-image").alt =
      this._element.querySelector(".element__text").textContent;
    document.querySelector(".popup__element-title").textContent =
      this._element.querySelector(".element__text").textContent;

    document.addEventListener("keydown", (evt) => this._escapeKeyClose(evt));

    return this._imagePopout;
  }

  //métodos privado para cada controlador de eventos
  _escapeKeyClose(evt) {
    if (evt.key === "Escape") {
      this._imagePopout.classList.remove("popup__opened");
      this._overlayPopout.classList.remove("popup__overlay");
    }
    document.removeEventListener("keydown", this._escapeKeyClose);
  }
}
