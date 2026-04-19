import { Link, Route } from "react-router-dom";
import logoPath from "../images/logo.svg";

interface HeaderProps {
  onSignOut: () => void;
  email: string;
}

function Header({ onSignOut, email }: HeaderProps) {
  function handleSignOut() {
    onSignOut();
  }
  return (
    <header className="header page__section">
      <img
        src={logoPath}
        alt="Логотип проекта Mesto"
        className="logo header__logo"
      />
      <Route exact path="/">
        <div className="header__wrapper">
          <p className="header__user">{email}</p>
          <button className="header__logout" onClick={handleSignOut}>
            Выйти
          </button>
        </div>
      </Route>
      <Route path="/signup">
        <Link className="header__auth-link" to="signin">
          Войти
        </Link>
      </Route>
      <Route path="/signin">
        <Link className="header__auth-link" to="signup">
          Регистрация
        </Link>
      </Route>
    </header>
  );
}

export default Header;
