import Logo from "./Logo";

function Nav() {
  return (
    <div className="border-b w-full h-[25svh] p-3 flex flex-col items-center justify-center xl:w-fit xl:h-screen xl:border-b-0 xl:border-r xl:gap-52">
      <div className="w-full flex flex-col items-center justify-center xl:gap-52 xl:w-fit">
        <Logo />
        <nav className="flex gap-5 lg:gap-10 justify-center items-center xl:text-2xl font-baskerville text-white xl:flex-col xl:items-start xl:w-full">
          <a href="#home" className="hover:text-redish active:text-redish">
            Home
          </a>
          <a href="#about" className="hover:text-redish active:text-redish">
            About Me
          </a>
          <a href="#projects" className="hover:text-redish active:text-redish">
            Projects
          </a>
          <a href="#skills" className="hover:text-redish active:text-redish">
            Skills
          </a>
        </nav>
      </div>

      <p className="text-white opacity-80 text-xl hidden xl:block">
        made using Tailwind and React
      </p>
    </div>
  );
}

export default Nav;
