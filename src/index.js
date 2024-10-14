import "./style.css";
import { blankTodosListLoad } from "./todo-list.js";
import {
  openTodosDialog,
  closeTodosDialog,
  openProjectsDialog,
  closeProjectsDialog,
} from "./UI.js";
import { blankProjectLoad } from "./project.js";

const dialog = document.getElementById("TodosDialog");
const addTodosBtn = document.getElementById("addTodosBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

// const projectsDialog = document.getElementById("ProjectsDialog");
// const addProjectsDialogBtn = document.getElementById("addProjectsBtn");
// const closeProjectsDialogBtn = document.getElementById("closeProjectsBtn");

addTodosBtn.addEventListener("click", () => openTodosDialog(dialog));
closeDialogBtn.addEventListener("click", () => closeTodosDialog(dialog));
// addProjectsDialogBtn.addEventListener("click", () =>I

document.getElementById("inbox").addEventListener("click", log);
document.getElementById("today").addEventListener("click", log);
document.getElementById("upcoming").addEventListener("click", log);

function log() {
  console.log("works");
}

blankTodosListLoad();
blankProjectLoad();
