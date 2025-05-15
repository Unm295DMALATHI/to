let taskList = [];
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListElement = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    taskList.push(task);
    renderTaskList();
    taskInput.value = '';
  }
}

function renderTaskList() {
  taskListElement.innerHTML = '';
  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskListElement.appendChild(li);
  });
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTaskList();
}

