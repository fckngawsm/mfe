import ReactDOM from "react-dom/client";
import { Register } from "./components/Register";
import "./index.css";

const App = () => (
  <div className="container">
    <Register onRegister={() => {}} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
