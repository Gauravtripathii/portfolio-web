import projects from "../../static";
import Project from "./Project";

function Backend() {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={index}>
          {project.category === "backend" ? (
            <Project project={project} />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default Backend;
