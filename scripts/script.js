import { Card } from "./Card.js";
import { cardsContainer, initialCards } from "./utils.js";

(function loadCards() {
  cardsContainer.innerHTML = "";
  initialCards.forEach((initialCard) => {
    const card = new Card(initialCard, "#template__elements", initialCards);
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
  });
})();
