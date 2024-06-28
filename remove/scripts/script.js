import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { closePopUp } from "./utils.js";

//Seccion de profile
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//Edición de perfil
const popupProfile = document.querySelector("#popup-profile");
const popupNameProfile = popupProfile.querySelector(".popup__input-name");
const popupAboutProfile = popupProfile.querySelector(
  ".popup__input-description"
);
const confirmButtonProfile = popupProfile.querySelector("#btn-submit-profile");
const cancelButtonProfile = popupProfile.querySelector("#btn-close-profile");
const editButtonProfile = document.querySelector(".profile__edit-button");

//Agregar nuevo lugar
const popupPlace = document.querySelector("#place-popup");
const popupNamePlace = popupPlace.querySelector(".popup__add-name");
const popupUrlPlace = popupPlace.querySelector(".popup__add-adress");
const addButtonPlace = document.querySelector(".profile__add-button");
const cancelButtonPlace = popupPlace.querySelector("#btn-close-place");
const confirmButtonPlace = popupPlace.querySelector("#btn-submit-place");

//Overlay
const closeOverlayEdit = document.querySelector("#popup-overlay-edit");
const closeOverlayAdd = document.querySelector("#popup-overlay-add");
const closeOverlayImage = document.querySelector("#popup-overlay-image");

//Popup de imagen
const popupImage = document.querySelector("#image-popup");

//Sección para agregar tarjetas
const cardsContainer = document.querySelector(".elements");

//from FormValidator
const validationConfig = {
  formSelector: ".popup__edit",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input_type_error",
  errorSelector: ".popup__error",
};

export const initialCards = [
  {
    name: "Detroit Downtown",
    url: "https://images.unsplash.com/photo-1573112067224-58060384abd5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Estadio Ford",
    url: "https://images.unsplash.com/photo-1542385939-cac37e190818?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Desierto de Utah",
    url: "https://plus.unsplash.com/premium_photo-1697730073417-c32f239b5675?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ayuntamiento de Pasadena, CA",
    url: "https://images.unsplash.com/photo-1690002122693-bea650f7bdf5?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hollywood",
    url: "https://images.unsplash.com/photo-1581390114939-946f9a890a7f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicago Downtown",
    url: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

(function loadCards() {
  cardsContainer.innerHTML = "";
  initialCards.forEach((initialCard) => {
    const card = new Card(initialCard, "#template__elements", initialCards);
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
  });
})();

const validateFormProfile = new FormValidator(popupProfile, validationConfig);
validateFormProfile.enableValidation();

const validateFormCard = new FormValidator(popupPlace, validationConfig);
validateFormCard.enableValidation();

//Agrega nueva card
confirmButtonPlace.addEventListener("click", () => {
  //se crea un nuevo objeto con los valores de los inputs
  const newCard = {
    name: popupNamePlace.value,
    url: popupUrlPlace.value,
  };
  //se crea una nueva clase del obejor Card
  const card = new Card(newCard, "#template__elements", initialCards);
  //se genera la nueva tarjeta
  const cardElement = card.generateCard();
  //se inserta en el html
  cardsContainer.prepend(cardElement);
  //se inserta el obejto en el arreglo inicial
  initialCards.push(newCard);
  closePopUp(popupPlace, closeOverlayAdd);
});
