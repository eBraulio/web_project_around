// const editButton = document.querySelector(".profile__edit-button");
// const nameInput = document.querySelector(".popup__input-name");
// const descriptionInput = document.querySelector(".popup__input-description");
// const profileName = document.querySelector(".profile__name");
// const profileDescription = document.querySelector(".profile__description");
// const popupProfile = document.querySelector("#popup-profile");
// const addButton = document.querySelector(".profile__add-button");
// const placeInput = document.querySelector(".popup__add-name");
// const adressInput = document.querySelector(".popup__add-adress");
// const placeName = document.querySelector(".element__text");
// const adressUrl = document.querySelector(".element__image");
// const popupPlace = document.querySelector("#place-popup");
// const cards = document.querySelectorAll(".template__element");
// const popupImage = document.querySelector("#image-popup");
// const cardsContainer = document.querySelector(".elements");
// const closeButton = document.querySelectorAll(".popup__close-button");
import Card from "./Card.js";

const initialCards = [
  {
    text: "Detroit Downtown",
    image:
      "https://images.unsplash.com/photo-1573112067224-58060384abd5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Estadio Ford",
    image:
      "https://images.unsplash.com/photo-1542385939-cac37e190818?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Desierto de Utah",
    image:
      "https://plus.unsplash.com/premium_photo-1697730073417-c32f239b5675?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Ayuntamiento de Pasadena, CA",
    image:
      "https://images.unsplash.com/photo-1690002122693-bea650f7bdf5?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Hollywood",
    image:
      "https://images.unsplash.com/photo-1581390114939-946f9a890a7f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Chicago Downtown",
    image:
      "https://images.unsplash.com/photo-1581373449483-37449f962b6c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

//Crea una instancia de la clase Card para cada tarjeta.
initialCards.forEach((item) => {
  const card = new Card(item, "#template__elements");
  const cardElement = card.generateCard();

  document.querySelector(".elements").append(cardElement);
});
