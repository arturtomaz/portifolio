import SectionTitle from "../components/SectionTitle";

function About() {
  const svgs = {
    projetos: `<svg
    class="w-[30px]"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8 8L4 12L8 16M16 16L20 12L16 8M14 5L10 19"
  />
</svg>
`,
    curriculo: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-4 h-4 sm:w-5 sm:h-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`,
  };
  return (
    <section
      id="about"
      className="h-fit flex flex-col items-center pb-[80px] sm:pb-[140px]"
    >
      <SectionTitle nome="Sobre Mim" />
      <h2 className="text-center text-[15px] sm:text-[18px] font-medium text-[#A7A7A7]">
        Conheça um pouco da minha trajetória profissional e pessoal.
      </h2>
      <div className="w-[95%] flex flex-col lg:flex-row items-center mt-10 gap-8">
        <div className="flex-2 max-w-[500px] overflow-hidden rounded-full">
          <img
            className="w-full h-full aspect-square object-cover scale-115"
            src="/quantum-computer.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col flex-3 items-center gap-5 text-[15px] sm:text-[18px]">
          <div className="flex flex-col gap-5 indent-8 font-light leading-normal sm:leading-8 text-center lg:text-justify">
            <p>
              Olá👋, me chamo Artur Tribeck e sou um Desenvolvedor Web. Atuo
              acompanhando todo o processo desde o levantamento de demandas até
              a entrega de soluções personalizadas para clientes. Participo de
              reuniões de alinhamento para garantir a organização e o bom
              andamento dos projetos em equipe, sempre focando em entender as
              necessidades e propor melhorias eficazes.
            </p>
            <p>
              Sou proativo, com facilidade para aprender e aplicar novas
              ferramentas, buscando resolver desafios com eficiência e colaborar
              para o crescimento coletivo. Minha experiência inclui automação de
              processos e desenvolvimento de aplicações reais. Meu objetivo é
              contribuir com equipes que valorizam qualidade, inovação e impacto
              real.
            </p>
          </div>
          <div className="flex gap-2 sm:gap-5 font-medium text-[13px] sm:text-[15px]">
            <a
              className="group"
              href="https://drive.google.com/file/d/1e9SljTrlV5b4MrseF0tJ_TV-j6aqHONR/view?usp=sharing"
              target="_blank"
            >
              <div className="flex items-center gap-1 bg-[#88B876] py-2 px-2 sm:py-3 sm:px-4 rounded-[10px] group-hover:scale-105 transition-all duration-300">
                <span className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{
                      __html: svgs["curriculo"] || "",
                    }}
                  />
                </span>

                <p>Meu currículo</p>
              </div>
            </a>
            <a href="#projects" className="group">
              <div className="flex items-center gap-1 py-2 px-2 sm:py-3 sm:px-4 rounded-[10px] border-solid border-[1px] border-[#88B876] text-[#88B876] group-hover:scale-105 transition-all duration-300">
                <span className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{
                      __html: svgs["projetos"] || "",
                    }}
                  />
                </span>

                <p>Meus projetos</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
