export const blankProjectLoad = () => {
  const defaultProjects = ["Personal", "Work", "Home"];
  console.log(defaultProjects);

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
    const projectDropdown = document.getElementById("projects");
  
    // Clear existing options
    projectDropdown.innerHTML = "";
  
    projects.forEach((project) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = project;
      optionElement.value = project;
      projectDropdown.appendChild(optionElement);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    initializeProjects();
    renderProjects();
  });
};
