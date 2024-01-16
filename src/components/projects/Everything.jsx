import projects from "../../static";

function Everything() {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
            <img src={project.image} alt="did not load" />
        </div>
      ))}
    </div>
  );
}

export default Everything;
