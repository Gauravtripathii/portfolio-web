import { useState } from "react";

function Project({ project }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative mb-5 md:mb-10 lg:m-0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <img src={project.image} alt="project profile" className="rounded-xl" />
      </div>
      <div
        className={
          hover
            ? `absolute w-full h-full bg-purple-light top-0 opacity-80 rounded-xl`
            : `hidden`
        }
      ></div>
      {/* PROJECT DESCRIPTION */}
      <div
        className={
          hover
            ? `absolute top-0 text-white font-spartan p-5 w-full h-full flex flex-col justify-between items-center gap-2`
            : `hidden`
        }
      >
        <div className="text-xl sm:text-6xl lg:text-5xl">{project.title}</div>
        <div className="font-baskerville text-sm sm:text-3xl lg:text-2xl">{project.desc}</div>
        <a
          href={project.link}
          target="_blank"
          className="w-full bg-redish rounded-full text-center p-2 sm:text-3xl sm:p-4 lg:text-2xl lg:p-2"
        >
          VISIT
        </a>
      </div>
    </div>
  );
}

export default Project;
