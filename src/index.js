import "./style.css";
import { blankTodosListLoad } from "./todo-list.js";
import { openDialog, closeDialog } from "./UI.js";
import { blankProjectLoad } from "./project.js";
import { initializeTodos } from "./todo-list.js";

const dialog = document.getElementById("TodosDialog");
const addTodosBtn = document.getElementById("addTodosBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

// const projectsDialog = document.getElementById("ProjectsDialog");
// const addProjectsDialogBtn = document.getElementById("addProjectsBtn");
// const closeProjectsDialogBtn = document.getElementById("closeProjectsBtn");

addTodosBtn.addEventListener("click", () => openDialog(dialog));
closeDialogBtn.addEventListener("click", () => closeDialog(dialog));
// addProjectsDialogBtn.addEventListener("click", () =>I

document.getElementById("inbox").addEventListener("click", initializeTodos);
document.getElementById("today").addEventListener("click", log);
document.getElementById("upcoming").addEventListener("click", log);
console.log(initializeTodos());

function log() {
  console.log("works");
}

blankTodosListLoad();
blankProjectLoad();
