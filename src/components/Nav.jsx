import Logo from "./Logo";

function Nav() {
  return (
    // w-3/12 border-r flex flex-col gap-52 items-center justify-center
    <div className="border-b w-full p-3 flex flex-col items-center justify-center xl:w-3/12 xl:h-screen xl:border-b-0 xl:border-r xl:gap-52">
        <Logo />
        {/* flex flex-col text-3xl font-baskerville text-white gap-5 */}
        <nav className="flex gap-5 lg:gap-10 justify-center items-center xl:text-2xl font-baskerville text-white xl:flex-col">
            <a href="#home" className="hover:text-redish active:text-redish">Home</a>
            <a href="#about" className="hover:text-redish active:text-redish">About Me</a>
            <a href="#projects" className="hover:text-redish active:text-redish">Projects</a>
            <a href="#skills" className="hover:text-redish active:text-redish">Skills</a>
        </nav>

        <p className="text-white opacity-80 text-xl hidden xl:block">made using Tailwind and React</p>
    </div>
  );
}

export default Nav;
