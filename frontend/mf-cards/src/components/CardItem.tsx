import { Card, useUser } from "@mf/shared";
import { useState } from "react";
import { CardPopup } from "./CardPopup";

interface CardProps {
  card: Card;
  onCardLike: (card: Card) => void;
  onCardDelete: (card: Card) => void;
}

export function CardItem({ card, onCardLike, onCardDelete }: CardProps) {
  const cardStyle = { backgroundImage: `url(${card.link})` };
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const { user: currentUser } = useUser();

  const isLiked = card.likes.some((i) => i._id === currentUser?._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && "card__like-button_is-active"
  }`;

  const isOwn = card.owner._id === currentUser?._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  return (
    <>
      <li className="places__item card">
        <div
          className="card__image"
          style={cardStyle}
          onClick={() => setSelectedCard(card)}
        />
        <button
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        ></button>
        <div className="card__description">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__likes">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            ></button>
            <p className="card__like-count">{card.likes.length}</p>
          </div>
        </div>
      </li>
      {selectedCard && (
        <CardPopup card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </>
  );
}
