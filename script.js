document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.querySelector('.task-input input');
  const addButton = document.querySelector('.task-input button');
  const taskList = document.querySelector('.task-list');
  const clearButton = document.querySelector('.footer button');
  const taskCounter = document.querySelector('.footer span');

  function updateTaskCounter() {
    const remainingTasks = taskList.querySelectorAll('li:not(.completed)').length;
    taskCounter.textContent = `${remainingTasks} tasks left `;
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button>&times;</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
      updateTaskCounter();
    }
  }

  function deleteTask(event) {
    if (event.target.tagName === 'BUTTON') {
      event.target.closest('li').remove();
      updateTaskCounter();
    }
  }

  function toggleTaskCompletion(event) {
    if (event.target.tagName === 'INPUT') {
      event.target.closest('li').classList.toggle('completed');
      updateTaskCounter();
    }
  }

  function clearCompletedTasks() {
    const completedTasks = taskList.querySelectorAll('.completed');
    completedTasks.forEach(task => task.remove());
    updateTaskCounter();
  }

  addButton.addEventListener('click', addTask);
  taskList.addEventListener('click', deleteTask);
  taskList.addEventListener('change', toggleTaskCompletion);
  clearButton.addEventListener('click', clearCompletedTasks);
});