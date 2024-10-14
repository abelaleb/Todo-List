import { deleteTask } from "./todo-list";

export function renderTodos(todos) {
  const mainbar = document.querySelector(".maincontents");
  mainbar.innerHTML = "";

  if (!todos || todos.length == 0) {
    mainbar.innerHTML = "<p>No tasks available. Please add some tasks.</p>";
    return;
  } 
  // Sort Todos by priority
  const priorityOrder = {
    urgent: 1,
    high: 2,
    medium: 3,
    low: 4,
  };
  // Sort tasks based on priority
  todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  todos.forEach((todo, index) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-item", todo.priority.toLowerCase());

    todoElement.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p>${todo.date}</p>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;

    mainbar.appendChild(todoElement);
  });

  // Attach delete event listeners
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      const projectType = event.target.getAttribute("data-project-type"); // Get the project type to pass to deleteTask
      deleteTask(index, projectType); // Ensure correct deletion of task by projectType
    });
  });
}

export function openTodosDialog(dialog) {
  dialog.showModal();
}

export function closeTodosDialog(dialog) {
  dialog.close();
}
export function openProjectsDialog(dialog) {
  dialog.showModal();
}
export function closeProjectsDialog(dialog) {
  dialog.close();
}
