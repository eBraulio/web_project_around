export class Card {
  constructor(data, cardSelector, array) {
    this._name = data.name;
    this._url = data.url;
    this._cardSelector = cardSelector;
    this._array = array;
  }

  //función para clonar la plantilla
  _getTemplate() {
    const newCard = document
      .querySelector(this._cardSelector)
      .content.querySelector(".template__element")
      .cloneNode(true);
    return newCard;
  }

  _setEventListeners() {
    this._popupImage = document.querySelector("#image-popup");
    this._popupOverlay = document.querySelector(".popup__overlay");

    this._element.addEventListener("click", (evt) => {
      //evento para funcionalidad del boton de like
      if (evt.target.classList.contains("element__like-button")) {
        evt.target.classList.toggle("element__like-button-active");
      }
      //evento para mostrar el popUp de la visualización de la imagen
      if (evt.target.classList.contains("element__image")) {
        this._showPopUpImage(this._popupImage, this._popupOverlay);
        const imageValue = this._popupImage.querySelector(
          ".popup__element-image"
        );
        imageValue.src = evt.target.currentSrc;
        imageValue.alt = evt.target.alt;
        const imageTitle = this._popupImage.querySelector(
          ".popup__element-title"
        );
        imageTitle.textContent = evt.target.alt;
        document.addEventListener("keydown", this._closePopUpImageEscapeKey);
      }
      //evento para funcionalidad del boton de eliminar
      if (evt.target.classList.contains("element__trash-icon")) {
        evt.target.closest(".template__element").remove();
      }
    });
  }
  //Función para mostrar el popUp de la visualización de la imagen
  _showPopUpImage(popup, overlay) {
    popup.classList.add("popup__opened");
    overlay.classList.add("popup__overlay");
  }

  _closePopUpImageEscapeKey(evt) {
    this._popupImage = document.querySelector("#image-popup");
    this._popupOverlay = document.querySelector(".popup__overlay");
    if (evt.key === "Escape") {
      this._popupImage.classList.remove("popup__opened");
      this._popupOverlay.classList.remove("popup__overlay");
    }
  }

  //función para crear la tarjeta
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__image").src = this._url;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__image").setAttribute("id", this._id);
    this._element.querySelector(".element__text").textContent = this._name;

    return this._element;
  }
}
