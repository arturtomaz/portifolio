import BotaoHero from "../components/BotaoHero";
import TecnologiaHero from "../components/TecnologiaHero";

function HeroArea() {
  return (
    <section id="home" className="h-fit flex flex-col lg:flex-row items-center justify-between pb-[80px] sm:pb-[140px] 2xl:px-10">
      {/* ESQUERDA */}
      <div className="flex-1 flex flex-col h-[100%] gap-5">
        {/* Hero Title */}
        <div className="text-[60px] sm:text-[80px] font-semibold cursor-default">
          <h1 className="bg-gradient-to-r from-white from-0% via-[#DBEAB5] via-80% to-[#CDEB85] to-95% text-transparent bg-clip-text">
            Software
          </h1>
          <h1 className="mt-[-40px] bg-gradient-to-r from-[#35605A] from-0% via-[#88B876] via-70% to-[#CDEB85] to-150% text-transparent bg-clip-text">
            Developer
          </h1>
        </div>
        {/* Texto escrevendo */}
        <div className="flex">
          <h2 className="txt-animado font-light text-[20px] sm:text-[30px]">
            <span></span>
          </h2>
        </div>
        {/* Frase de impacto */}
        <div>
          <h2 className="font-semilight text-[16px] sm:text-[20px] text-[#A7A7A7]">
            Conectando tecnologia a resultados concretos com soluções inovadoras
            que transformam de verdade.
          </h2>
        </div>
        {/* Tecnologias Principais */}
        <div className="flex flex-wrap gap-y-3 gap-x-4 w-[95%]">
          <TecnologiaHero nome="React"/>
          <TecnologiaHero nome="Javascript"/>
          <TecnologiaHero nome="Node.js"/>
          <TecnologiaHero nome="PostgreSQL"/>
        </div>
        {/* Botões */}
        <div className="flex gap-4 sm:gap-8 mt-5">
          <BotaoHero nome="Projetos" link="projects" icon="newtab" />
          <BotaoHero nome="Contato" link="contact" icon="mail"/>
        </div>
      </div>


      {/* DIREITA */}
      <div className="z-2 flex-1 h-[100%] mt-[50px]">
        <div className="flex justify-center items-center">
          <img className="sm:max-w-[550px]" src="/Main Hero Teste.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroArea;
