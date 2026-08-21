import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/criar-conta" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}