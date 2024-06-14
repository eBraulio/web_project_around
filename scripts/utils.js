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
//const popupOverlay = document.querySelector(".popup__overlay");
const closeOverlayEdit = document.querySelector("#popup-overlay-edit");
const closeOverlayAdd = document.querySelector("#popup-overlay-add");
const closeOverlayImage = document.querySelector("#popup-overlay-image");

//Popup de imagen
const popupImage = document.querySelector("#image-popup");

//Función para mostrar el popUp - Forms
function showPopUp(popup, overlay) {
  popup.classList.add("popup__opened");
  overlay.classList.add("popup__overlay");
  document.addEventListener("keydown", closeAnyPopUpEscapeKey);
  //new FormValidator(popup).enableValidation();
}

//Función para ocultar el popUp - Forms
export function closePopUp(popup, overlay) {
  popup.classList.remove("popup__opened");
  overlay.classList.remove("popup__overlay");
  document.removeEventListener("keydown", closeAnyPopUpEscapeKey);
  //new FormValidator(popup).resetValidation();
}

//Función para ocultar el popUp - Imagen
function closePopUpImage(popup, overlay) {
  popup.classList.remove("popup__opened");
  document.removeEventListener("keydown", closeAnyPopUpEscapeKey);
}

//Función para cerrar popUps - All
function closeAnyPopUp() {
  closePopUp(popupProfile, closeOverlayEdit);
  closePopUp(popupPlace, closeOverlayAdd); //
  closePopUpImage(popupImage, closeOverlayImage); //
}

//Función para cerrar popups con ESC
function closeAnyPopUpEscapeKey(evt) {
  if (evt.key === "Escape") {
    closeAnyPopUp();
  }
}

//Función para editar forms - perfil y profesión
function editProfile(name, about) {
  profileName.textContent = name;
  profileDescription.textContent = about;
}

//Evento para abrir la ventana popup Profile
editButtonProfile.addEventListener("click", () => {
  showPopUp(popupProfile, closeOverlayEdit);
  popupNameProfile.value = document.querySelector(".profile__name").textContent;
  popupAboutProfile.value = document.querySelector(
    ".profile__description"
  ).textContent;
});

//Evento para cerrar la ventana popUp Profile con X
cancelButtonProfile.addEventListener("click", () => {
  closePopUp(popupProfile, closeOverlayEdit);
});

//Actualiza Profile al dar click en el botón Guardar
confirmButtonProfile.addEventListener("click", () => {
  editProfile(popupNameProfile.value, popupAboutProfile.value);
  closePopUp(popupProfile, closeOverlayEdit);
});

//Abre la ventana popup Place
addButtonPlace.addEventListener("click", () => {
  showPopUp(popupPlace, closeOverlayAdd);
  popupNamePlace.value = "";
  popupUrlPlace.value = "";
  confirmButtonPlace.classList.add("popup__button-disabled");
});

//Cierra la ventana popUp Place con X
cancelButtonPlace.addEventListener("click", () => {
  closePopUp(popupPlace, closeOverlayAdd);
  confirmButtonPlace.classList.add("popup__button-disabled");
});

//cierra el popup de imagen con X
popupImage.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__close-image")) {
    closePopUpImage(popupImage, closeOverlayImage);
  }
});

//cierra los popUps al dar click en Overlay
closeOverlayImage.addEventListener("click", closeAnyPopUp);
closeOverlayAdd.addEventListener("click", closeAnyPopUp);
closeOverlayEdit.addEventListener("click", closeAnyPopUp);
