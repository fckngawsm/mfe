import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { GuestOnly } from "./GuestOnly";
import { RequireAuth } from "./RequireAuth";

const AuthMF = lazy(() =>
  import("mf-auth/auth").catch(() => ({
    default: () => <div className="error">Component is not available!</div>,
  }))
);

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
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
    ],
  },
]);
