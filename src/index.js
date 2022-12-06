import './style.css';
import './imgs/bg1.png';

const addTask = document.querySelector('.addTask');
const newDest = document.querySelector('.newToDo');
const addBtn = document.querySelector('.add_button');
const remBtn = document.querySelector('.remove_button');
let task = [];

function addlist() {
  task.push(newDest.value);
}

function showList() {
  addTask.innerHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < task.length; i++) {
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
          <li class="task-description">${task[i]}</li>
        </ul>
      </div>

    <div class="actions">
      <i class="fa-solid fa-pen-to-square edit"></i>
      <i class="fa-solid fa-trash-can del"></i>
    </div>
    </div>
      `;
    addTask.innerHTML += container;
  }
}
function addBtnN() {
  addlist();
  showList();
}
function removeAll() {
  task = {
    description: [],
    completed: [],
  };
  showList();
}

remBtn.addEventListener('click', removeAll);

addBtn.addEventListener('click', addBtnN);
