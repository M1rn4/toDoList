import './style.css';
import './imgs/bg1.png';
// eslint-disable-next-line import/named
import {
  addList, deleteOne, showALl, editTask, newDest, addTask,
} from './new.js';

const addBtn = document.querySelector('.add_button');

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
});
