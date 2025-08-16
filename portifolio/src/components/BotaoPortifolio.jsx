function BotaoPortifolio(props) {
  const svgs = {
    projetos: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>`,
    certificados: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11"/>`,
    tecnologias: `<path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4.07141 14v6h5.99999v-6H4.07141Zm4.5-4h6.99999l-3.5-6-3.49999 6Zm7.99999 10c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5Z"/>`,
  };

  const tipo = props.nome.toLowerCase();
  const isActive = props.ativo.toLowerCase() === tipo;

  return (
    <div onClick={() => props.onClick(tipo)} className={`group relative flex flex-col flex-1 items-center justify-center px-2 py-4 rounded-[15px] ${isActive ? "text-[#F8F8F8]" : "text-[#A7A7A7]"} hover:text-[#F8F8F8] ${isActive ? "bg-[#88B876]/15" :  "bg-[#88B876]/0"} hover:bg-[#88B876]/10 transition-colors duration-200 cursor-pointer`}>
      <svg
        className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] group-hover:scale-[1.1] group-hover:rotate-[8deg] group-hover:translate-y-[-5px] transition-transform duration-200 ease-in-out"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        dangerouslySetInnerHTML={{ __html: svgs[tipo] || "" }}
      />
      <h1 className="group-hover:translate-y-[-5px] font-extrabold text-[12px] sm:text-[18px] transition-transform duration-200 ease-in-out">{props.nome}</h1>
    </div>
  );
}

export default BotaoPortifolio;
