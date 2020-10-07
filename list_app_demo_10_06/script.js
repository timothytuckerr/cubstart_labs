const button = document.getElementById("add-task-button")
const input = document.getElementById("task-input")
const list = document.getElementById("task-list")

function addTask() {
  const task = input.value
  const listItem = document.createElement('li')
  listItem.textContent = task
  list.appendChild(listItem)
}


button.addEventListener('click', addTask)
