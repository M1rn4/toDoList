import './style.css';
import './imgs/bg1.png';

const addTask = document.querySelector('.addTask');
const newDest = document.querySelector('.newToDo');
const addBtn = document.querySelector('.add_button');
const remBtn = document.querySelector('.remove_button');

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
            <input type="text" class="task-description" name="${array.description}" id="${array.index + 1}" value="${array.description}">
        </ul>
      </div>

    <div class="actions">
      <i class="fa-solid fa-pencil"></i>
      <i class="fa-solid fa-floppy-disk edit"></i>
      <i class="fa-solid fa-trash-can del"></i>
    </div>
    </div>
      `;
  return container;
};

const addNew = (array, low) => {
  // eslint-disable-next-line no-const-assign
  const taskN = {};
  taskN.description = array;
  taskN.completed = false;
  taskN.index = low.length + 1;
  low.push(taskN);
  localStorage.setItem('tasks', JSON.stringify(low));
};
const addList = () => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks == null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }
  tasks = JSON.parse(localStorage.getItem('tasks'));
  if (newDest.value === '') {
    // eslint-disable-next-line no-alert
    window.alert('can not save, empty value');
    return;
  }
  addNew(newDest.value, tasks);
};

const deleteOne = (array) => {
  let taskName = array.children[0].children[0].children[1].id;
  taskName = parseInt(taskName, 10);
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const ele = tasks.findIndex((e) => e.index === taskName);
  tasks.splice(ele - 1, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const showALl = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  addTask.innerHTML = '';
  tasks.forEach((e) => {
    const listItem = showList(e);
    addTask.insertAdjacentHTML('beforeend', listItem);
  });
};

const editTask = (array) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  let taskItem = array.children[0].children[0].children[1].id;
  taskItem = parseInt(taskItem, 10);
  const ele = tasks.findIndex((e) => e.index + 1 === taskItem);
  const taskName = document.getElementById(taskItem);
  if (taskName.value === '') {
    // eslint-disable-next-line no-alert
    window.alert('can not save, empty value');
    return;
  }
  tasks[ele].description = taskName.value;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

function addBtnN() {
  addList();
  showALl();
  newDest.value = '';
}
function editTasks(array) {
  editTask(array);
}
function removeAll() {
  addTask.innerHTML = '';
}
window.addEventListener('load', () => {
  showALl();
});
remBtn.addEventListener('click', removeAll);
addBtn.addEventListener('click', addBtnN);
addTask.addEventListener('click', (e) => {
  const task = e.target.parentElement.parentElement;
  if (e.target.classList.contains('del')) {
    deleteOne(task, e.target);
    showALl();
  }
  if (e.target.classList.contains('edit')) {
    editTasks(task);
  }
});