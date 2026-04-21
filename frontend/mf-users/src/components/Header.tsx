import { useUser } from "@mf/shared";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoPath from "../assets/logo.svg";

export function Header() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleSignOut() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/auth/login");
  }

  return (
    <header className="header page__section">
      <img
        src={logoPath}
        alt="Логотип проекта Mesto"
        className="logo header__logo"
      />

      {pathname === "/" && (
        <div className="header__wrapper">
          <p className="header__user">{user?.email}</p>
          <button className="header__logout" onClick={handleSignOut}>
            Выйти
          </button>
        </div>
      )}

      {pathname === "/auth/register" && (
        <Link className="header__auth-link" to="/auth/login">
          Войти
        </Link>
      )}

      {pathname === "/auth/login" && (
        <Link className="header__auth-link" to="/auth/register">
          Регистрация
        </Link>
      )}
    </header>
  );
}
