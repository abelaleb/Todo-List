import { format } from "date-fns";
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

  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-item", todo.priority.toLowerCase());

    todoElement.innerHTML = `
      <div class="todoElement-top">
      <h3>${
        todo.title
      }</h3> <input type="checkbox" class="complete-checkbox" data-id="${
      todo.id
    }" ${todo.completed ? "checked" : ""}> 
      </div>
    <div>
    <div class="todoElement-bottom">
   <p>${todo.description}</p>
   <p style="color: gray">${format(todo.date, "MMM dd ")}</p>
   <button class="delete-btn" data-id="${todo.id}" data-project-type="${
      todo.projectType
    }">Delete</button>
    </div>`;

    mainbar.appendChild(todoElement);
  });

  // Attach delete event listeners
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const taskId = event.target.getAttribute("data-id");
      // const projectType = event.target.getAttribute("data-project-type"); // Get the project type to pass to deleteTask
      deleteTask(Number(taskId));
    });
  });
}

export function openDialog(dialog) {
  dialog.showModal();
}

export function closeDialog(dialog) {
  dialog.close();
}
export function openProjectsDialog(dialog) {
  dialog.showModal();
}
export function closeProjectsDialog(dialog) {
  dialog.close();
}
