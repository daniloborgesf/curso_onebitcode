function renderArticle(articleData) {
  const article = document.createElement('article')
  article.classList.add('article')
  article.id = `article-${articleData.id}`

  const title = document.createElement('h3')
  title.classList.add('article-title')
  title.textContent = articleData.title

  const content = document.createElement('div')
  content.classList.add('article-content')
  content.innerHTML = articleData.content

  const author = document.createElement('div')
  author.classList.add('article-author')
  author.textContent = articleData.author

  article.append(title, author, content)
  document.querySelector('#articles').appendChild(article)
}

async function fetchArticle() {
  const articles = await fetch('http://localhost:3000/articles').then(response => response.json())
  articles.forEach(renderArticle)
}

document.addEventListener('DOMContentLoaded', () => { fetchArticle() })

const form = document.querySelector('form')

form.addEventListener('submit', async (evt) => {
  evt.preventDefault()

  const articleData = {
    title: document.querySelector('#title').value,
    author: document.querySelector('#author').value,
    content: document.querySelector('#content').value
  }

  const response = await fetch('http://localhost:3000/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleData)
  })

  const saveArticle = await response.json()
  form.reset()
  renderArticle(saveArticle)
  console.log(saveArticle)
})

