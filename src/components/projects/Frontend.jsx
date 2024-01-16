import Project from "./Project";
import { frontend } from "../../static";

function Frontend() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap lg:gap-10 lg:items-center lg:justify-center">
      {frontend.map((project, index) => (
        <div key={index} className="lg:w-5/12 2xl:w-3/12">
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}

export default Frontend;
