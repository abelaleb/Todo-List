import "./style.css";
import { blankProjectLoad } from "./project.js";
import { blankTodosListLoad } from "./todo-list.js";
import { format, addDays } from "date-fns";

blankProjectLoad();
blankTodosListLoad();

const container = document.querySelector(".container");
const dialog = document.getElementById("TodosDialog");
const addTodosBtn = document.getElementById("addTodosBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

addTodosBtn.addEventListener("click", () => {
  dialog.showModal();
});
closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

localStorage.setItem("colorSetting ", "wow");
