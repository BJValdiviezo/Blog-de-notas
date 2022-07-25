import checkComplete from "./components/checkComplete.js";
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector("[data-form-btn]");
//Arrows Function
const addTask = (evento) =>{
  const list = document.querySelector("[data-list]");
  const task = createTask(evento);
  list.appendChild(task);
}

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]")
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY')
  console.log(dateFormat);
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

  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  task.appendChild(dateElement)
  task.appendChild(deleteIcon());
  return task;
}


//Arrow Functions o funciones anonimas
btn.addEventListener("click", addTask);