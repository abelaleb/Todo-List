import "./style.css";
import { blankTodosListLoad } from "./todo-list.js";
import { openDialog, closeDialog } from "./UI.js";
import { blankProjectLoad } from "./project.js";
import { initializeTodos } from "./todo-list.js";

const dialog = document.getElementById("TodosDialog");
const addTodosBtn = document.getElementById("addTodosBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

addTodosBtn.addEventListener("click", () => openDialog(dialog));
closeDialogBtn.addEventListener("click", () => closeDialog(dialog));

document.getElementById("all").addEventListener("click", () => {
  initializeTodos("All"); // Call initializeTodos with "All" to display all tasks
});

document.getElementById("today").addEventListener("click", () => {
  initializeTodos("Today")
});
document.getElementById("upcoming").addEventListener("click", () => {
  initializeTodos("Upcoming");
});
document.getElementById("completed").addEventListener("click",()=>{
  initializeTodos("completed")
  
})

document.getElementById("Home").addEventListener("click", () => {
  initializeTodos("Home");
});
document.getElementById("Personal").addEventListener("click", () => {
  initializeTodos("Personal");
});
document.getElementById("Work").addEventListener("click", () => {
  initializeTodos("Work");
});

blankTodosListLoad();
blankProjectLoad();
