import projects from "../../static";
import Project from "./Project";

function Fullstack() {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={index}>
          {project.category === "fullstack" ? (
            <Project project={project} />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default Fullstack;
