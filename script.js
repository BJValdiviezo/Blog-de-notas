const btn = document.querySelector("[data-form-btn]");
                    //Arrows Function
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    const value = input.value;
    task.classList.add("card");
   
    input.value = '';
    const content =`<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;
  list.appendChild(task);
    console.log(value);
}


btn.addEventListener("click", createTask)