let transactions = []

function createTransactionContainer(id) {
  const container = document.createElement('div')
  container.classList.add('transaction')
  container.id = `transaction-${id}`
  return container
}

function createTransactionTitle(name) {
  const title = document.createElement('span')
  title.classList.add('transaction-title')
  title.textContent = name
  return title
}

function createTransactionAmount(amount) {
  const span = document.createElement('span')
  span.classList.add('transaction-amount')

  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })

  const formatedAmount = formater.format(amount)

  if (amount > 0) {
    span.textContent = `${formatedAmount} C`
    span.classList.add('transaction-amount', 'credit')
  } else {
    span.textContent = `${formatedAmount} D`
    span.classList.add('transaction-amount', 'debit')
  }

  return span
}

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)
  const editBtn = createEditTransactionBtn(transaction)
  const deleteBtn = createDeleteTransactionBtn(transaction.id)

  document.querySelector('#transactions').append(container)
  container.append(title, amount, editBtn, deleteBtn)
}

function updateBalance() {
  const balanceSpan = document.querySelector('#balance')
  const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })

  balanceSpan.textContent = formater.format(balance)
}

function createEditTransactionBtn(transaction) {
  const editBtn = document.createElement('button')
  editBtn.textContent = ('Editar')
  editBtn.addEventListener('click', () => {
    document.querySelector('#id').value = transaction.id
    document.querySelector('#name').value = transaction.name
    document.querySelector('#amount').value = transaction.amount
  })

  return editBtn
}

async function saveTransaction(evt) {
  evt.preventDefault()

  const id = document.querySelector('#id').value
  const name = document.querySelector('#name').value
  const amount = parseFloat(document.querySelector('#amount').value)

  if (id) {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const transaction = await response.json()
    const indexToRemove = transactions.findIndex((t) => t.id === id)

    transactions.splice(indexToRemove, 1, transaction)

    document.querySelector(`transaction-${id}`).remove()
    renderTransaction(transaction)

  } else {
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)

    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const transaction = await response.json()
    transactions.push(transaction)
    renderTransaction(transaction)
  }

  evt.target.reset()
  updateBalance()
}

function createDeleteTransactionBtn(id) {
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = ('Excluir')
  deleteBtn.addEventListener('click', async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
    deleteBtn.parentElement.remove()
    const indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, 1)
    updateBalance()
  })

  return deleteBtn
}

async function setup() {
  const results = await fetchTransactions()
  transactions.push(...results)
  transactions.forEach(renderTransaction)
  updateBalance()
}

async function fetchTransactions() {
  return await fetch('http://localhost:3000/transactions').then(resolve => resolve.json())
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)