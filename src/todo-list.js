import { renderTodos } from "./UI.js";

export const blankTodosListLoad = () => {
  console.log("call todos-list load");

  // Task constructor function
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
      const defaultTodos = []; // Define any default todos if needed
      storeTodos(defaultTodos);
    }
  }

  function addTaskToTodos(task) {
    const todos = getStoredTodos();
    todos.push(task);
    storeTodos(todos);
    renderTodos(todos); // Re-render the todos to display the new one
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeTodos();
    const todos = getStoredTodos();
    renderTodos(todos);

    // Form submission handling
    const form = document.getElementById("Todos-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from submitting the traditional way

      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const date = document.getElementById("dueDate").value;
      const priority = document.getElementById("priority").value;

      const newTask = new task(title, description, date, priority);
      addTaskToTodos(newTask);

      // Close the dialog after adding the task
      const dialog = document.getElementById("TodosDialog");
      dialog.close();

      // Clear the form fields
      form.reset();
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    initializeTodos();
    const todos = getStoredTodos();
    renderTodos(todos);
  });
};
