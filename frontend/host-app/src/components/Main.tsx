import { lazy, Suspense } from "react";
import "../index.css";
import { Footer } from "./Footer";

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

export function Main() {
  return (
    <>
      <main className="main">
        <Suspense fallback={<div>Loading users...</div>}>
          <UsersMF />
        </Suspense>
        <Suspense fallback={<div>Loading cards...</div>}>
          <CardsMF />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
