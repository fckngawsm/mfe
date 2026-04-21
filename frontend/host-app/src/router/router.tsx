import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/Main";
import { GuestOnly } from "./GuestOnly";
import { RequireAuth } from "./RequireAuth";

const AuthMF = lazy(() =>
  import("mf-auth/auth").catch(() => ({
    default: () => <div className="error">Component is not available!</div>,
  }))
);

export const router = createBrowserRouter([
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        Component: Main,
      },
    ],
  },
  {
    element: <GuestOnly />,
    children: [
      {
        path: "/auth/*",
        element: (
          <Suspense fallback={<div>Loading auth...</div>}>
            <AuthMF />
          </Suspense>
        ),
      },
    ],
  },
]);
