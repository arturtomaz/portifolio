import ArturTribeck from "../components/ArturTribeck";
import GitHubIcon from "../components/GitHubIcon";
import InstagramIcon from "../components/InstagramIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import MenuItem from "../components/MenuItem";

function Header() {
  return (
    <div id="home" className="sticky top-0 mx-auto max-w-[95vw] z-50 backdrop-blur-2xl bg-[#060B0A]/50">
      <header className="flex justify-between items-center px-2 py-5">
        <ArturTribeck />
        {/* Nav & SocialMedia */}
        <div className="flex-2 flex justify-between items-center">
          <nav className="">
            <ul className="flex gap-15">
              <MenuItem name="Home" link="#home" />
              <MenuItem name="Projetos" link="#projects" />
              <MenuItem name="Sobre mim" link="#about" />
              <MenuItem name="Contato" link="#contact" />
            </ul>
          </nav>
          <div className="flex gap-10">
            <LinkedinIcon />
            <GitHubIcon />
            <InstagramIcon />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
