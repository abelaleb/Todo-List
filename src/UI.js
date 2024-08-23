// UI rendering function to display todos
export function renderTodos(todos) {
    const mainbar = document.querySelector(".maincontents");
    mainbar.innerHTML = "";
  
    todos.forEach((todo) => {
      const todoElement = document.createElement("div");
      todoElement.classList.add("todo-item");
      todoElement.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>Due: ${todo.date}</p>
        <p>Priority: ${todo.priority}</p>
      `;
      mainbar.appendChild(todoElement);
    });
  }