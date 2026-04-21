import { UserProvider } from "@mf/shared";
import ReactDOM from "react-dom/client";
import { Main } from "./components/Main";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const App = () => (
  <UserProvider>
    <Main />
  </UserProvider>
);

serviceWorker.unregister();

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
