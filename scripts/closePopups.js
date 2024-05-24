const closeOverlayEdit = document.querySelector("#popup-overlay-edit");
const closeOverlayAdd = document.querySelector("#popup-overlay-add");
const closeOverlayImage = document.querySelector("#popup-overlay-image");

function closeWithClick(evt) {
  if (evt.target.classList.contains("popup__overlay")) {
    popupProfile.classList.remove("popup__opened");
    popupPlace.classList.remove("popup__opened");
    popupImage.classList.remove("popup__opened");
  }
}

function closeWithEsc(evt) {
  if (evt.key === "Escape") {
    popupProfile.classList.remove("popup__opened");
    popupPlace.classList.remove("popup__opened");
    popupImage.classList.remove("popup__opened");
  }
}

closeOverlayEdit.addEventListener("click", closeWithClick);
closeOverlayAdd.addEventListener("click", closeWithClick);
closeOverlayImage.addEventListener("click", closeWithClick);
document.addEventListener("keydown", closeWithEsc);
