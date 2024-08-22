export const blankTodosListLoad = () => {
  console.log("call todos-list load");
  const defaultTodos = [];
  function getStoredTodos() {
    return JSON.parse(localStorage.getItem("projects") || []);
  }
  function storeTodos(todos) {
    localStorage.setItem("projects", JSON.stringify(todos));
  }
  function initializeTodos() {
    const todos = getStoredTodos();
    if (todos.length === 0) {
      storeTodos(defaultTodos);
    }
  }
  function renderTodos() {
    const todos = getStoredTodos();
    const mainbar = document.querySelector(".maincontents");

    mainbar.innerHTML = "";
    todos.forEach((todo) => {
      const todoElement = document.createElement("div");
      todoElement.textContent = todo;
      mainbar.appendChild(todoElement);
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    initializeTodos();
    renderTodos();
  });
};
