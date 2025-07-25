function BotaoHero({ nome, link, icon }) {
  const svgs = {
    newtab: `<svg viewBox="0 0 52 52" fill="#F8F8F8" xmlns="http://www.w3.org/2000/svg"><path d="M48.7,2H29.6C28.8,2,28,2.5,28,3.3v3C28,7.1,28.7,8,29.6,8h7.9c0.9,0,1.4,1,0.7,1.6l-17,17c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l17-17c0.6-0.6,1.6-0.2,1.6,0.7v7.9c0,0.8,0.8,1.7,1.6,1.7h2.9c0.8,0,1.5-0.9,1.5-1.7v-19C50,2.5,49.5,2,48.7,2z"/><path d="M36.3,25.5L32.9,29c-0.6,0.6-0.9,1.3-0.9,2.1v11.4c0,0.8-0.7,1.5-1.5,1.5h-21C8.7,44,8,43.3,8,42.5v-21C8,20.7,8.7,20,9.5,20H21c0.8,0,1.6-0.3,2.1-0.9l3.4-3.4c0.6-0.6,0.2-1.7-0.7-1.7H6c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V26.2C38,25.3,36.9,24.9,36.3,25.5z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="#F8F8F8" xmlns="http://www.w3.org/2000/svg"><path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="5" width="18" height="14" rx="2" stroke-width="2" stroke-linecap="round"/></svg>`,
  };

  return (
    <a href={`#${link}`} className="gradient-shadow">
      <h1 className="text-[15px] bg-[#060B0A] rounded-[10px] py-2 px-10 flex justify-center items-center gap-1">
        {nome}
        <span
          className="w-[16px]"
          dangerouslySetInnerHTML={{ __html: svgs[icon] || "" }}
        />
      </h1>
    </a>
  );
}

export default BotaoHero;
