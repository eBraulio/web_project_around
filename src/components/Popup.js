import { closeFormButton, closeShowImageButton } from "./utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._overlayEdit = document.querySelector("#popup-overlay-edit");
    this._overlayAdd = document.querySelector("#popup-overlay-add");
    this._overlayImage = document.querySelector("#popup-overlay-image");
    this._overlayConfirmation = document.querySelector(
      "#popup-overlay-confirmation"
    );
    this._overlayAvatar = document.querySelector("#popup-overlay-avatar");
  }
  handleOpen() {
    this._popupElement.classList.add("popup__opened");
    this._overlayEdit.classList.add("popup__overlay-opened");
    this._overlayAdd.classList.add("popup__overlay-opened");
    this._overlayImage.classList.add("popup__overlay-opened");
    this._overlayConfirmation.classList.add("popup__overlay-opened");
    this._overlayAvatar.classList.add("popup__overlay-opened");
  }
  handleClose() {
    this._popupElement.classList.remove("popup__opened");
    this._overlayEdit.classList.remove("popup__overlay-opened");
    this._overlayAdd.classList.remove("popup__overlay-opened");
    this._overlayImage.classList.remove("popup__overlay-opened");
    this._overlayConfirmation.classList.remove("popup__overlay-opened");
    this._overlayAvatar.classList.remove("popup__overlay-opened");
  }
  _handleEscapeKey(evt) {
    if (evt.key === "Escape") {
      this.handleClose();
    }
  }
  setEventListeners() {
    this._overlayEdit.addEventListener("click", () => {
      this.handleClose();
    });
    this._overlayAdd.addEventListener("click", () => {
      this.handleClose();
    });
    this._overlayImage.addEventListener("click", () => {
      this.handleClose();
    });
    this._overlayConfirmation.addEventListener("click", () => {
      this.handleClose();
    });
    this._overlayAvatar.addEventListener("click", () => {
      this.handleClose();
    });
    //Opcion 1
    closeFormButton.forEach((closeButton) => {
      closeButton.addEventListener("click", () => {
        this.handleClose();
      });
    });
    closeShowImageButton.addEventListener("click", () => {
      this.handleClose();
    });
    document.addEventListener("keydown", (evt) => {
      this._handleEscapeKey(evt);
    });
  }
}

// import { closeFormButton, closeShowImageButton } from "./utils.js";

// export default class Popup {
//   constructor(popupSelector) {
//     this._popupElement = document.querySelector(popupSelector);
//     this._overlayEdit = document.querySelector("#popup-overlay-edit");
//     this._overlayAdd = document.querySelector("#popup-overlay-add");
//     this._overlayImage = document.querySelector("#popup-overlay-image");
//   }
//   open() {
//     this._popupElement.classList.add("popup__opened");
//     this._overlayEdit.classList.add("popup__overlay-opened");
//     this._overlayAdd.classList.add("popup__overlay-opened");
//     this._overlayImage.classList.add("popup__overlay-opened");
//   }
//   close() {
//     this._popupElement.classList.remove("popup__opened");
//     this._overlayEdit.classList.remove("popup__overlay-opened");
//     this._overlayAdd.classList.remove("popup__overlay-opened");
//     this._overlayImage.classList.remove("popup__overlay-opened");
//   }
//   _handleEscClose(evt) {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }
//   setEventListeners() {
//     this._overlayEdit.addEventListener("click", () => {
//       this.close();
//     });
//     this._overlayAdd.addEventListener("click", () => {
//       this.close();
//     });
//     this._overlayImage.addEventListener("click", () => {
//       this.close();
//     });
//     //Opcion 1
//     closeFormButton.forEach((closeButton) => {
//       closeButton.addEventListener("click", () => {
//         this.close();
//       });
//     });
//     closeShowImageButton.addEventListener("click", () => {
//       this.close();
//     });
//     document.addEventListener("keydown", (evt) => {
//       this._handleEscClose(evt);
//     });
//   }
// }
