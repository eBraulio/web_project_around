import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen(link, name) {
    super.handleOpen();

    this._image = document.querySelector(".popup__element-image");
    this._title = document.querySelector(".popup__element-title");

    this._image.alt = `Fotografia de ${name}`;
    this._image.src = link;
    this._title.textContent = name;
  }
}

// import Popup from "./Popup.js";

// export default class PopupWithImage extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//     this.handleOpen = this.handleOpen.bind(this);
//   }
//   handleOpen(name, link) {
//     this._showImage = document.querySelector(".popup__element-image");
//     this._showSubtitle = document.querySelector(".popup__element-title");
//     this._showImage.alt = `Fotografia de ${name}`;
//     this._showImage.src = link;
//     this._showSubtitle.textContent = name;
//     super.handleOpen();
//   }
// }
