export const initialCards = [
  {
    name: "Detroit Downtown",
    link: "https://images.unsplash.com/photo-1573112067224-58060384abd5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Estadio Ford",
    link: "https://images.unsplash.com/photo-1542385939-cac37e190818?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Desierto de Utah",
    link: "https://plus.unsplash.com/premium_photo-1697730073417-c32f239b5675?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ayuntamiento de Pasadena, CA",
    link: "https://images.unsplash.com/photo-1690002122693-bea650f7bdf5?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hollywood",
    link: "https://images.unsplash.com/photo-1581390114939-946f9a890a7f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicago Downtown",
    link: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export const elementContainder = document.querySelector(".elements");
export const popupOpenImage = document.querySelector("#image-popup");
export const closeShowImageButton = document.querySelector(
  ".popup__close-image"
);
export const closeAddPlaceButton = document.querySelector("#btn-close-place");
export const profileButton = document.querySelector(".profile__edit-button");
export const profileAddButton = document.querySelector(".profile__add-button");
export const closeFormButton = document.querySelectorAll(".popup__close-form");
export const formList = Array.from(
  document.querySelectorAll(".popup__edit-form")
);
export const saveProfileButton = document.querySelector("#btn-close-profile"); //
export const addImageButton = document.querySelector("#btn-submit-place"); //
export const formInputName = document.querySelector("#popup__input-name");
export const formInputAboutme = document.querySelector(
  "#popup__input-description"
);
export const settings = {
  formSelector: "#popup__edit-form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input_type_error",
};
