import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(handlerFormSubmit, popupElements) {
    super(popupElements);
    this._handlerFormSubmit = handlerFormSubmit;
    this._form = this.popup.querySelector(".popup__edit-form");
    this.setEventListener();
  }

  _getInputValues(form) {
    const data = new FormData(form);
    const dataObject = Object.fromEntries(data.entries());
    return dataObject;
  }

  setEventListener() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues(evt.target);
      this._handlerFormSubmit(inputValues);

      this.close();
    });
    super.setEventListener();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
