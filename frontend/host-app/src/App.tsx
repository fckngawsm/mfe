import { UserProvider } from "@mf/shared";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import * as serviceWorker from "./serviceWorker";

const App = () => (
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);

serviceWorker.unregister();

export default App;
