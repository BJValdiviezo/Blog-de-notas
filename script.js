(()=>{
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
  taskContent.appendChild(deleteTask())
 
  //task.innerHTML = content;
  task.appendChild(taskContent);
  list.appendChild(task);
  const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`;

}


//Arrow Functions o funciones anonimas
btn.addEventListener("click", createTask)


const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far","fa-check-square","icon");
  i.addEventListener("click", completeTask);
  return i;
}
const completeTask = (event) =>{
  const element = event.target
  element.classList.toggle("fas");
  element.classList.toggle("far");
  element.classList.toggle("completeIcon");
}
const deleteTask = () => {
  const i= document.createElement("i");
  i.classList.add("fas","fa-trash-alt","trashIcon");
  return i;
}
})();