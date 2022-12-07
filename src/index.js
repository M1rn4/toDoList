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
          <li class="task-description">${array.description}</li>
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

const addlist = (array) => {
  const taskN = {};
  taskN.description = newDest.value;
  taskN.completed = array;
  taskN.index = task.length + 1;
  const listItem = showList(taskN);
  newDest.insertAdjacentHTML('beforeend', listItem);
  task.push(taskN);
  addTask.innerHTML += listItem;
};

function addBtnN() {
  // eslint-disable-next-line no-console
  addlist(false);
}
function removeAll() {
  // eslint-disable-next-line no-const-assign
  addTask.innerHTML = '';
  // eslint-disable-next-line no-console
  console.log(task);
}

remBtn.addEventListener('click', removeAll);

addBtn.addEventListener('click', addBtnN);
