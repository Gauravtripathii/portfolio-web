import projects from "../../static";
import Project from "./Project";

function Everything() {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={index}>
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}

export default Everything;
