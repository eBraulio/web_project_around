const validationConfig = {
  formSelector: ".popup__edit",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input_type_error",
  errorSelector: ".popup__error",
};

//Clase FromValidator con constructor con dos parámetros
export class FormValidator {
  constructor(popup, config = validationConfig) {
    this._popup = popup.querySelector(".popup__edit");
    this._config = config;
  }
  // método privado para procesar el formulario
  _showError = (
    formElement,
    inputElement,
    errorMessage,
    inputErrorClass,
    errorClass
  ) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  // método privado para procesar el formulario
  _hideError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };
  // método privado para procesar el formulario
  _checkInputValidity = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
  ) => {
    if (!inputElement.validity.valid) {
      this._showError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        inputErrorClass,
        errorClass
      );
    } else {
      this._hideError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };
  // método privado para procesar el formulario
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  // método privado para activar botones
  _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute("disabled", true); //Evita subir form con Enter aún cuando los campos no pasen la validación
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute("disabled"); //Permite subir formcuando los campos pasen la validación
    }
  };
  // método privado para eventos
  _setEventListeners = (
    formElement,
    inputSelector,
    submitButtonSelector,
    inputErrorClass,
    errorClass,
    inactiveButtonClass
  ) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(
          formElement,
          inputElement,
          inputErrorClass,
          errorClass
        );
        this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  };
  //método público que activa la validación del formulario
  enableValidation = () => {
    const formList = Array.from(
      document.querySelectorAll(this._config.formSelector)
    );
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(
        formElement,
        this._config.inputSelector,
        this._config.submitButtonSelector,
        this._config.inputErrorClass,
        this._config.errorClass,
        this._config.inactiveButtonClass
      );
    });
  };
  //método para hacer reset de la validación del formulario
  resetValidation = () => {
    const inputList = Array.from(
      document.querySelectorAll(this._config.inputSelector)
    );
    const errorList = Array.from(
      document.querySelectorAll(this._config.errorSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.classList.remove(this._config.inputErrorClass);
    });
    errorList.forEach((errorElement) => {
      errorElement.classList.remove(this._config.errorClass);
    });
  };
}
