import BotaoHero from "../components/BotaoHero";
import TecnologiaHero from "../components/TecnologiaHero";

function HeroArea() {
  return (
    <div className="h-fit flex flex-col lg:flex-row items-center justify-between pb-[100px]">
      {/* ESQUERDA */}
      <div className="flex-1 flex flex-col h-[100%] gap-5">
        {/* Hero Title */}
        <div>
          <h1 className="text-[80px] font-semibold bg-gradient-to-r from-white from-0% via-[#DBEAB5] via-80% to-[#CDEB85] to-95% text-transparent bg-clip-text">
            Software
          </h1>
          <h1 className="mt-[-40px] text-[80px] font-semibold bg-gradient-to-r from-[#35605A] from-0% via-[#88B876] via-70% to-[#CDEB85] to-150% text-transparent bg-clip-text">
            Developer
          </h1>
        </div>
        {/* Texto escrevendo */}
        <div className="flex">
          <h2 className="txt-animado font-light text-[30px]">
            <span></span>
          </h2>
        </div>
        {/* Frase de impacto */}
        <div>
          <h2 className="font-medium text-[20px] text-[#A7A7A7]">
            Conectando tecnologia a resultados concretos com soluções inovadoras
            que transformam de verdade.
          </h2>
        </div>
        {/* Tecnologias Principais */}
        <div className="flex flex-wrap gap-y-3 gap-x-4 w-[80%]">
          <TecnologiaHero nome="React"/>
          <TecnologiaHero nome="Javascript"/>
          <TecnologiaHero nome="Node.js"/>
          <TecnologiaHero nome="PostgreSQL"/>
        </div>
        {/* Botões */}
        <div className="flex gap-8 mt-5">
          <BotaoHero nome="Projetos" link="projects" icon="newtab" />
          <BotaoHero nome="Contato" link="contact" icon="mail"/>
        </div>
      </div>


      {/* DIREITA */}
      <div className="z-10 flex-1 h-[100%] justify-start mt-[50px]">
        <div className="max-w-[550px]">
          <img className="" src="/Main Hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroArea;
