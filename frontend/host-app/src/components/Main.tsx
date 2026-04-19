import { useUser } from "@mf/shared/context/CurrentUserContext";
import { lazy } from "react";
import "../index.css";

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
  const { user: currentUser } = useUser();

  const imageStyle = { backgroundImage: `url(${currentUser?.avatar})` };

  return (
    <main className="content">
      <UsersMF />
      <CardsMF />
    </main>
  );
}
