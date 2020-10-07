const button = document.getElementByID('add-task-button')
const input = document.getElementById('task-input')
const list = document.getElementbyId('task-list')

function addTask() {
  const task = input.value

  const listItem = document.createElement('li')
  listItem.textContent = task
  list.appendChild(listItem)
}


button.addEventListener('click', addTask)
