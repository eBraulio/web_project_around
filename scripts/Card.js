// From: https://replit.com/@tripleten/lesson-4#script.js

const messageList = [
  {
    image: "https://code.s3.yandex.net/web-code/card__image.jpg",
    text: "Hi, we need to tune up our chat ASAP!",
  },
  {
    image: "https://code.s3.yandex.net/web-code/card__image-lake.jpg",
    text: "We can now create any number of cards!",
  },
];

class Card {
  constructor(data, cardSelector) {
    this._text = data.text;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__avatar").src = this._image;
    this._element.querySelector(".card__paragraph").textContent = this._text;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector(".card__text").addEventListener("click", () => {
      this._handleMessageClick();
    });
  }

  _handleMessageClick() {
    this._element
      .querySelector(".card__text")
      .classList.toggle("card__text_is-active");
  }
}

messageList.forEach((item) => {
  const card = new Card(item, ".card-template_type_default");
  const cardElement = card.generateCard();

  document.body.append(cardElement);
});
