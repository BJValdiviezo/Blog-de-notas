import checkComplete from "./components/checkComplete.js";
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector("[data-form-btn]");
//Arrows Function
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  const value = input.value;
  task.classList.add('card');
  input.value = '';

  //Backticks `` alt gr + }
  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value
  taskContent.appendChild(titleTask);
  //task.innerHTML = content;
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
}


//Arrow Functions o funciones anonimas
btn.addEventListener("click", createTask);