import profile_img from "../media/profile.png";
import twitter from "../media/icons/twitter.png";
import github from "../media/icons/github.png";
import linkedin from "../media/icons/linkedin.png";
import codepen from "../media/icons/codepen.png";

import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  return (
    <div className="overflow-y-scroll scrollbar-hidden xl:w-10/12 scroll-smooth">
        {/* HOME SECTION */}
      <div className="h-[75svh] flex flex-col justify-between items-center xl:h-[100svh] xl:relative xl:justify-center" id="home">
        {/* main */}
        <div className="w-full flex flex-col items-center p-5 gap-5 lg:gap-10 xl:w-3/4 xl:gap-5 2xl:gap-10">
          {/* profile img part */}
          <div className="w-52 h-52 xl:w-72 xl:h-72 bg-yellowish rounded-full flex items-center justify-center">
            <img
              src={profile_img}
              alt="profile on yellow bg"
              className="w-9/12"
            />
          </div>
          <div className="font-spartan text-white text-4xl xl:text-7xl">
            Gaurav Tripathi
          </div>
          <div className="font-baskerville text-white text-lg xl:text-2xl">
            I'm a Web Developer
          </div>
          {/* SOCIAL ICONS */}
          <div className="flex items-center justify-center gap-10 lg:w-3/4">
            <a href="/" className="w-3/12 h-full flex items-center justify-center">
              <img src={linkedin} alt="social icon" className="w-full sm:w-1/2 hover:scale-110" />
            </a>
            <a href="/" className="w-3/12 h-full flex justify-center items-center">
              <img src={github} alt="social icon" className="w-full sm:w-1/2 hover:scale-110" />
            </a>
            <a href="/" className="w-3/12 h-full flex justify-center items-center">
              <img src={codepen} alt="social icon" className="w-full sm:w-1/2 hover:scale-110" />
            </a>
            <a href="/" className="w-3/12 h-full flex justify-center items-center">
              <img src={twitter} alt="social icon" className="w-full sm:w-1/2 hover:scale-110" />
            </a>
          </div>
        </div>
        {/* SCROLL DOWN WIDGET */}
        <a href="#about" className="flex flex-col items-center gap-1 xl:absolute xl:bottom-0">
            <p className="text-white font-mono">Scroll Down</p>
            <div className="w-7 h-10 border rounded-full p-1 relative">
                <span className="block w-2 h-2 bg-white rounded-full absolute left-1/2 -translate-x-1/2 scroll-animate"></span>
            </div>
        </a>
      </div>

      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;
