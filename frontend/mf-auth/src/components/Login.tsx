import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuthApiInstance } from "../utils/api";

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const api = getAuthApiInstance();
  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await api.login(email, password);
    navigate("/");
  }

  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Вход</h3>
          <label className="auth-form__input">
            <input
              type="text"
              name="name"
              id="email"
              className="auth-form__textfield"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="auth-form__input">
            <input
              type="password"
              name="password"
              id="password"
              className="auth-form__textfield"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="auth-form__wrapper">
          <button className="auth-form__button" type="submit">
            Войти
          </button>
          <p className="auth-form__text">
            Нет аккаунта?{" "}
            <Link className="auth-form__link" to="/auth/register">
              Регистрация
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
