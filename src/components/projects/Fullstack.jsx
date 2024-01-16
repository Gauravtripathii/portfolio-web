import Project from "./Project";
import { fullstack } from "../../static";

function Fullstack() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap lg:gap-10 lg:items-center lg:justify-center">
      {fullstack.map((project, index) => (
        <div key={index} className="lg:w-5/12 2xl:w-3/12">
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}

export default Fullstack;
