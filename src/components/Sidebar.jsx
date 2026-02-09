import Button from "./Button";

export default function Sidebar({ handleAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside id="sidebar" className="py-16 px-8 w-1/3 md:w-1/4 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="uppercase mb-8 font-bold text-nowrap md:text-xl text-stone-200">your projects</h2>
      <div>
        <Button handleClick={handleAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-10 w-full">
        {projects &&
          projects.map((project) => {
            let cssClasses = "px-2 py-1 rounded cursor-pointer hover:bg-stone-800 hover:text-stone-200 my-2";

            if (project.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }

            return (
              <li key={project.id} className={cssClasses} onClick={() => onSelectProject(project.id)}>
                {project.title}
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
