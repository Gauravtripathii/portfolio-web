import projects from "../../static";
import Project from "./Project";

function Frontend() {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={index}>
          {project.category === "frontend" ? (
            <Project project={project} />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default Frontend;
