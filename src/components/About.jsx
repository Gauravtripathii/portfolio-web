import TitleIcon from "./TitleIcon";
import profile_img from "../media/profile.png";

function About() {
  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/18UeV8Wl648neMc6eHmywdn1rnRQ7kkiT/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div
      className="h-fit p-5 pt-20 lg:p-10 flex flex-col items-center gap-5 2xl:gap-10 xl:items-start"
      id="about"
    >
      <TitleIcon title="About Me" />
      <div className="flex flex-col gap-5 items-center 2xl:flex-row">
        {/* profile img part */}
        <div className="w-52 h-52 xl:w-72 xl:h-72 bg-purple-grayish rounded-full flex items-center justify-center xl:mx-auto">
          <img
            src={profile_img}
            alt="profile on yellow bg"
            className="w-9/12"
          />
        </div>

        {/* MAIN CARD */}
        <div className="flex flex-col gap-5 xl:flex-row xl:bg-purple-darker xl:gap-5 xl:rounded-full 2xl:w-3/4">
          {/* PARA DESC */}
          <div className="bg-purple-darker text-white rounded-2xl p-5 xl:pr-0 sm:p-7 flex flex-col gap-3 xl:w-1/2">
            <div className="font-baskerville text-justify text-sm sm:text-lg xl:text-md">
              I am Gaurav Tripathi, web developer and student. I enjoy
              developing full-stack web applications that are both functional
              and visually appealing. I'm always on the lookout for new
              challenges and opportunities to grow as a developer.
            </div>
            {/* DOWNLOAD BUTTON */}
            <div
              className="font-spartan bg-redish w-fit p-3 border-2 border-redish rounded-full hover:bg-purple-darker hover:text-redish sm:text-lg 2xl:text-xl xl:px-10 xl:py-4 cursor-pointer"
              onClick={() => openCV()}
            >
              Download CV
            </div>
          </div>

          <div className="h-0 border sm:hidden"></div>

          {/* SKILL METER */}
          <div className="bg-purple-darker text-white rounded-2xl p-5 xl:pl-0 sm:p-7 flex flex-col xl:justify-between gap-3 font-baskerville text-xs sm:text-lg xl:w-1/2">
            {/* FRONTEND */}
            <div>
              <div className="flex items-center justify-between">
                <div className="font-extrabold">Frontend</div>
                <div>85%</div>
              </div>
              <div className="h-2 bg-white">
                <div className="bg-yellowish h-full w-10/12"></div>
              </div>
            </div>

            {/* BACKEND */}
            <div>
              <div className="flex items-center justify-between">
                <div className="font-extrabold">Backend</div>
                <div>65%</div>
              </div>
              <div className="h-2 bg-white">
                <div className="bg-redish h-full w-8/12"></div>
              </div>
            </div>

            {/* FULLSTACK */}
            <div>
              <div className="flex items-center justify-between">
                <div className="font-extrabold">Fullstack</div>
                <div>75%</div>
              </div>
              <div className="h-2 bg-white">
                <div className="bg-purple-light h-full w-9/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen"></div>
    </div>
  );
}

export default About;
