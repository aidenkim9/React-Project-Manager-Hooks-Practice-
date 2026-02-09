import Tasks from "./Tasks";

export default function ProjectDetails({ project, onAddTask, onDelete, onDeleteTask }) {
  const formmatedDate = new Date(project.dueDate).toLocaleDateString("kr", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full max-w-3xl pl-10">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl text-stone-600">{project.title}</h1>
          <button className="text-stone-600 hover:text-stone-900" onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className="my-5 text-stone-400">{formmatedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks project={project} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
}
