import { User, UserContext } from "@mf/shared";
import React, { lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components/Main";
import * as serviceWorker from "./serviceWorker";

const AuthMF = lazy(() =>
  import("mf-auth/auth").catch(() => ({
    default: () => <div className="error">Component is not available!</div>,
  }))
);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const App = () => (
  <div className="container">
    <Main />
  </div>
);

serviceWorker.unregister();

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
