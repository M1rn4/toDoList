import './style.css';
import './imgs/bg1.png';

const addTask = document.querySelector('.addTask');
const newDest = document.querySelector('.newToDo');
const addBtn = document.querySelector('.add_button');
const remBtn = document.querySelector('.remove_button');
const task = [];

const showList = (array) => {
  // eslint-disable-next-line no-plusplus
  const container = `
    <div class ="squareT">
      <div class ="square">
        <ul class="toDo">
          <li>
            <input                                                                          
            type="checkbox"
            class="checkbox" 
            name="checkbox" 
            id="checkbox" ></li>
          <li class="task-description" id="${array.index + 1}">${array.description}</li>
        </ul>
      </div>

    <div class="actions">
      <i class="fa-solid fa-pen-to-square edit"></i>
      <i class="fa-solid fa-trash-can del"></i>
    </div>
    </div>
      `;
  return container;
};
window.addEventListener('load', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  // eslint-disable-next-line no-console
  tasks.forEach((element) => {
    const content = showList(element);
    addTask.innerHTML += content;
  });
});
const addlist = (array) => {
  const taskN = {};
  taskN.description = array;
  taskN.completed = false;
  taskN.index = task.length + 1;
  const listItem = showList(taskN);
  newDest.insertAdjacentHTML('beforeend', listItem);
  task.push(taskN);
  localStorage.setItem('tasks', JSON.stringify(task));
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((e) => {
    addTask.innerHTML += showList(e);
  });
};
// eslint-disable-next-line no-unused-vars
const deleteOne = (array) => {
  let taskName = array.children[0].children[0].children[1].id;
  // eslint-disable-next-line no-const-assign
  taskName = parseInt(taskName, 10);
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  // eslint-disable-next-line no-const-assign, eqeqeq
  const ele = tasks.findIndex((e) => e.index == taskName);
  // eslint-disable-next-line no-console
  tasks.splice(ele - 1, 1);
  // eslint-disable-next-line no-console
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // eslint-disable-next-line no-console
  addTask.innerHTML = '';
  tasks.forEach((e) => {
    // eslint-disable-next-line no-unused-expressions    
    addTask.innerHTML += showList(e);
  });
  console.log(tasks);
};

function addBtnN() {
  // eslint-disable-next-line no-console
  addlist(newDest.value);
  newDest.value = '';
}
function removeAll() {
  // eslint-disable-next-line no-const-assign
  addTask.innerHTML = '';
  // eslint-disable-next-line no-console
  console.log(task);
}

remBtn.addEventListener('click', removeAll);
addBtn.addEventListener('click', addBtnN);
addTask.addEventListener('click', (e) => {
  const task = e.target.parentElement.parentElement;
  if (e.target.classList.contains('del')) {
    // eslint-disable-next-line no-console
    deleteOne(task, e.target);
  }
  // eslint-disable-next-line max-len
  // // task will be edited when first the input field of task is updated and then edit icon is clicked
  // if (e.target.classList.contains('edit')) {
  //   editTask(task);
  // }
  // if (e.target.classList.contains('checkbox')) {
  //   const tasks = JSON.parse(localStorage.getItem('tasks'));
  //   updateTaskStatus(e.target, tasks);
  // }
});