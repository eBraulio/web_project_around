export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
    this._formElement.addEventListener("reset", () => {
      this._toggleButtonState();
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.inputErrorMessageClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.inputErrorMessageClass);
    errorElement.textContent = " ";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  enableValidation() {
    this._setEventListeners();
  }
}

// //Clase FromValidator con constructor con dos parámetros
// export default class FormValidator {
//   constructor(formElement, config) {
//     this._formElement = formElement;
//     this._settings = config;

//     this._inputList = Array.from(
//       this._formElement.querySelectorAll(this._settings.inputSelector)
//     );
//     this._submitButton = this._formElement.querySelector(
//       this._settings.submitButtonSelector
//     );
//   }
//   //método público que activa la validación del formulario
//   enableValidation() {
//     this._formElement.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });
//     this._setEventListeners();
//   }
//   // método privado para eventos
//   _setEventListeners() {
//     this._toggleButtonState();
//     this._inputList.forEach((inputElement) => {
//       inputElement.addEventListener("input", () => {
//         this._checkInputValidity(inputElement);
//         this._toggleButtonState();
//       });
//     });
//   }
//   // método privado para procesar el formulario
//   _checkInputValidity(inputElement) {
//     if (!inputElement.validity.valid) {
//       this._showInputError(inputElement, inputElement.validationMessage);
//     } else {
//       this._hideInputError(inputElement);
//     }
//   }
//   // método privado para procesar el formulario
//   _hasInvalidInput() {
//     return this._inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   }
//   // método privado para activar botones
//   _toggleButtonState() {
//     if (this._hasInvalidInput(this._inputList)) {
//       this._submitButton.classList.add(this._settings.inactiveButtonClass);
//       this._submitButton.setAttribute("disabled", true); //Evita subir form con Enter cuando los campos no pasen la validación
//     } else {
//       this._submitButton.classList.remove(this._settings.inactiveButtonClass);
//       this._submitButton.removeAttribute("disabled"); //Permite subir form cuando los campos pasen la validación
//     }
//   }
//   // método privado para procesar el formulario
//   _showInputError(inputElement, errorMessage) {
//     this._errorElement = this._formElement.querySelector(
//       `#${inputElement.id}-error`
//     );
//     this._errorElement.textContent = errorMessage;
//     inputElement.classList.add(this._settings.inputErrorClass);
//     this._errorElement.classList.add(this._settings.errorClass);
//   }
//   // método privado para procesar el formulario
//   _hideInputError(inputElement) {
//     this._errorElement = this._formElement.querySelector(
//       `#${inputElement.id}-error`
//     );
//     this._errorElement.textContent = "";
//     inputElement.classList.remove(this._settings.inputErrorClass);
//     this._errorElement.classList.remove(this._settings.errorClass);
//   }
//   //método para hacer reset de la validación del formulario
//   resetValidation() {
//     this._inputList.forEach((inputElement) => {
//       this._hideInputError(inputElement);
//     });
//     this._toggleButtonState();
//   }
// }
