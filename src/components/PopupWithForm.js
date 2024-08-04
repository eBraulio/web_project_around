import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__edit-form");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
    this._getInputValues = this._getInputValues.bind(this);
    this._formButton = this._popupElement.querySelector(".popup__save-button");
  }
  _getInputValues() {
    this.formValues = {};
    this._inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });

    return this.formValues;
  }
  handleOpen(contentFirstInput, contentSecondInput) {
    this._formButton.textContent = "Guardar";
    super.handleOpen();
    this._inputList[0].value = contentFirstInput || "";
    if (this._inputList[1]) {
      this._inputList[1].value = contentSecondInput || "";
    }
  }
  handleClose() {
    super.handleClose();
    this._formElement.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._formButton.textContent = "Guardando...";
      const close = () => this.handleClose();
      this.handleFormSubmit(this._getInputValues(), close);
    });
  }
}

// export default class PopupWithForm extends Popup {
//   constructor(popupSelector, handleFormSubmit) {
//     super(popupSelector);
//     this.handleFormSubmit = handleFormSubmit;
//     this._formElement = this._popupElement.querySelector(".popup__edit-form");
//     this._inputList = Array.from(
//       this._formElement.querySelectorAll(".popup__input")
//     );
//     this._getInputValues = this._getInputValues.bind(this);
//   }
//   _getInputValues() {
//     this.formValues = {};
//     this._inputList.forEach((input) => {
//       this.formValues[input.name] = input.value;
//     });

//     return this.formValues;
//   }
//   close() {
//     super.close();
//     this._formElement.reset();
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     this._formElement.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//       this.handleFormSubmit(this._getInputValues());
//     });
//   }
// }
