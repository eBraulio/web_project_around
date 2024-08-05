import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen(link, name) {
    super.handleOpen();

    this._image = document.querySelector(".popup__element-image");
    this._title = document.querySelector(".popup__element-title");

    this._image.alt = `Fotografia de ${name}`;
    this._image.src = link;
    this._title.textContent = name;
  }
}
