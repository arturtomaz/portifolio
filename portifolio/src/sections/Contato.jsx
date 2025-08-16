import InputContact from "../components/InputContact";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";

function Contato() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzzvqbyj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        setStatus("Ocorreu um erro. Tente novamente.");
      }
    } catch (error) {
      setStatus("Erro de conexão. Tente novamente. (" + error.message + ")");
    }
  };

  return (
    <section
      id="contact"
      className="h-fit flex flex-col items-center pb-[70px]"
    >
      <SectionTitle nome="Contato" />
      <h2 className="text-center text-[15px] sm:text-[18px] font-medium text-[#A7A7A7]">
        Ficou alguma dúvida? Entre em contato comigo!
      </h2>
      <div className="w-[95%] max-w-[700px] mt-4 sm:mt-8 flex justify-center bg-[rgba(248,248,248,0.1)] rounded-[15px] px-4 py-4 sm:px-10 sm:py-8">
        <div className="w-full bg-[rgba(248,248,248,0.1)] rounded-[15px] px-4 py-4 sm:px-10 sm:py-8">
          <div className="mb-4 sm:mb-8">
            <h3 className="font-semibold text-[25px] sm:text-[40px] bg-gradient-to-r from-[#35605A] via-[#88B876] to-[#CDEB85] text-transparent bg-clip-text">
              Entre em Contato!
            </h3>
            <h4 className="text-[15px] sm:text-[16px] font-normal text-[#A7A7A7]">
              Me mande uma mensagem e vamos conversar.
            </h4>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputContact
              placeholder="Digite seu nome"
              name="name"
              type="text"
            />
            <InputContact
              placeholder="Digite seu melhor email"
              name="email"
              type="email"
            />
            <textarea
              name="message"
              className="h-[200px] bg-[rgba(248,248,248,0.1)] rounded-[15px] text-[12px] sm:text-[15px] border-[#A7A7A7]/20 border-[1px] hover:border-[#CDEB85] px-4 py-3 sm:px-8 sm:py-4 resize-none focus:outline-2 focus:outline-[#88B876] transition-all duration-200"
              placeholder="Digite aqui sua mensagem"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full text-[14px] sm:text-[16px] font-semibold px-4 py-2 sm:px-8 sm:py-4 bg-[#88B876] rounded-[15px] cursor-pointer hover:scale-102 active:scale-98 transition-all duration-200"
            >
              Enviar mensagem
            </button>
          </form>
          {status && (
            <p className="font-semibold mt-4 text-center text-[#88B876]">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contato;
