import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Main } from "../components/Main";
import { GuestOnly } from "./GuestOnly";

const AuthMF = lazy(() =>
  import("mf-auth/auth").catch(() => ({
    default: () => <div className="error">Component is not available!</div>,
  }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        element: <GuestOnly />,
        children: [
          {
            path: "auth/*",
            Component: AuthMF,
          },
        ],
      },
    ],
  },
]);
