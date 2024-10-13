import "./style.css";
import { blankTodosListLoad } from "./todo-list.js";
import { openDialog, closeDialog } from "./UI.js";
import { blankProjectLoad } from "./project.js";

const dialog = document.getElementById("TodosDialog");
const addTodosBtn = document.getElementById("addTodosBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

addTodosBtn.addEventListener("click", () => openDialog(dialog));
closeDialogBtn.addEventListener("click", () => closeDialog(dialog));

blankTodosListLoad();
blankProjectLoad();
