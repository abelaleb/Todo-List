import "./style.css";
import { blankTodosListLoad } from "./todo-list.js";

const dialog = document.getElementById("TodosDialog");
const addTodosBtn = document.getElementById("addTodosBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

addTodosBtn.addEventListener("click", () => openDialog(dialog));
closeDialogBtn.addEventListener("click", () => closeDialog(dialog));

blankTodosListLoad();
