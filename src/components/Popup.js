import {
  closeFormButton,
  closeShowImageButton,
  closeAddPlaceButton,
} from "./utils.js";
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    // this._overlay = document.querySelector(".popup__overlay"); //check
    this._overlayEdit = document.querySelector("#popup-overlay-edit");
    this._overlayAdd = document.querySelector("#popup-overlay-add");
    this._overlayImage = document.querySelector("#popup-overlay-image");
  }
  open() {
    this._popupElement.classList.add("popup__opened");
    // this._overlay.classList.add("popup__overlay-opened");
    this._overlayEdit.classList.add("popup__overlay-opened");
    this._overlayAdd.classList.add("popup__overlay-opened");
    this._overlayImage.classList.add("popup__overlay-opened");
  }
  close() {
    this._popupElement.classList.remove("popup__opened");
    // this._overlay.classList.remove("popup__overlay-opened");
    this._overlayEdit.classList.remove("popup__overlay-opened");
    this._overlayAdd.classList.remove("popup__overlay-opened");
    this._overlayImage.classList.remove("popup__overlay-opened");
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    // this._overlay.addEventListener("click", () => {
    //   this.close();
    // });
    this._overlayEdit.addEventListener("click", () => {
      this.close();
    });
    this._overlayAdd.addEventListener("click", () => {
      this.close();
    });
    this._overlayImage.addEventListener("click", () => {
      this.close();
    });
    //Opcion 1
    // closeFormButton.forEach((closeButton) => {
    //   closeButton.addEventListener("click", () => {
    //     this.close();
    //   });
    // });
    // Opcion 2
    // closeAddPlaceButton.addEventListener("click", () => {
    //   this.close();
    // });
    // Opcion 3
    //     this.closeFormButton.addEventListener("click", () => {
    //       this.close();
    //     });

    closeShowImageButton.addEventListener("click", () => {
      this.close();
    });
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}
