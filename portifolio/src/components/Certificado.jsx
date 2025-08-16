import { useState, useEffect } from "react";

function Certificado(props) {
  const c = props.certificado;

  const [imagemAberta, setImagemAberta] = useState(null);

  const abrirImagem = (src) => {
    setImagemAberta(src);
    window.history.pushState({ imagemAberta: true }, "");
  };

  const fecharImagem = () => {
    setImagemAberta(null);
    if (window.history.state?.imagemAberta) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        fecharImagem();
      }
    };

    const handlePopState = () => {
      // Se clicar no botão "voltar", fecha imagem
      if (imagemAberta) {
        setImagemAberta(null);
      }
    };

    if (imagemAberta) {
      document.addEventListener("keydown", handleKeyDown);
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [imagemAberta]);

  return (
    <>
      <div
        onClick={() => abrirImagem(`/certificates/${c.nome}`)}
        className="group flex items-center justify-center h-full bg-[#2e3a2f] border-[#2e3a2f] border-[20px] hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
      >
        <div className="z-1 absolute flex flex-col items-center font-bold text-[20px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-4 transition-transform duration-500">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f8f8f8"
            stroke="#f8f8f8"
            className="mb-3"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#f8f8f8"
                d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
              ></path>
            </g>
          </svg>
          Ver Certificado
        </div>
        <img
          className="group-hover:brightness-70 transition-all duration-300"
          src={`/certificates/${c.nome}`}
          alt="Erro: certificado não encontrado."
        />
      </div>
      {imagemAberta && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
          onClick={fecharImagem}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Botão de fechar no canto */}
            <button
              onClick={fecharImagem}
              className="absolute top-2 right-2 bg-[#35605A] text-white rounded-full text-xl px-3 py-1 hover:bg-[#CDEB85] hover:text-black transition duration-300 cursor-pointer"
            >
              ×
            </button>

            {/* Imagem no tamanho real, limitada à viewport */}
            <img
              src={imagemAberta}
              alt="Imagem ampliada"
              className="rounded max-w-[90vw] max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Certificado;
