import { renderTodos, openDialog, closeDialog } from "./UI.js";

function getStoredTodos() {
  return JSON.parse(localStorage.getItem("todo-list") || "[]");
}

function storeTodos(todos) {
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

export const blankTodosListLoad = () => {
  function task(title, description, date, priority, projectType) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.projectType = projectType;
  }

  function addTaskToTodos(newTask) {
    const todos = getStoredTodos();
    todos.push(newTask);
    storeTodos(todos);
    renderTodos(todos);
    // initializeTodos(newTask.projectType);
  }
  document.addEventListener("DOMContentLoaded", () => {
    initializeTodos("Home");

    const form = document.getElementById("Todos-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const date = document.getElementById("dueDate").value;
      const priority = document.getElementById("priority").value;
      const projectType = document.getElementById("projectType").value;

      const newTask = new task(title, description, date, priority, projectType);
      addTaskToTodos(newTask);

      const dialog = document.getElementById("TodosDialog");
      closeDialog(dialog);
      form.reset();
    });
  });
};
export function initializeTodos(projectType = "Home") {
  const todos = getStoredTodos();
  let filteredTodos;

  if (projectType === "Home") {
    filteredTodos = todos.filter((todo) => todo.projectType === "Home");
  } else if (projectType === "Work") {
    filteredTodos = todos.filter((todo) => todo.projectType === "Work");
  } else if (projectType === "Personal") {
    filteredTodos = todos.filter((todo) => todo.projectType === "Personal");
  }

  renderTodos(filteredTodos);
}

export function deleteTask(index, projectType) {
  const todos = JSON.parse(localStorage.getItem("todo-list") || "[]");
  todos.splice(index, 1); // Delete the specific todo
  localStorage.setItem("todo-list", JSON.stringify(todos)); // Update localStorage
  // initializeTodos(projectType); // Re-render todos based on the projectType
}
