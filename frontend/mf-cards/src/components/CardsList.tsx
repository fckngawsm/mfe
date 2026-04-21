import { Card as CardI, useUser } from "@mf/shared";
import { useEffect, useState } from "react";
import { getCardsApiInstance } from "../utils/api/api";
import { CardItem } from "./CardItem";

export const CardsList = () => {
  const [cards, setCards] = useState<CardI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const api = getCardsApiInstance();
  const { user: currentUser } = useUser();

  function handleCardLike(card: CardI) {
    const isLiked = card.likes.some((i) => i._id === currentUser?._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards?.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card: CardI) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setIsLoading(true);
    api
      .getCardList()
      .then((data) => setCards(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [api]);

  if (isLoading) {
    return (
      <section className="places page__section">
        <p>Загрузка карточек...</p>
      </section>
    );
  }

  return (
    <section className="places page__section">
      <ul className="places__list">
        {cards.map((card) => (
          <CardItem
            key={card._id}
            card={card}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </ul>
    </section>
  );
};
