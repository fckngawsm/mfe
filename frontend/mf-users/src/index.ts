import ReactDOM from "react-dom/client";
import { createElement } from "react";
import { UserProvider } from "@mf/shared";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  createElement(
    BrowserRouter,
    null,
    createElement(UserProvider, null, createElement(App))
  )
);
