import { useState } from "react";
import BotaoPortifolio from "../components/BotaoPortifolio";
import SectionTitle from "../components/SectionTitle";
import Projeto from "../components/Projeto";
import projetos from "../data/projetos.json";
import Certificado from "../components/Certificado";
import certificados from "../data/certificados.json";

function Projects() {
  const [ativo, setAtivo] = useState("projetos");
  const listaProjetos = projetos["projetos"];
  const listaCertificados = certificados["certificados"];
  return (
    <div
      id="projects"
      className="h-fit min-h-200 flex flex-col items-center justify-start pt-[100px]"
    >
      <SectionTitle nome="Portifólio" />
      <p className="text-center text-[18px] font-medium text-[#A7A7A7]">
        Explore minha jornada através dos meus projetos, certificações e
        conhecimentos técnicos.
      </p>
      {/* Botões */}
      <div className="mt-10 flex items-center justify-center gap-5 w-[90%] px-5 py-3 bg-[rgba(248,248,248,0.1)] rounded-[15px] border-[#444444] border-[1px]">
        <BotaoPortifolio
          nome="Projetos"
          ativo={ativo}
          onClick={() => setAtivo("projetos")}
        />
        <BotaoPortifolio
          nome="Certificados"
          ativo={ativo}
          onClick={() => setAtivo("certificados")}
        />
        <BotaoPortifolio
          nome="Tecnologias"
          ativo={ativo}
          onClick={() => setAtivo("tecnologias")}
        />
      </div>
      {/* Data Area */}
      <div className="mt-5 w-[90%] px-5 py-3">
        {/* Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ativo === "projetos" &&
            listaProjetos.map((projeto, index) => (
              <Projeto projeto={projeto} key={index}/>
            ))}
          {ativo === "certificados" && listaCertificados.map((certificado, index) => (
              <Certificado certificado={certificado} key={index}/>
            ))}
          {ativo === "tecnologias" && <div></div>}
        </div>
      </div>
    </div>
  );
}

export default Projects;
