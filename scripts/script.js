let profileEditButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let profileNameElement = document.querySelector(".profile__name");
let profileDescriptionElement = document.querySelector(".profile__description");
let popupInputName = document.querySelector(".popup__input-name");
let popupInputDescription = document.querySelector(".popup__input-description");
let profileForm = document.querySelector(".popup__edit");

popupInputName.value = profileNameElement.textContent;
popupInputDescription.value = profileDescriptionElement.textContent;

function openPopup() {
  popup.classList.add("popup__opened");
}
function closePopup() {
  popup.classList.remove("popup__opened");
}
function saveForm(event) {
  event.preventDefault();
  profileNameElement.textContent = popupInputName.value;
  profileDescriptionElement.textContent = popupInputDescription.value;
  closePopup();
}

profileEditButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
profileForm.addEventListener("submit", saveForm);
