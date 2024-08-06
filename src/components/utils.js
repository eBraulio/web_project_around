const closeShowImageButton = document.querySelector(".popup__close-image");
const closeFormButton = document.querySelectorAll(".popup__close-form");
const formList = Array.from(document.querySelectorAll(".popup__edit-form"));
const popupProfileForm = document.querySelector("#popup__edit-form");
const inputNameUser = document.querySelector("#popup__input-name");
const inputAboutUser = document.querySelector("#popup__input-description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAvatarContainer = document.querySelector(".profile__avatar");
const profileAvatarForm = document.querySelector(".popup__form_avatar-profile");
const cardsSection = document.querySelector(".elements");
const popupCardsForm = document.querySelector("#popup__add-form");
const addCardsButton = document.querySelector(".profile__add-button");
const config = {
  formSelector: "#popup__edit-form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  inputErrorMessageClass: "popup__input_type_error",
};
export {
  closeShowImageButton,
  closeFormButton,
  formList,
  popupProfileForm,
  inputNameUser,
  inputAboutUser,
  profileName,
  profileDescription,
  profileAvatarContainer,
  profileEditButton,
  cardsSection,
  popupCardsForm,
  addCardsButton,
  profileAvatarForm,
  config,
};
