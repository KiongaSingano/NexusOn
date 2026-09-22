import { useState } from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Statistics from "../components/statistics/Statistics";
import Team from "../components/team/Team";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";
import ChatAssistant from "../components/chatbot/ChatAssistant";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      <Header />

      <main>
        <Hero />

        <Statistics />

        <Team />

        <FAQ
          chatOpen={chatOpen}
          onToggleChat={() =>
            setChatOpen((current) => !current)
          }
        />
      </main>

      <Footer />

      <ChatAssistant
        open={chatOpen}
        onOpenChange={setChatOpen}
      />

    </div>
  );
}