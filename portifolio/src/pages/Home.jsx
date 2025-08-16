import Bubbles from "../components/Bubbles";
import About from "../sections/About";
import Contato from "../sections/Contato";
import Header from "../sections/Header";
import HeroArea from "../sections/HeroArea";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";

function Home() {
  return (
    <div className="bg-[#060B0A] min-h-screen">
      <Bubbles />
      <Header />
      <main className="relative container mx-auto max-w-[95%]">
        <HeroArea />
        <Projects />
        <About />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
