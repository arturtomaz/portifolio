import { useState } from "react";
import BotaoPortifolio from "../components/BotaoPortifolio";
import SectionTitle from "../components/SectionTitle";
import Projeto from "../components/Projeto";
import Certificado from "../components/Certificado";
import portifolio_data from "../data/portifolio_data.json";
import Tecnologia from "../components/Tecnologia";

function Projects() {
  const [ativo, setAtivo] = useState("projetos");
  const listaProjetos = portifolio_data["projetos"];
  const listaCertificados = portifolio_data["certificados"];
  const listaTecnologias = portifolio_data["tecnologias"];
  return (
    <section
      id="projects"
      className="h-fit min-h-200 flex flex-col items-center pb-[80px] sm:pb-[140px]"
    >
      <SectionTitle nome="Portifólio" />
      <h2 className="text-center text-[15px] sm:text-[18px] font-medium text-[#A7A7A7]">
        Explore minha jornada através dos meus projetos, certificações e
        conhecimentos técnicos.
      </h2>
      {/* Botões */}
      <div className="mt-6 sm:mt-10 flex items-center justify-center gap-1 sm:gap-5 w-[95%] px-5 py-3 bg-[rgba(248,248,248,0.1)] rounded-[15px] border-[#444444] border-[1px]">
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
      <div className="mt-2 sm:mt-5 w-[95%] px-5 py-3">
        {/* Projetos */}
        <div
          className={`grid gap-5 
    ${
      ativo === "tecnologias"
        ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    }`}
        >
          {ativo === "projetos" &&
            listaProjetos.map((projeto, index) => (
              <Projeto projeto={projeto} key={index} />
            ))}
          {ativo === "certificados" && (
            <>
              {listaCertificados.map((certificado, index) => (
                <Certificado certificado={certificado} key={index} />
              ))}
              {listaCertificados.length < 3 && (
                <div className="text-center text-[18px] mt-10">
                  Mais certificados em breve...
                </div>
              )}
            </>
          )}
          {ativo === "tecnologias" &&
            listaTecnologias.map((tecnologia, index) => (
              <Tecnologia
                nome={tecnologia.nome}
                key={index}
                icone={tecnologia.icone}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
