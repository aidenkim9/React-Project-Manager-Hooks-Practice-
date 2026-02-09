import { useState } from "react";

export default function Tasks({ project, onAddTask, onDeleteTask }) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleAddTask() {
    onAddTask(task);
    setTask("");
  }
  function handleClearTask(id) {
    onDeleteTask(id);
  }

  let content;

  if (project.tasks.length > 0) {
    content = (
      <ul className="bg-stone-200 px-5 py-4">
        {project.tasks.map((task) => (
          <li key={task.id} className="flex justify-between mb-3">
            <span>{task.title}</span>
            <button className="text-stone-700 hover:text-red-900" onClick={() => handleClearTask(task.id)}>
              Clear
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p className="text-stone-800">This project does not have any tasks.</p>;
  }

  return (
    <div>
      <h1 className="text-stone-700 font-bold text-2xl mb-5">Tasks</h1>
      <div className="mb-5">
        <input
          value={task}
          onChange={handleChange}
          type="text"
          className="w-80 bg-stone-200 rounded mr-2 outline-none py-2 px-2"
        />
        <button onClick={handleAddTask} className="bg-stone-700 hover:bg-stone-900 text-stone-200 px-3 py-2 rounded-md">
          Add Task
        </button>
      </div>
      {content}
    </div>
  );
}
