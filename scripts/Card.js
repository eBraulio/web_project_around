export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._url = data.url;
    this._cardSelector = cardSelector;
  }

  //Función para clonar plantilla
  _getTemplate() {
    const newCard = document
      .querySelector(this._cardSelector)
      .content.querySelector(".template__element")
      .cloneNode(true);
    return newCard;
  }
  //métodos privados para cada controlador de eventos
  _setEventListeners() {
    this._popupImage = document.querySelector("#image-popup");
    this._popupOverlay = document.querySelector(".popup__overlay");

    this._element.addEventListener("click", (evt) => {
      //Botón de like
      if (evt.target.classList.contains("element__like-button")) {
        evt.target.classList.toggle("element__like-button-active");
      }
      //PopUp de la visualización de la imagen
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
      //Eliminar mediante X
      if (evt.target.classList.contains("element__trash-icon")) {
        evt.target.closest(".template__element").remove();
      }
    });
  }
  //Función para mostrar popup de la imagen
  _showPopUpImage(popup, overlay) {
    popup.classList.add("popup__opened");
    overlay.classList.add("popup__overlay");
  }
  //Función para cerrar con ESC
  _closePopUpImageEscapeKey(evt) {
    this._popupImage = document.querySelector("#image-popup");
    this._popupOverlay = document.querySelector(".popup__overlay");
    if (evt.key === "Escape") {
      this._popupImage.classList.remove("popup__opened");
      this._popupOverlay.classList.remove("popup__overlay");
    }
  }

  //método público que devuelve un elemento card
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__image").src = this._url;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;

    return this._element;
  }
}
