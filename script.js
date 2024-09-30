const button = document.querySelector('.btn-add-task')
const input = document.querySelector('.input-task')
const listTask = document.querySelector('.list-tasks')

let itemList = []

function addTask() {
  if (input.value.trim() === '') {
    alert("Por favor, insira a tarefa antes de adicionar!")
    return
  }


  itemList.push({
    task: input.value,
    finished: false
  })

  input.value = ''

  showTask()
}

function showTask() {
  let newList = ''

  itemList.forEach((item, index) => {
    newList =
      newList +
      ` <li class="task ${item.finished && 'done'}">
          <img src="./src/checked.png" alt="check" onclick="finishTask(${index})"/>
          <p>${item.task}</p>
          <img src="src/trash.png" alt="delete" onclick="deleteItem(${index})" />
        </li>`
  })

  listTask.innerHTML = newList

  localStorage.setItem('list', JSON.stringify(itemList))
}

function finishTask(index) {
  itemList[index].finished = !itemList[index].finished

  showTask()
}

function deleteItem(index) {
  itemList.splice(index, 1)

  showTask()
}

function reload() {
  const localStorageTask = localStorage.getItem('list')


  if(localStorageTask){
    itemList = JSON.parse(localStorageTask)
  }
  

  showTask()
}

reload()
button.addEventListener('click', addTask)


