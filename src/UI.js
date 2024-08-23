// UI.js
import { deleteTask } from "./todo-list";
export function renderTodos(todos) {
  const mainbar = document.querySelector(".maincontents");
  mainbar.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-item",todo.priority.toLowerCase());

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
      deleteTask(index);
    });
  });
}

export function openDialog(dialog) {
  dialog.showModal();
}

export function closeDialog(dialog) {
  dialog.close();
}

