import { renderTodos, openDialog, closeDialog } from "./UI.js";

function getStoredTodos() {
  return JSON.parse(localStorage.getItem("todo-list") || "[]");
}

function storeTodos(todos) {
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

export const blankTodosListLoad = () => {
  function task(title, description, date, priority, projectType) {
    this.id = Date.now(); // Using timestamp as unique ID
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
  }
  document.addEventListener("DOMContentLoaded", () => {
    initializeTodos("All");

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
let currentProjectType = "All";
export function initializeTodos(projectType = "All") {
  currentProjectType = projectType;

  const todos = getStoredTodos();
  let filteredTodos;

  if (projectType === "All") {
    // Display all Todos regardless of the projectType
    filteredTodos = todos;
  } else {
    filteredTodos = todos.filter((todo) => todo.projectType === projectType);
  }

  renderTodos(filteredTodos);
}

export function deleteTask(taskId) {
  let todos = getStoredTodos();

  todos = todos.filter((todo) => todo.id !== taskId);

  storeTodos(todos);

  initializeTodos(currentProjectType);
}
