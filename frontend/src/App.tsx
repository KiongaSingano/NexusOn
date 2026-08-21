import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatAssistant from "./components/chatbot/ChatAssistant";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/criar-conta" element={<Register />} />
      </Routes>

      <ChatAssistant />
    </BrowserRouter>
  );
}