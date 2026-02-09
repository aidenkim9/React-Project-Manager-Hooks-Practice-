import noProject from "../assets/no-projects.png";
import Button from "./Button";

export default function BasicPage({ handleAddProject }) {
  return (
    <div className="w-full text-center mt-24">
      <img src={noProject} alt="empty task list" className="w-16 h-16 mx-auto" />
      <h2 className="font-bold text-xl text-stone-500 my-4">No Project Selected</h2>
      <p className="mb-4 text-stone-400">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button handleClick={handleAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
