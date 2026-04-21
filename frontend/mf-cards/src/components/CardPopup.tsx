import { Card } from "@mf/shared";

interface CardPopupProps {
  card: Card;
  onClose: () => void;
}

export const CardPopup = ({ card, onClose }: CardPopupProps) => {
  return (
    <div className={`popup popup_type_image ${card ? "popup_is-opened" : ""}`}>
      <div className="popup__content popup__content_content_image">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <img
          alt={card ? card.name : ""}
          src={card ? card.link : ""}
          className="popup__image"
        />
        <p className="popup__caption">{card ? card.name : ""}</p>
      </div>
    </div>
  );
};
