import { Link } from 'react-router-dom';

function Projeto(props) {
  const p = props.projeto;
  return (
    <div className="group h-[100%] p-5 rounded-[15px] bg-[#2e3a2f] transition-colors duration-200 border-[2px] border-[transparent] hover:border-[#88B876]">
      <div className="overflow-hidden rounded-[15px] h-[170px]">
        <img
          className="w-full h-full object-cover content-center text-center transition-transform duration-300 transform origin-center group-hover:scale-110"
          loading="lazy"
          src={`/projects-images/${p.caminho}/${p.imagens[0]}`}
          alt="Imagem indisponível no momento."
        />
      </div>
      <div className="mt-3 flex flex-col justify-between">
        {/* Descrição */}
        <div>
          <h1 className="text-[20px] font-bold bg-gradient-to-r from-[#DBEAB5] from-[0%] to-[#CDEB85] to-[40%] text-transparent bg-clip-text">
            {p.nome}
          </h1>
          <p className="text-[#A7A7A7] text-[15px] font-medium mt-2 truncate-text-2-lines">
            {p.descricao || "A descrição do projeto não está disponível. Por favor, verifique mais tarde."}
          </p>
        </div>
        {/* Botões */}
        <div className="text-[13px] sm:text-[16px] mt-5 flex items-center justify-between">
          <a
            className="flex items-center text-[#51A2FF] gap-1 hover:brightness-140 transition-all duration-200"
            href={`https://${p.deploy}`}
            target="_blank"
          >
            Site Demo
            <svg
            className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px]"
              viewBox="0 0 52 52"
              fill="#51A2FF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48.7,2H29.6C28.8,2,28,2.5,28,3.3v3C28,7.1,28.7,8,29.6,8h7.9c0.9,0,1.4,1,0.7,1.6l-17,17c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l17-17c0.6-0.6,1.6-0.2,1.6,0.7v7.9c0,0.8,0.8,1.7,1.6,1.7h2.9c0.8,0,1.5-0.9,1.5-1.7v-19C50,2.5,49.5,2,48.7,2z" />
              <path d="M36.3,25.5L32.9,29c-0.6,0.6-0.9,1.3-0.9,2.1v11.4c0,0.8-0.7,1.5-1.5,1.5h-21C8.7,44,8,43.3,8,42.5v-21C8,20.7,8.7,20,9.5,20H21c0.8,0,1.6-0.3,2.1-0.9l3.4-3.4c0.6-0.6,0.2-1.7-0.7-1.7H6c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V26.2C38,25.3,36.9,24.9,36.3,25.5z" />
            </svg>
          </a>
          <Link to={`/projetos/${p.id}`} href="/projetos/1" className="flex items-center text-[12px] sm:text-[14px] py-2 px-3 rounded-[10px] bg-[#A7A7A7]/20 hover:bg-[#A7A7A7]/25 hover:scale-[1.05] transition-transform duration-200">
            Detalhes{" ->"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projeto;
