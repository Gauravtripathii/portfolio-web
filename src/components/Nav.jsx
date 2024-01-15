import Logo from "./Logo";

function Nav() {
  return (
    <div className="w-3/12 border-r flex flex-col gap-52 items-center justify-center">
        <Logo />
        <nav className="flex flex-col text-3xl font-baskerville text-white gap-5">
            <a href="/">Home</a>
            <a href="/">About Me</a>
            <a href="/">Projects</a>
            <a href="/">Skills</a>
        </nav>
    </div>
  );
}

export default Nav;
