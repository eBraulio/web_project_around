import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

//elementos que se editan en la seccion de profile
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//elementos de el popUp de edición de perfil
const popupProfile = document.querySelector("#popup-profile");
const popupNameProfile = popupProfile.querySelector(".popup__input-name");
const popupAboutProfile = popupProfile.querySelector(
  ".popup__input-description"
);
const confirmButtonProfile = popupProfile.querySelector("#btn-submit-profile");
const cancelButtonProfile = popupProfile.querySelector("#btn-close-profile");
const editButtonProfile = document.querySelector(".profile__edit-button");

//elementos de el popUp de agregar nuevas tarjetas de lugar
const popupPlace = document.querySelector("#place-popup");
const popupNamePlace = popupPlace.querySelector(".popup__add-name");
const popupUrlPlace = popupPlace.querySelector(".popup__add-adress");
const addButtonPlace = document.querySelector(".profile__add-button");
const cancelButtonPlace = popupPlace.querySelector("#btn-close-place");
const confirmButtonPlace = popupPlace.querySelector("#btn-submit-place");

//capa fondo semitrasparente de los popUps
const popupOverlay = document.querySelector(".popup__overlay");

const closeOverlayEdit = document.querySelector("#popup-overlay-edit");
const closeOverlayAdd = document.querySelector("#popup-overlay-add");
const closeOverlayImage = document.querySelector("#popup-overlay-image");

//elementos de el popUp de visualización de imagen
const popupImage = document.querySelector("#image-popup");

//elemento donde se muestran las tarjetas
export const cardsContainer = document.querySelector(".elements");

console.log(popupOverlay);

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

//Función para mostrar el popUp de agregar nuevas tarjetas y edición del perfil
function showPopUp(popup, overlay) {
  popup.classList.add("popup__opened");
  overlay.classList.add("popup__overlay");
  document.addEventListener("keydown", closeAnyPopUpEscapeKey);
  new FormValidator(popup).enableValidation();
}

//Función para ocultar el popUp de agregar nuevas tarjetas y edición del perfil
function closePopUp(popup, overlay) {
  popup.classList.remove("popup__opened");
  overlay.classList.remove("popup__overlay");
  document.removeEventListener("keydown", closeAnyPopUpEscapeKey);
  new FormValidator(popup).resetValidation();
}

//Función para ocultar el popUp de la visualización de la imagen
function closePopUpImage(popup, overlay) {
  popup.classList.remove("popup__opened");
  document.removeEventListener("keydown", closeAnyPopUpEscapeKey);
}

//Función para cerrar las ventanas popUps
function closeAnyPopUp() {
  closePopUp(popupProfile, closeOverlayEdit);
  closePopUp(popupPlace, closeOverlayAdd); //
  closePopUpImage(popupImage, closeOverlayImage); //
}

//Función para cerrar las ventanas popUps con la tecla Escape
function closeAnyPopUpEscapeKey(evt) {
  if (evt.key === "Escape") {
    closeAnyPopUp();
  }
}

//Función para editar los campos del nombre del perfil y la profesión
function editProfile(name, about) {
  profileName.textContent = name;
  profileDescription.textContent = about;
}

//abre la ventana popup Profile al dar click en el icono del lápiz (editar)
editButtonProfile.addEventListener("click", () => {
  showPopUp(popupProfile, closeOverlayEdit);
  popupNameProfile.value = document.querySelector(".profile__name").textContent;
  popupAboutProfile.value = document.querySelector(
    ".profile__description"
  ).textContent;
});

//cierra la ventana popUp Profile al dar click en el icono de X (cerrar)
cancelButtonProfile.addEventListener("click", () => {
  closePopUp(popupProfile, closeOverlayEdit);
});

//cambia el contenido de los campos de nombre y acercaDe del Profile al dar click en el botón Guardar
confirmButtonProfile.addEventListener("click", () => {
  editProfile(popupNameProfile.value, popupAboutProfile.value);
  closePopUp(popupProfile, closeOverlayEdit);
});

//abre la ventana popup Place al dar click en el icono del + (agregar)
addButtonPlace.addEventListener("click", () => {
  showPopUp(popupPlace, closeOverlayAdd);
  popupNamePlace.value = "";
  popupUrlPlace.value = "";
  confirmButtonPlace.classList.add("popup__button-disabled");
});

//cierra la ventana popUp Place al dar click en el icono de X (cerrar)
cancelButtonPlace.addEventListener("click", () => {
  closePopUp(popupPlace, closeOverlayAdd);
  confirmButtonPlace.classList.add("popup__button-disabled");
});

//agrega una nueva tarjeta a lugares al daer click en el botón Crear
confirmButtonPlace.addEventListener("click", () => {
  //se crea un nuevo objeto con los valores de los inputs
  const newCard = {
    name: popupNamePlace.value,
    url: popupUrlPlace.value,
  };
  //se crea una nueva clase del obejor Card
  const card = new Card(newCard, "#template__elements", initialCards);
  //se relaciona el id de la clase con la propiedad id del newCard
  newCard.id = card._id;
  //se genera la nueva tarjeta
  const cardElement = card.generateCard();
  //se inserta en el html
  cardsContainer.prepend(cardElement);

  //se inserta el obejto en el arreglo inicial
  initialCards.push(newCard);
  closePopUp(popupPlace, closeOverlayAdd);
});

//cierra el popup de previsualización de imagen al dar click en el icono de X (cerrar)
popupImage.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__close-image")) {
    closePopUpImage(popupImage, closeOverlayImage);
  }
});

//cierra las ventanas popUps cuando se de click en la superposición
closeOverlayImage.addEventListener("click", closeAnyPopUp);
closeOverlayAdd.addEventListener("click", closeAnyPopUp);
closeOverlayEdit.addEventListener("click", closeAnyPopUp);
