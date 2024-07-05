import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(image, name) {
    const imageElement = this.popup.querySelector(".popup__element-image");
    const nameElement = this.popup.querySelector(".popup__element-title");
    imageElement.src = image;
    imageElement.alt = name;
    nameElement.textContent = name;
    super.open();
  }
}
