const users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
        console.log('Usário não encontrado.');
    }
    else {
        users.push(user);
    }
    console.log(`
  O usuário ${user.login} foi salvo.\n
  ID: ${user.id}\n
  Login: ${user.login} 
  Nome: ${user.name}
  Bio: ${user.bio}
  Repositórios Públicos: ${user.public_repos}
  `);
}
async function showUser(username) {
    const user = users.find(user => user.login === username);
    if (typeof user === 'undefined') {
        console.log('Usuário não encontrado.');
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = (`
    O usuário ${user.login} foi salvo.\n
    ID: ${user.id}\n
    Login: ${user.login} 
    Nome: ${user.name}
    Bio: ${user.bio}
    Repositórios Públicos: ${user.public_repos}`);
        repos.forEach(repo => {
            message += `
      \nNome: ${repo.name}
      Descrição: ${repo.description}
      Estrelas: ${repo.stargazers_count}
      Em um Fork: ${repo.fork ? 'Sim' : 'Não'}`;
        });
        console.log(message);
    }
}
