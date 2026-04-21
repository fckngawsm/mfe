import ReactDOM from "react-dom/client";
import { createElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "@mf/shared";
import AuthApp from "./App";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  createElement(
    BrowserRouter,
    null,
    createElement(UserProvider, null, createElement(AuthApp))
  )
);
