import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AnnouncementProvider,
  useAnnouncement,
} from "./context/AnnouncementContext";

import AnnouncementBar from "./components/announcement/AnnouncementBar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Opportunities from "./pages/Opportunities";

function AppContent() {
  const { announcementVisible } = useAnnouncement();

  return (
    <>
      {/* GLOBAL */}
      <AnnouncementBar />

      {/* CONTEÚDO DA APLICAÇÃO */}
      <div
        className={`
          transition-[padding-top]
          duration-300
          ease-out
          ${announcementVisible ? "pt-10" : "pt-0"}
        `}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/entrar"
            element={<Login />}
          />

          <Route
            path="/criar-conta"
            element={<Register />}
          />

          <Route
            path="/oportunidades"
            element={<Opportunities />}
          />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnnouncementProvider>
        <AppContent />
      </AnnouncementProvider>
    </BrowserRouter>
  );
}