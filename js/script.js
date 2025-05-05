let tasksData = []
let currentView = 'table'

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => {
    tasksData = data.slice(0, 10)
    render()
  })

document.getElementById('tableBtn').onclick = () => {
  currentView = 'table'
  render()
}

document.getElementById('cardBtn').onclick = () => {
  currentView = 'card'
  render()
}

function render() {
  const container = document.getElementById('tasks')
  container.innerHTML = ''

  if (currentView === 'table') {
    const table = document.createElement('table')
    table.className = 'table'

    const thead = document.createElement('thead')
    thead.innerHTML = `
      <tr>
        <th>Заголовок задачи</th>
        <th>Описание задачи</th>
        <th>Дата</th>
        <th>Время</th>
        <th>Выполнено</th>
      </tr>
    `
    table.appendChild(thead)

    const tbody = document.createElement('tbody')
    tasksData.forEach(task => {
      const tr = document.createElement('tr')
      tr.innerHTML = `
        <td>Переписать проект на Vue 3</td>
        <td>${task.title}</td>
        <td>21.10.21</td>
        <td>14:31</td>
        <td class="${task.completed ? 'status-done' : 'status-notdone'}">
          ${task.completed ? 'Готово' : 'Не выполнено'}
        </td>
      `
      tbody.appendChild(tr)
    })

    table.appendChild(tbody)
    container.appendChild(table)
  } else {
    const cards = document.createElement('div')
    cards.className = 'cards'

    tasksData.forEach(task => {
      const card = document.createElement('div')
      card.className = 'card'
      card.innerHTML = `
        <h3>Переписать проект на Vue 3</h3>
        <p>${task.title}</p>
        <p>21.10.21 <b>14:31</b></p>
        <p class="${task.completed ? 'status-done' : 'status-notdone'}">
          ${task.completed ? 'Готово' : 'Не выполнено'}
        </p>
      `
      cards.appendChild(card)
    })

    container.appendChild(cards)
  }
}
