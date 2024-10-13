import { renderTodos, openDialog, closeDialog } from "./UI.js";

export const blankTodosListLoad = () => {
  function task(title, description, date, priority, projectType) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.projectType = projectType;
  }

  function getStoredTodos() {
    return JSON.parse(localStorage.getItem("todo-list") || "[]");
  }

  function storeTodos(todos) {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }

  function initializeTodos(projectType) {
    const todos = getStoredTodos();
    let filteredTodos;

    if (projectType === "Inbox") {
      filteredTodos = todos;
    } else if (projectType === "Today") {
      const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
      filteredTodos = todos.filter((todo) => todo.dueDate === today);
    } else if (projectType === "This Week") {
      const today = new Date();
      const oneWeekLater = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 7
      );

      filteredTodos = todos.filter((todo) => {
        const todoDate = new Date(todo.dueDate);
        return todoDate >= today && todoDate <= oneWeekLater;
      });
    }
    renderTodos(filteredTodos);
  }

  function addTaskToTodos(newTask) {
    const todos = getStoredTodos();
    todos.push(newTask);
    storeTodos(todos);
    renderTodos(todos);
    initializeTodos(newTask.projectType);
  }
  document.addEventListener("DOMContentLoaded", () => {
    initializeTodos("Inbox");

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

export function deleteTask(index, projectType) {
  const todos = JSON.parse(localStorage.getItem("todo-list") || "[]");
  todos.splice(index, 1); // Delete the specific todo
  localStorage.setItem("todo-list", JSON.stringify(todos)); // Update localStorage
  initializeTodos(projectType); // Re-render todos based on the projectType
}
