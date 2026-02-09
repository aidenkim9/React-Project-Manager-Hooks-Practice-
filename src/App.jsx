import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import BasicPage from "./components/BasicPage";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = { id: Math.random(), ...projectData, tasks: [] };

      return {
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  function handleAddTask(task) {
    setProjectState((prevState) => {
      const newTask = { id: Math.random(), title: task };
      return {
        ...prevState,
        projects: [
          ...prevState.projects.map((project) => {
            return project.id === prevState.selectedProjectId
              ? { ...project, tasks: [...project.tasks, newTask] }
              : { ...project };
          }),
        ],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [
          ...prevState.projects.map((project) =>
            project.id === prevState.selectedProjectId
              ? { ...project, tasks: project.tasks.filter((task) => task.id !== id) }
              : { ...project },
          ),
        ],
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        selectedProjectId: id,
        projects: [...prevState.projects],
      };
    });
  }

  let selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} handleAddProject={handleStartAddProject} onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <BasicPage handleAddProject={handleStartAddProject} />;
  } else {
    content = (
      <ProjectDetails
        project={selectedProject}
        onAddTask={handleAddTask}
        onDelete={handleDeleteProject}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <main className="h-screen w-full my-10 flex">
      <Sidebar
        handleAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
