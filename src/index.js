import './style.css';
import './imgs/bg1.png';
// eslint-disable-next-line import/named
import {
  addList, deleteOne, showALl, editTask, newDest, addTask,
} from './new.js';
import updateTaskStatus from './statusUpdate.js';

const addBtn = document.querySelector('.add_button');
const btnClear = document.querySelector('.remove_button');

function addBtnN() {
  addList();
  showALl();
  newDest.value = '';
}
function editTasks(array) {
  editTask(array);
}
window.addEventListener('load', () => {
  showALl();
});
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
  if (e.target.classList.contains('checkbox')) {
    // const tasks = JSON.parse(localStorage.getItem('tasks'));
    updateTaskStatus(e.target, task);
  }
});
btnClear.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filterTasks = tasks.filter((task) => task.completed === false);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < filterTasks.length; i++) {
    filterTasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(filterTasks));
  showALl();
});