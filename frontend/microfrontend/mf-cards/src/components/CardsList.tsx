import { useState } from "react";
import { Card } from "../types/Card";
import { getCardsApiInstance } from "../utils/api/api";
import { CardItem } from "./CardItem";

export const CardsList = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const api = getCardsApiInstance();
  function handleCardClick(card: Card) {
    setSelectedCard(card);
  }

  function handleCardLike(card: Card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards?.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card: Card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className="places page__section">
      <ul className="places__list">
        {cards.map((card) => (
          <CardItem
            key={card._id}
            card={card}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </ul>
    </section>
  );
};
