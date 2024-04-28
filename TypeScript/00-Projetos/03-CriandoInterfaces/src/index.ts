interface GithubUserResponse {
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
  message: "Não encontrado"
}

interface GithubReponse {
  name: string
  description: string
  fork: boolean
  stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user: GithubUserResponse = await response.json()

  if (user.message) {
    console.log('Usário não encontrado.')
  } else {
    users.push(user)
  }

  console.log(`
  O usuário ${user.login} foi salvo.\n
  ID: ${user.id}\n
  Login: ${user.login} 
  Nome: ${user.name}
  Bio: ${user.bio}
  Repositórios Públicos: ${user.public_repos}
  `)
}

async function showUser(username: string) {
  const user = users.find(user => user.login === username)

  if (typeof user === 'undefined') {
    console.log('Usuário não encontrado.')
  } else {
    const response = await fetch(user.repos_url)
    const repos: GithubReponse[] = await response.json()

    let message = (`
    O usuário ${user.login} foi salvo.\n
    ID: ${user.id}\n
    Login: ${user.login} 
    Nome: ${user.name}
    Bio: ${user.bio}
    Repositórios Públicos: ${user.public_repos}`)

    repos.forEach(repo => {
      message += `
      \nNome: ${repo.name}
      Descrição: ${repo.description}
      Estrelas: ${repo.stargazers_count}
      Em um Fork: ${repo.fork ? 'Sim' : 'Não'}`
    })

    console.log(message)
  }
}

function showAllUser() {
  let message = 'Usuários:\n'

  users.forEach(user => { message += `\n ${user.login}` })
  console.log(message)
}

function showReposTotal() {
  const reposTotal = users.reduce((accumulator, user) => accumulator + user.public_repos, 0)
  console.log(`O grupo possui um total de ${reposTotal} repositórios públicos.`)
}

function showTopFive() {
  const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).splice(0, 4)

  let message = `Top 5 usuários com mais repositórios públicos:\n`
  topFive.forEach((user, index) => { message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios.` })
  console.log(message)
}

