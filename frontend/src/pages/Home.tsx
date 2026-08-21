import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Statistics from "../components/statistics/Statistics";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Header />

      <main>
        <Hero />

        <Statistics />
      </main>

      <Footer />

    </div>
  );
}