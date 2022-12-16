/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const newDest = document.querySelector('.newToDo');
const addTask = document.querySelector('.addTask');

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
            <input type="text" class="task-description" name="${array.description}" id="${array.index}" value="${array.description}">
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
    return;
  }
  addNew(newDest.value, tasks);
};

function deleteOne(array) {
  let taskName = array.children[0].children[0].children[1].id;
  taskName = parseInt(taskName, 10);
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const ele = tasks.findIndex((e) => e.index === taskName);
  tasks.splice(ele - 1, 1);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
const showALl = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  addTask.innerHTML = '';
  tasks.forEach((e) => {
    const listItem = showList(e);
    addTask.insertAdjacentHTML('beforeend', listItem);
  });
  const completedTasksIndex = tasks.filter((task) => task.completed === true);
  for (let i = 0; i < completedTasksIndex.length; i += 1) {
    for (let j = 0; j < (addTask.children).length; j += 1) {
      if (j === (completedTasksIndex[i].index - 1)) {
        // eslint-disable-next-line no-undef, max-len
        addTask.children[j].children[0].children[0].children[0].children[0].checked = true;
      }
    }
  }
};

const editTask = (array) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  let taskItem = array.children[0].children[0].children[1].id;
  taskItem = parseInt(taskItem, 10);
  const ele = tasks.findIndex((e) => e.index + 1 === taskItem);
  const taskName = document.getElementById(taskItem);
  if (taskName.value === '') {
    return;
  }
  tasks[ele].description = taskName.value;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {
  addNew, addList, deleteOne, showALl, editTask, newDest, addTask,
};