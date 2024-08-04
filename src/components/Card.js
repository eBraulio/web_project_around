export default class Card {
  constructor(
    cardData,
    userId,
    handleLikeCard,
    handleUnlikeCard,
    handleCardClick,
    handleDeleteCard
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardTemplate = document.querySelector("#template__elements");
    this._card = this._getTemplate();
    this._handleLikeCard = handleLikeCard;
    this._handleUnlikeCard = handleUnlikeCard;
    this._handleCardClick = handleCardClick;
    this._likes = cardData.likes;
    this._owner = cardData.owner;
    this._userId = userId;
    this._cardId = cardData._id;
    this._handleDeleteCard = handleDeleteCard;
  }

  _getTemplate() {
    return this._cardTemplate
      .cloneNode(true)
      .content.querySelector(".template__element");
  }

  _setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__text");
    this._likeButton = this._card.querySelector(".element__like-button");
    this._likeCounter = this._card.querySelector(".element__like-number");
    this._likeCounter.textContent = this._likes.length;
    this._deleteButton = this._card.querySelector(".element__trash-icon");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    if (this._likes.some((item) => item._id === this._userId)) {
      this._likeButton.classList.toggle("element__like-button-active");
    }
    if (this._owner._id !== this._userId) {
      this._deleteButton.remove();
    }
    this._card.id = `id_${this._cardId}`;
  }

  _handleDeleteCard() {
    this._card.remove();
  }

  _changeLikeCounter(newArrayLikes) {
    this._likes = newArrayLikes;
    this._likeCounter.textContent = newArrayLikes.length;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      if (this._likes.some((item) => item._id === this._userId)) {
        this._handleUnlikeCard(this._cardId).then((cardWithLike) => {
          this._changeLikeCounter(cardWithLike.likes);
        });
        this._likeButton.classList.toggle("element__like-button-active");
      } else {
        this._handleLikeCard(this._cardId).then((cardWithLike) => {
          this._changeLikeCounter(cardWithLike.likes);
        });
        this._likeButton.classList.toggle("element__like-button-active");
      }
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard(this._cardId);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }

  createCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
