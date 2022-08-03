export const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", (id)=>deleteTask(id));
    return i;
};
const deleteTask = (id) => {
    console.log('id',id)
};
export default deleteIcon;