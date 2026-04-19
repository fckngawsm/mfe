import { IUserApi } from "./types";

class UsersApi implements IUserApi {
  private static instance: UsersApi;

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
  ): UsersApi {
    if (!UsersApi.instance) {
      UsersApi.instance = new UsersApi(groupId, address, token);
    }
    return UsersApi.instance;
  }

  getUserInfo() {
    return fetch(`${this.address}/${this.groupId}/users/me`, {
      headers: {
        authorization: this.token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  setUserInfo({ name, about }: { name: string; about: string }) {
    return fetch(`${this.address}/${this.groupId}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  setUserAvatar(avatar: string) {
    return fetch(`${this.address}/${this.groupId}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
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
}

export const getUserApiInstance = () =>
  UsersApi.getInstance(
    `cohort0`,
    "https://nomoreparties.co",
    `80a75492-21c5-4330-a02f-308029e94b63`
  );
