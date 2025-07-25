import { useState } from "react";
import BotaoPortifolio from "../components/BotaoPortifolio";
import SectionTitle from "../components/SectionTitle";

function Projects() {
    const [ativo, setAtivo] = useState("projetos");

    return (
    <div id="projects" className="h-[500px] flex flex-col items-center justify-start">
      <SectionTitle nome="Portifólio" />
      <p className="text-center text-[18px] font-medium text-[#A7A7A7]">
        Explore minha jornada através dos meus projetos, certificações e
        conhecimentos técnicos.
      </p>
      {/* Botões */}
      <div className="mt-10 flex items-center justify-center gap-5 w-[90%] px-5 py-3 bg-[rgba(248,248,248,0.1)] rounded-[15px] border-[#444444] border-[1px]">
        <BotaoPortifolio nome="Projetos" ativo={ativo} onClick={() => setAtivo("projetos")} />
        <BotaoPortifolio nome="Certificados" ativo={ativo} onClick={() => setAtivo("certificados")} />
        <BotaoPortifolio nome="Tecnologias" ativo={ativo} onClick={() => setAtivo("tecnologias")} />
      </div>
      {/* Data Area */}
      <div></div>
    </div>
  );
}

export default Projects;
