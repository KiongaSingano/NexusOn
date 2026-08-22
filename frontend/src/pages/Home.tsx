import { useState } from "react";

import AnnouncementBar from "../components/announcement/AnnouncementBar";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Statistics from "../components/statistics/Statistics";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";
import ChatAssistant from "../components/chatbot/ChatAssistant";

export default function Home() {
  const [announcementVisible, setAnnouncementVisible] =
    useState(true);

  return (
    <div className="min-h-screen bg-white">

      {/* AVISO */}
      <AnnouncementBar
        visible={announcementVisible}
        onClose={() => setAnnouncementVisible(false)}
      />

      {/* HEADER */}
      <Header
        announcementVisible={announcementVisible}
      />

      {/* CONTEÚDO */}
      <main
        className={`transition-[padding] duration-300 ${
          announcementVisible
            ? "pt-[112px]"
            : "pt-[72px]"
        }`}
      >
        <Hero />

        <Statistics />

        <Team />
      </main>

      <Footer />

      <ChatAssistant />

    </div>
  );
}