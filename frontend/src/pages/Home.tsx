import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Statistics from "../components/statistics/Statistics";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";
import ChatAssistant from "../components/chatbot/ChatAssistant";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />

        <Statistics />

        <Team />
      </main>

      <Footer />
       <ChatAssistant />
    </div>
  );
}