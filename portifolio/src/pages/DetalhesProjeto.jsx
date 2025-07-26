import { Link, useParams } from "react-router-dom";
import listaProjetos from "../data/projetos.json";
import Bubbles from "../components/Bubbles";
import BotaoHero from "../components/BotaoHero";
import TecnologiaHero from "../components/TecnologiaHero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importação dos estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function DetalhesProjeto() {
  const { id } = useParams();
  const p = listaProjetos.projetos.find((proj) => proj.id === parseInt(id, 10));
  const tecnologias = p.tecnologias || [];

  if (!p) {
    return (
      <div className="bg-[#060B0A] min-h-screen flex items-center justify-center">
        <p className="text-xl">Projeto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#060B0A] min-h-screen py-16">
      <Bubbles />
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-[12px] md:text-[16px] gap-4 md:gap-8 flex items-center">
          <Link
            to="/"
            className="group bg-[#A7A7A7]/20 hover:bg-[#A7A7A7]/25 transition-colors duration-200 px-2 py-1 md:px-4 md:py-2 rounded-[10px]"
          >
            <p className="inline-block mr-1 group-hover:-translate-x-1 transition-transform duration-200">
              {"<-"}
            </p>
            Voltar
          </Link>
          <p className="text-[#A7A7A7]">
            {"Projetos > "}
            <span className="text-[#F8F8F8]">{p.nome}</span>
          </p>
        </div>
        <div className="mt-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Esquerda: Informações do Projeto */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#DBEAB5] to-[#CDEB85] text-transparent bg-clip-text">
              {p.nome}
            </h1>
            <p className="mt-4 text-[#A7A7A7] font-medium">{p.descricao}</p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <svg
                  fill="#CDEB85"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z" />
                </svg>
                Tecnologias Utilizadas
              </h2>
              <div className="flex flex-wrap gap-3 mt-5">
                {tecnologias.map((tec, index) => (
                  <TecnologiaHero key={index} nome={tec} />
                ))}
              </div>
            </div>

            <div className="mt-10 flex gap-4 md:gap-8">
              {p.deploy && (
                <BotaoHero
                  nome="Demo"
                  outLink={`https://${p.deploy}`}
                  icon="newtab"
                />
              )}
              {p.github && (
                <BotaoHero
                  nome="Github"
                  outLink={`https://github.com/arturtomaz/${p.github}`}
                  icon="github"
                />
              )}
            </div>
          </div>

          {/* Direita: Slider Responsivo */}
          <div className="flex-1 w-full lg:w-[10%] mt-12 lg:mt-0">
            {p.imagens && p.imagens.length > 0 ? (
              <div className="w-full mx-auto rounded-lg overflow-hidden shadow-2xl shadow-black/30">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="mySwiper"
                >
                  {p.imagens.map((imgSrc, index) => (
                    <SwiperSlide
                      key={index}
                      className="aspect-video bg-black/20"
                    >
                      <img
                        src={`/projects-images/${p.caminho}/${imgSrc}`}
                        alt={`${p.nome} - Imagem ${index + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className="w-full aspect-video bg-white/5 rounded-lg flex items-center justify-center">
                <p className="text-[#A7A7A7]">Nenhuma imagem disponível.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesProjeto;
