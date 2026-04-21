import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import "./index.css";

export default function AuthApp() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route index element={<Navigate to="login" replace />} />
    </Routes>
  );
}
