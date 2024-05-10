const editButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__input-name");
const descriptionInput = document.querySelector(".popup__input-description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const popupProfile = document.querySelector(".popup__profile");
const addButton = document.querySelector(".profile__add-button");
const placeInput = document.querySelector(".popup__add-name");
const adressInput = document.querySelector(".popup__add-adress");
const placeName = document.querySelector(".element__text");
const adressUrl = document.querySelector(".element__image");
const popupPlace = document.querySelector(".popup__add-place");
const cards = document.querySelectorAll(".template__element");
const popupImage = document.querySelector(".popup__element");
const cardsContainer = document.querySelector(".elements");
const closeButton = document.querySelectorAll(".popup__close-button");
const initialCards = [
  {
    placeName: "Detroit Downtown",
    link: "https://images.unsplash.com/photo-1573112067224-58060384abd5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    placeName: "Estadio Ford",
    link: "https://images.unsplash.com/photo-1542385939-cac37e190818?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    placeName: "Desierto de Utah",
    link: "https://plus.unsplash.com/premium_photo-1697730073417-c32f239b5675?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    placeName: "Ayuntamiento de Pasadena, CA",
    link: "https://images.unsplash.com/photo-1690002122693-bea650f7bdf5?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    placeName: "Hollywood",
    link: "https://images.unsplash.com/photo-1581390114939-946f9a890a7f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    placeName: "Chicago Downtown",
    link: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

editButton.addEventListener("click", function openProfileEdit() {
  popupProfile.classList.add("popup__opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

addButton.addEventListener("click", function openPlaceEdit(evt) {
  evt.preventDefault();
  popupPlace.classList.add("popup__opened");
});

function createCards(placeName, link) {
  const cardTemplate = document.querySelector("#template__elements").content;
  const cardElement = cardTemplate
    .querySelector(".template__element")
    .cloneNode(true);

  cardElement.querySelector(".element__image").src = link;
  cardElement.querySelector(".element__text").textContent = placeName;
  cardElement.querySelector(".element__image").alt = "Foto de " + placeName;

  cardElement
    .querySelector(".element__trash-icon")
    .addEventListener("click", function (evt) {
      evt.target.closest(".template__element").remove();
    });

  const likeButton = cardElement.querySelector(".element__like-button");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like-button-active");
  });

  cardElement
    .querySelector(".element__image")
    .addEventListener("click", function (evt) {
      evt.preventDefault();
      popupImage.classList.add("popup__opened");
      popupImage.querySelector(".popup__element-image").src = link;
      popupImage.querySelector(".popup__element-title").textContent = placeName;
      popupImage.querySelector(".popup__element-image").alt = placeName;
    });

  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = createCards(item.placeName, item.link);
  cardsContainer.append(cardElement);
});

closeButton.forEach((item) => {
  item.addEventListener("click", function close() {
    popupProfile.classList.remove("popup__opened");
    popupPlace.classList.remove("popup__opened");
    popupImage.classList.remove("popup__opened");
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  popupProfile.classList.remove("popup__opened");
}

popupProfile.addEventListener("submit", handleProfileFormSubmit);

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCards(placeInput.value, adressInput.value);

  cardsContainer.prepend(cardElement);
  popupPlace.classList.remove("popup__opened");

  placeInput.value = "";
  adressInput.value = "";
}

popupPlace.addEventListener("submit", handlePlaceFormSubmit);
