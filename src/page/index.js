import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  popupProfileForm,
  inputNameUser,
  inputAboutUser,
  profileName,
  profileDescription,
  profileEditButton,
  cardsSection,
  popupCardsForm,
  addCardsButton,
  profileAvatarContainer,
  profileAvatarForm,
  config,
} from "../components/utils.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";

inputNameUser.value = profileName.textContent;
inputAboutUser.value = profileDescription.textContent;

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__description",
  avatarSelector: ".profile__avatar-image",
});

//API
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "6bb9691a-4f67-46d0-9c5a-49bb45cb7185",
    "Content-Type": "application/json",
  },
});

api.getUserInfo().then((result) => {
  userInfo.setUserInfo(result);
  api.getInitialCards().then((result) => {
    const cardList = new Section(
      {
        items: result,
        renderer: (item) => {
          const card = new Card(
            item,
            userInfo._userId,
            (cardId) => api.addLike(cardId),
            (cardId) => api.removeLike(cardId),
            popupPhoto.handleOpen,
            () => {
              popupWithConfirmation.handleOpen(item._id);
            }
          );
          const cardElement = card.createCard();
          cardList.addItem(cardElement);
        },
      },
      ".elements"
    );
    cardList.renderItems();
  });
});

const popupCards = new PopupWithForm("#place-popup", (inputs, onClose) => {
  api.addCard(inputs).then((result) => {
    const newCard = new Card(
      result,
      userInfo._userId,
      (cardId) => api.addLike(cardId),
      (cardId) => api.removeLike(cardId),
      popupPhoto.handleOpen,
      () => {
        popupWithConfirmation.handleOpen(result._id);
      }
    );
    const newCardElement = newCard.createCard();
    cardsSection.prepend(newCardElement);
    popupCards.handleClose;
    onClose();
  });
});
popupCards.setEventListeners();

const popupPhoto = new PopupWithImage("#image-popup");
popupPhoto.setEventListeners();

const popupProfile = new PopupWithForm("#popup-profile", (inputs, onClose) => {
  api.editProfile(inputs).then((result) => {
    userInfo.setUserInfo(result);
    popupProfile.handleClose();
    //onClose();
  });
});
popupProfile.setEventListeners();

const popupAvatarProfile = new PopupWithForm(
  "#popup-avatar-profile",
  (inputs) => {
    api.editAvatarProfile(inputs).then((result) => {
      userInfo.setUserInfo(result);
      popupAvatarProfile.handleClose();
    });
  }
);
popupAvatarProfile.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation(
  "#popup-delete-confirmation",
  (cardToDelete) => {
    api.deleteCard(cardToDelete).then(() => {
      popupWithConfirmation.handleClose();
      const card = document.querySelector(`#id_${cardToDelete}`);
      card.remove();
    });
  }
);
popupWithConfirmation.setEventListeners();

profileEditButton.addEventListener("click", () => {
  popupProfile.handleOpen(
    profileName.textContent,
    profileDescription.textContent
  );
  const profileFormValidator = new FormValidator(config, popupProfileForm);
  profileFormValidator.enableValidation();
});

profileAvatarContainer.addEventListener("click", () => {
  popupAvatarProfile.handleOpen();
  const avatarProfileFormValidator = new FormValidator(
    config,
    profileAvatarForm
  );
  avatarProfileFormValidator.enableValidation();
});

addCardsButton.addEventListener("click", () => {
  popupCards.handleOpen();
  const cardsFormValidator = new FormValidator(config, popupCardsForm);
  cardsFormValidator.enableValidation();
});

// api.getInitialCards().then((result) => {
//   result.forEach(() => {
//     const cardList = new Section(
//       {
//         items: result,
//         renderer: (item) => {
//           const card = new Card(
//             item.name,
//             item.link,
//             item.likes,
//             popupImage.handleCardClick,
//             item.userId
//           );
//           const cardElement = card.generateCard();
//           cardList.addItem(cardElement);
//         },
//       },
//       elementContainder
//     );
//     cardList.renderer();
//   });
// });

// const popupImage = new PopupWithImage("#image-popup");
// popupImage.setEventListeners();

// function validationForm() {
//   formList.forEach((formElement) => {
//     const formsValidator = new FormValidator(formElement, settings);
//     formsValidator.enableValidation();
//   });
// }
// function resetValidationForm() {
//   formList.forEach((formElement) => {
//     const formsValidator = new FormValidator(formElement, settings);
//     formsValidator.resetValidation();
//   });
// }
// function toggleButtonForm() {
//   formList.forEach((formElement) => {
//     const toggleButton = new FormValidator(formElement, settings);
//     toggleButton._toggleButtonState();
//   });
// }

// api.getUserInfo().then((result) => {
//   //console.log(result);
//   userInfo.setUserInfo({ name: result.name, about: result.about });
//   avatarImage.src = result.avatar;
// });

// const popupProfile1 = new PopupWithForm("#popup-profile", (inputs) => {
//   //console.log(inputs);
//   api.editProfile(inputs).then((result) => {
//     //console.log(result);
//     userInfo.setUserInfo({ name: result.name, about: result.about });
//     avatarImage.src = result.avatar;
//   });
//   popupProfile1.close();
// });

// const popupAddImage1 = new PopupWithForm("#place-popup", (inputs) => {
//   api.addCard(inputs).then((result) => {
//     const card = new Card(
//       result.name,
//       result.link,
//       result.likes,
//       popupImage.handleCardClick
//     );
//     const cardElement = card.generateCard();
//     popupAddImage1.close();
//     elementContainder.append(cardElement);
//   });
//   elementContainder;
//   // const addCardElement = new Card(
//   //   inputs.name,
//   //   inputs.link,
//   //   popupImage.handleCardClick
//   // );
//   // const cardElement = addCardElement.generateCard();
//   // popupAddImage1.close();
//   // elementContainder.prepend(cardElement);

//   // popupProfile1.setEventListeners();
// });

// profileButton.addEventListener("click", () => {
//   popupProfile1.open();
//   validationForm();
//   toggleButtonForm();
//   const userInfo = new UserInfo({
//     name: ".profile__name",
//     about: ".profile__description",
//   });

//   const userValues = userInfo.getUserInfo();
//   formInputName.value = userValues.name;
//   formInputAboutme.value = userValues.about;
//   resetValidationForm();
// });

// profileAddButton.addEventListener("click", () => {
//   popupAddImage1.open();
//   validationForm();
//   toggleButtonForm();
//   resetValidationForm();
// });

// popupProfile1.setEventListeners();
// popupAddImage1.setEventListeners();
