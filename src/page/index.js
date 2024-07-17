import "./index.css";
import logoSrc from "../images/vector/header__logo.svg";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  elementContainder,
  formList,
  profileButton,
  profileAddButton,
  settings,
  formInputName,
  formInputAboutme,
} from "../components/utils.js";
import PopupWithImage from "../components/PopupWithImage.js";

const popupImage = new PopupWithImage("#image-popup");
popupImage.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, popupImage.handleCardClick);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  elementContainder
);
cardList.renderItems();

function validationForm() {
  formList.forEach((formElement) => {
    const formsValidator = new FormValidator(formElement, settings);
    formsValidator.enableValidation();
  });
}
function resetValidationForm() {
  formList.forEach((formElement) => {
    const formsValidator = new FormValidator(formElement, settings);
    formsValidator.resetValidation();
  });
}
function toggleButtonForm() {
  formList.forEach((formElement) => {
    const toggleButton = new FormValidator(formElement, settings);
    toggleButton._toggleButtonState();
  });
}

const userInfo = new UserInfo({
  user: ".profile__name",
  job: ".profile__description",
});

const popupProfile1 = new PopupWithForm("#popup-profile", (inputs) => {
  userInfo.setUserInfo({ name: inputs.name, aboutme: inputs.aboutme });
  popupProfile1.close();
});

const popupAddImage1 = new PopupWithForm("#place-popup", (inputs) => {
  const addCardElement = new Card(
    inputs.place,
    inputs.url,
    popupImage.handleCardClick
  );
  const cardElement = addCardElement.generateCard();
  popupAddImage1.close();
  elementContainder.prepend(cardElement);
});

profileButton.addEventListener("click", () => {
  popupProfile1.open();
  validationForm();
  toggleButtonForm();
  const userInfo = new UserInfo({
    user: ".profile__name",
    job: ".profile__description",
  });

  const userValues = userInfo.getUserInfo();
  formInputName.value = userValues.name;
  formInputAboutme.value = userValues.aboutme;
  resetValidationForm();
});

profileAddButton.addEventListener("click", () => {
  popupAddImage1.open();
  validationForm();
  toggleButtonForm();
  resetValidationForm();
});

popupProfile1.setEventListeners();
popupAddImage1.setEventListeners();
