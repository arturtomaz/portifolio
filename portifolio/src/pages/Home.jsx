import Bubbles from "../components/Bubbles";
import Header from "../sections/Header";
import HeroArea from "../sections/HeroArea";
import Projects from "../sections/Projects";

function Home() {
  return (
    <div className="bg-[#060B0A] min-h-screen">
      <Bubbles />
      <Header />
      <div className="container mx-auto">
        <HeroArea />
        <Projects />
      </div>
    </div>
  );
}

export default Home;
