import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.handleCardClick = this.open.bind(this);
  }
  open(name, link) {
    this._showImage = document.querySelector(".popup__element-image");
    this._showSubtitle = document.querySelector(".popup__element-title");
    this._showImage.alt = `Fotografia de ${name}`;
    this._showImage.src = link;
    this._showSubtitle.textContent = name;
    super.open();
  }
}
