import { useState } from "react";
import ArturTribeck from "../components/ArturTribeck";
import GitHubIcon from "../components/GitHubIcon";
import InstagramIcon from "../components/InstagramIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import MenuItem from "../components/MenuItem";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* --- HEADER --- */}
      <div className="sticky top-0 mx-auto z-50 backdrop-blur-2xl bg-[#060B0A]/50 lg:px-10">
        <header className="flex justify-between items-center px-2 py-5 relative z-50">
          <ArturTribeck />

          {/* --- MENU DESKTOP --- */}
          <div className="hidden lg:flex flex-2 items-center gap-10">
            <nav className="flex-1">
              <ul className="flex gap-15">
                <MenuItem name="Home" link="#home" />
                <MenuItem name="Projetos" link="#projects" />
                <MenuItem name="Sobre mim" link="#about" />
                <MenuItem name="Contato" link="#contact" />
              </ul>
            </nav>
            <div className="flex flex-1 justify-end gap-10">
              <LinkedinIcon />
              <GitHubIcon />
              <InstagramIcon />
            </div>
          </div>

          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none cursor-pointer"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 transition-all duration-300 ease-in-out transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 transition-all duration-300 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>
      </div>

      {/* --- MENU MOBILE FIXO --- */}
      <div
        className={`
          lg:hidden fixed top-0 left-0 w-full h-full bg-[#060B0A]/50 backdrop-blur-2xl z-20
          overflow-hidden transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="flex flex-col items-start px-4 pt-24 pb-8">
          <ul className="flex flex-col items-start gap-8">
            <div onClick={handleLinkClick}>
              <MenuItem name="Home" link="#home" />
            </div>
            <div onClick={handleLinkClick}>
              <MenuItem name="Projetos" link="#projects" />
            </div>
            <div onClick={handleLinkClick}>
              <MenuItem name="Sobre mim" link="#about" />
            </div>
            <div onClick={handleLinkClick}>
              <MenuItem name="Contato" link="#contact" />
            </div>
          </ul>
          <div className="flex gap-10 mt-8">
            <LinkedinIcon />
            <GitHubIcon />
            <InstagramIcon />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
