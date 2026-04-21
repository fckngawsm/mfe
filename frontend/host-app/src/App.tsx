import { User, UserContext } from "@mf/shared";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components/Main";
import * as serviceWorker from "./serviceWorker";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const App = () => (
  <UserProvider>
    <Main />
  </UserProvider>
);

serviceWorker.unregister();

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
