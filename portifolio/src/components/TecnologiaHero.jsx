function TecnologiaHero(props) {
  return (
    <div className="py-2 px-5 bg-[rgba(248,248,248,0.1)] rounded-[20px] border-[#444444] border-[1px] hover:bg-[rgba(255,255,255,0.14)] transition-colors duration-200 cursor-default">
      <h1 className="font-light text-[15px] text-[#F8F8F8]">{props.nome}</h1>
    </div>
  );
}

export default TecnologiaHero;
