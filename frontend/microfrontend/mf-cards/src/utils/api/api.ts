import { Card } from "../../types/Card";
import { ICardsApi } from "./types";

class CardsApi implements ICardsApi {
  private static instance: CardsApi;

  groupId: string;
  address: string;
  token: string;

  private constructor(groupId: string, address: string, token: string) {
    this.groupId = groupId;
    this.address = address;
    this.token = token;
  }

  public static getInstance(
    groupId: string,
    address: string,
    token: string
  ): CardsApi {
    if (!CardsApi.instance) {
      CardsApi.instance = new CardsApi(groupId, address, token);
    }
    return CardsApi.instance;
  }

  public async getCardList(): Promise<Card[]> {
    const res = await fetch(`${this.address}/${this.groupId}/cards`, {
      headers: {
        authorization: this.token,
      },
    });
    return await (res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`));
  }

  public addCard({ name, link }: { name: string; link: string }) {
    return fetch(`${this.address}/${this.groupId}/cards`, {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  public removeCard(cardID: number) {
    return fetch(`${this.address}/${this.groupId}/cards/${cardID}`, {
      method: "DELETE",
      headers: {
        authorization: this.token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  public changeLikeCardStatus(cardID: number, like: boolean) {
    return fetch(`${this.address}/${this.groupId}/cards/like/${cardID}`, {
      method: like ? "PUT" : "DELETE",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }
}

export const getCardsApiInstance = () =>
  CardsApi.getInstance(
    `cohort0`,
    "https://nomoreparties.co",
    `80a75492-21c5-4330-a02f-308029e94b63`
  );
