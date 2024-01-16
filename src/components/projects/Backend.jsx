import Project from "./Project";
import { backend } from "../../static";

function Backend() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap lg:gap-10 lg:items-center lg:justify-center">
      {backend.map((project, index) => (
        <div key={index} className="lg:w-5/12 2xl:w-3/12">
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}

export default Backend;
