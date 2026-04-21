import { IAuthApi } from "./types";

class AuthApi implements IAuthApi {
  private static instance: AuthApi;

  baseUrl: string;

  private constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public static getInstance(baseUrl: string): AuthApi {
    if (!AuthApi.instance) {
      AuthApi.instance = new AuthApi(baseUrl);
    }
    return AuthApi.instance;
  }

  private getResponse(res: any) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  login(email: string, password: string) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(this.getResponse)
      .then((data) => {
        localStorage.setItem("token", data.token);
        return data;
      });
  }

  register(email: string, password: string) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this.getResponse);
  }

  checkToken(token: string) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this.getResponse);
  }
}

export const getAuthApiInstance = () =>
  AuthApi.getInstance("https://auth.nomoreparties.co");
