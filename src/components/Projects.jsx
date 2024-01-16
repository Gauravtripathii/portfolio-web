import { NavLink, Routes, Route } from "react-router-dom";

import TitleIcon from "./TitleIcon";
import Fullstack from "./projects/Fullstack";
import Frontend from "./projects/Frontend";
import Everything from "./projects/Everything";
import Backend from "./projects/Backend";

function Projects() {
  return (
    <div id="projects" className="mt-5 flex flex-col gap-10 p-5 xl:p-10">
      <TitleIcon title="Projects" />

      <nav className="font-spartan flex flex-wrap gap-3 text-white sm:text-xl md:text-2xl">
        <NavLink to="/">Everything</NavLink>
        <NavLink to="/frontend">Frontend</NavLink>
        <NavLink to="/backend">Backend</NavLink>
        <NavLink to="/fullstack">Fullstack</NavLink>
      </nav>

      <div className="px-10">
        <Routes>
          <Route path="/" element={<Everything />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/fullstack" element={<Fullstack />} />
        </Routes>
      </div>

      <div className="h-screen"></div>
    </div>
  );
}

export default Projects;
