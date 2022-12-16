function updateTaskStatus(el, task) {
  el.addEventListener('change', (e) => {
    // eslint-disable-next-line no-use-before-define
    let taskName = task.children[1].id;
    taskName = parseInt(taskName, 10);
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const ele = tasks.findIndex((e) => e.index === taskName);
    if (e.target.checked) {
      tasks[ele].completed = true;
    } else {
      tasks[ele].completed = false;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}
export default updateTaskStatus;