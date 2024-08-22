export const blankProjectLoad = () => {
  console.log("Called blankproject");

  const defaultProjects = ["Personal", "Work", "Home"];

  function getStoredProjects() {
    return JSON.parse(localStorage.getItem("projects")) || [];
  }

  function storeProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function initializeProjects() {
    const project = getStoredProjects();
    if (project.length === 0) {
      storeProjects(defaultProjects);
    }
  }

  function renderProjects() {
    const projects = getStoredProjects();
    const sidebar = document.querySelector(".sidecontents");

    sidebar.innerHTML = "<h1>Todos Projects</h1>";

    projects.forEach((project) => {
      const projectElement = document.createElement("p");
      projectElement.textContent = project;
      sidebar.appendChild(projectElement);
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    initializeProjects();
    renderProjects();
  });
};
