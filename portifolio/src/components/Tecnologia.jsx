function Tecnologia(props) {
  return (
    <div
      className="group w-full aspect-square flex flex-col items-center justify-center gap-2 rounded-[15px] bg-[#88B876]/15 cursor-default transition-all duration-300 origin-top 
                hover:scale-x-105 hover:scale-y-105"
    >
      <div className="w-[80px] h-[80px] flex items-center justify-center group-hover:drop-shadow-[0_0_12px_#CDEB85] transition-all duration-300">
        <img
          className="w-full h-full object-contain"
          src={`/tech-icons/${props.icone}`}
          alt=""
        />
      </div>
      <h1 className="font-semibold">{props.nome}</h1>
    </div>
  );
}

export default Tecnologia;
