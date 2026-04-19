import { Card } from "@mf/shared";

export interface ICardsApi {
  getCardList(): Promise<Card[]>;
  addCard: ({ name, link }: { name: string; link: string }) => void;
  removeCard: (cardId: number) => void;
  changeLikeCardStatus: (cardId: number, like: boolean) => void;
}
