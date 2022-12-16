// eslint-disable-next-line import/extensions
import { newDest, addNew } from './new.js';
// eslint-disable-next-line no-unused-vars
const addList = () => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks == null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }
  tasks = JSON.parse(localStorage.getItem('tasks'));
  if (newDest.value === '') {
    return;
  }
  addNew(newDest.value, tasks);
};

// eslint-disable-next-line import/prefer-default-export
export { addList };