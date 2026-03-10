const input = document.querySelector('input')
const button = document.querySelector('button')
const taskList = document.getElementById('task-content')

function addTask(){
  if(!input.value) {
    alert('Ingrese una tarea!')
  } else {
    // Guardar el valor del input en una variable
    let inputText = input.value

    // Creando contenedor para las tareas
    let task = document.createElement('div')
    task.classList.add('task')

    //Creando párrafo
    let text = document.createElement('p')
    text.textContent = inputText

    //Creando contenedor para los iconos
    let icons = document.createElement('div')
    icons.classList.add('icons')
    task.append(text, icons)

    //Creando icono para completar
    let iconCompleted = document.createElement('i')
    iconCompleted.classList.add('completed', 'fa-solid', 'fa-circle-check')

    //Creando icono para eliminar
    let iconDelete = document.createElement('i')
    iconDelete.classList.add('delete', 'fa-solid', 'fa-trash')

    icons.append(iconCompleted, iconDelete)
    taskList.appendChild(task)

    input.value = ""

    iconCompleted.addEventListener('click', taskCompleted)
    iconDelete.addEventListener('click', taskDelete)
  }
}

button.addEventListener('click', addTask)

function taskCompleted(e){
  let task = e.target.closest('.task')
  task.classList.toggle('done')
}

function taskDelete(e) {
  let task = e.target.closest('.task')
  task.remove()
}

input.addEventListener('keydown', (e)=>{
  if (e.key === 'Enter') {
    addTask()
  }
})
