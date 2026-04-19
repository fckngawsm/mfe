import { lazy } from "react";
import ReactDOM from "react-dom/client";

const UsersMF = lazy(() =>
  import("mf-users/users").catch(() => ({
    default: () => <div className="error">Component is not available!</div>,
  }))
);

const CardsMF = lazy(() =>
  import("mf-cards/cards").catch(() => ({
    default: () => <div className="error">Component is not available!</div>,
  }))
);

const AuthMF = lazy(() =>
  import("mf-auth/auth").catch(() => ({
    default: () => <div className="error">Component is not available!</div>,
  }))
);

const App = () => (
  <div className="container">
    <AuthMF />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
