// export const elementContainder = document.querySelector(".elements");
// export const popupOpenImage = document.querySelector("#image-popup");
export const closeShowImageButton = document.querySelector(
  ".popup__close-image"
);
// export const closeAddPlaceButton = document.querySelector("#btn-close-place");
// export const profileButton = document.querySelector(".profile__edit-button");
// export const profileAddButton = document.querySelector(".profile__add-button");
export const closeFormButton = document.querySelectorAll(".popup__close-form");
export const formList = Array.from(
  document.querySelectorAll(".popup__edit-form")
);
// export const saveProfileButton = document.querySelector("#btn-close-profile"); //
// export const addImageButton = document.querySelector("#btn-submit-place"); //
// export const formInputName = document.querySelector("#popup__input-name");
// export const formInputAboutme = document.querySelector(
//   "#popup__input-description"
// );
// export const avatarImage = document.querySelector(".profile__avatar-image");
// export const settings = {
//   formSelector: "#popup__edit-form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button-disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__input_type_error",
// };

////////

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
