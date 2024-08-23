import "./style.css";
import { blankTodosListLoad } from "./todo-list.js";
import { openDialog } from "./UI.js";
import { closeDialog } from "./UI.js";

const dialog = document.getElementById("TodosDialog");
const addTodosBtn = document.getElementById("addTodosBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

addTodosBtn.addEventListener("click", () => openDialog(dialog));
closeDialogBtn.addEventListener("click", () => closeDialog(dialog));

blankTodosListLoad();
