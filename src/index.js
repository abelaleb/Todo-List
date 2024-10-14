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
const projectsDialog = document.getElementById("ProjectsDialog")
const addTodosBtn = document.getElementById("addTodosBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const addProjectsDialogBtn = document.getElementById("addProjectsBtn");
const closeProjectsDialogBtn = document.getElementById(
  "closeProjectsBtn"
);

addTodosBtn.addEventListener("click", () => openTodosDialog(dialog));
closeDialogBtn.addEventListener("click", () => closeTodosDialog(dialog));
addProjectsDialogBtn.addEventListener("click", () =>
  openProjectsDialog(projectsDialog)
);
closeProjectsDialogBtn.addEventListener("click", () =>
  closeProjectsDialog(projectsDialog)
);

blankTodosListLoad();
blankProjectLoad();
