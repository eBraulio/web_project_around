const overlayEdit = document.querySelector("#popup-overlay-edit");
const overlayAdd = document.querySelector("#popup-overlay-add");
const overlayImage = document.querySelector("#popup-overlay-image");

function handleOverlayClick(event) {
  if (event.target.classList.contains("popup__overlay")) {
    popupProfile.classList.remove("popup__opened");
    popupPlace.classList.remove("popup__opened");
    popupImage.classList.remove("popup__opened");
  }
}

function closeWithEsc(event) {
  if (event.key === "Escape") {
    popupProfile.classList.remove("popup__opened");
    popupPlace.classList.remove("popup__opened");
    popupImage.classList.remove("popup__opened");
  }
}

overlayEdit.addEventListener("click", handleOverlayClick);
overlayAdd.addEventListener("click", handleOverlayClick);
overlayImage.addEventListener("click", handleOverlayClick);
document.addEventListener("keydown", closeWithEsc);
