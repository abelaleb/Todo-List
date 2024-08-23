import { renderTodos, openDialog, closeDialog } from "./UI.js";

export const blankTodosListLoad = () => {
  function task(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }

  function getStoredTodos() {
    return JSON.parse(localStorage.getItem("todo-list") || "[]");
  }

  function storeTodos(todos) {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }

  function initializeTodos() {
    const todos = getStoredTodos();
    if (todos.length === 0) {
      const defaultTodos = [];
      storeTodos(defaultTodos);
    }
    renderTodos(todos);
  }

  function addTaskToTodos(newTask) {
    const todos = getStoredTodos();
    todos.push(newTask);
    storeTodos(todos);
    renderTodos(todos);
  }
  // function deleteTask(index) {
  //   const todos = getStoredTodos();
  //   todos.splice(index, 1);
  //   storeTodos(todos);
  //   renderTodos(todos);
  // }
  document.addEventListener("DOMContentLoaded", () => {
    initializeTodos();

    const form = document.getElementById("Todos-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const date = document.getElementById("dueDate").value;
      const priority = document.getElementById("priority").value;

      const newTask = new task(title, description, date, priority);
      addTaskToTodos(newTask);

      const dialog = document.getElementById("TodosDialog");
      closeDialog(dialog);
      form.reset();
    });
  });
};

export function deleteTask(index) {
  const todos = JSON.parse(localStorage.getItem("todo-list") || "[]");
  todos.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(todos));
  renderTodos(todos);
}
