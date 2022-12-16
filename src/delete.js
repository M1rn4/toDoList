// eslint-disable-next-line no-unused-vars
function deleteOne(array) {
  let taskName = array.children[0].children[0].children[1].id;
  taskName = parseInt(taskName, 10);
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const ele = tasks.findIndex((e) => e.index === taskName);
  // eslint-disable-next-line no-console
  console.log('hi');
  tasks.splice(ele - 1, 1);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// eslint-disable-next-line import/prefer-default-export
export { deleteOne };