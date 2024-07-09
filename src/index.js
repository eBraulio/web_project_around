import "./page/index.css"; // agrega la importación del archivo principal de hojas de estilo
import { FormValidator } from "./components/FormValidator.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import {
  initialCards,
  formElement,
  formElementCard,
  elementCard,
  addFormElment,
  addButton,
  editButton,
} from "./components/utils.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";

// Cards iniciales
const popupImage = new PopupWithImage("#image-popup");
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item,
        {
          handlerCardClick: (imageSrc, title) => {
            popupImage.open(imageSrc, title);
            popupImage.setEventListener();
          },
        },
        ".template__element"
      );
      const cardElement = card.generateCard();
      section.setItem(cardElement);
    },
  },
  ".elements"
);
section.renderItems();

// Validación edit form
new FormValidator(
  {
    formSelector: "#popup__edit-form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__button-disabled",
    popupFormInputError: "popup__error",
    inputErrorClass: "popup__input_type_error",
  },
  formElement
).enableValidation();

// Validación add form
new FormValidator(
  {
    formSelector: "#popup__add-form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__button-disabled",
    popupFormInputError: "popup__error",
    inputErrorClass: "popup__input_type_error",
  },
  addFormElment
).enableValidation();

const userInfo = new UserInfo({
  nameProfile: ".profile__name",
  aboutProfile: ".profile__description",
});

const popupWithFormEdit = new PopupWithForm((data) => {
  userInfo.setUserInfo(data);
}, "#popup-profile");

editButton.addEventListener("click", () => {
  popupWithFormEdit.open();
});

const popupWithFormAdd = new PopupWithForm((inputValues) => {
  const newCard = new Card(
    { name: inputValues.title, link: inputValues.image },
    {
      handlerCardClick: (imageSrc, title) => {
        popupImage.open(imageSrc, title);
        popupImage.setEventListener();
      },
    },
    ".template__element"
  );
  const cardElment = newCard.generateCard();
  elementCard.insertBefore(cardElment, elementCard.firstChild);
}, "#place-popup"); //ok

addButton.addEventListener("click", () => {
  popupWithFormAdd.open();
});
