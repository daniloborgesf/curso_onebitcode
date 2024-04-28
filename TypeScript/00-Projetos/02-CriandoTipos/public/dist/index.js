const planetas = [];
function planetaAdicionar(nome, coordenadas, situacao) {
    planetas.push({
        nome,
        coordenadas,
        situacao,
        satelites: []
    });
    alert(`O planeta ${nome} foi registrado com sucesso!`);
}
function planetaBuscar(nome) {
    const planeta = planetas.find(planeta => planeta.nome === nome);
    return planeta ?? false;
}
function situacaoAtualizar(situacao, planeta) {
    planeta.situacao = situacao;
    alert(`A situação do planeta ${planeta.nome} foi atualizada para ${situacao}.`);
}
function sateliteAdicionar(nome, planeta) {
    planeta.satelites.push(nome);
    alert(`O satélite ${nome} foi adicionado ao planeta ${planeta.nome}.`);
}
function sateliteRemover(nome, planeta) {
    planeta.satelites = planeta.satelites.filter(satelite => satelite !== nome);
}
function promptSituacaoValidada() {
    let situacao;
    let validada = false;
    while (!validada) {
        const situacaoEntrada = prompt("Informe a situação do Planeta:\n1 Habitado \n2 Habitável \n3 Inabitável\n4 Inexplorado");
        switch (situacaoEntrada) {
            case '1':
                situacao = "Habitado";
                validada = true;
                break;
            case '2':
                situacao = "Habitável";
                validada = true;
                break;
            case '3':
                situacao = "Inabitável";
                validada = true;
                break;
            case '4':
                situacao = "Inexplorado";
                validada = true;
                break;
            default:
                alert('Situação inválida..');
                break;
        }
        return situacao;
    }
}
function promptPlanetaValido(callbackfn) {
    const planetaNome = prompt('Informe o nome do Planta:');
    const planeta = planetaBuscar(planetaNome);
    if (planeta) {
        callbackfn(planeta);
    }
    else {
        alert('Planeta não encontrado! Retornando ao menu...');
    }
}
function primeiroMenu() {
    const nome = prompt('Informe o nome do Planeta:');
    const coordenadaA = Number(prompt('Informe a 1° Coordenada:'));
    const coordenadaB = Number(prompt('Informe a 2° Coordenada:'));
    const coordenadaC = Number(prompt('Informe a 3° Coordenada:'));
    const coordenadaD = Number(prompt('Informe a 4° Coordenada:'));
    const situacao = promptSituacaoValidada();
    const confirmacao = confirm(`Confirma o registro do planeta ${nome}?
  Coordenas: ${coordenadaA}, ${coordenadaB}, ${coordenadaC}, ${coordenadaD}`);
    if (confirmacao) {
        planetaAdicionar(nome, [coordenadaA, coordenadaB, coordenadaC, coordenadaD], situacao);
    }
}
function segundoMenu() {
    promptPlanetaValido(planeta => {
        const situacao = promptSituacaoValidada();
        situacaoAtualizar(situacao, planeta);
    });
}
function terceiroMenu() {
    promptPlanetaValido(planeta => {
        const satelite = prompt('Informe o nome do satélite a ser adicionado:');
        sateliteAdicionar(satelite, planeta);
    });
}
function quartoMenu() {
    promptPlanetaValido(planeta => {
        const satelite = prompt('Informe o nome do satélite a ser removido:');
        sateliteRemover(satelite, planeta);
    });
}
function quintoMenu() {
    let lista = 'Planetas\n';
    planetas.forEach(planeta => {
        const [a, b, c, d] = planeta.coordenadas;
        lista += `
    Nome: ${planeta.nome}
    Coordenadas: ${planeta.coordenadas}
    Situação: ${planeta.situacao}
    Satélites: ${planeta.satelites.length}`;
        planeta.satelites.forEach(satelite => {
            lista += `    - ${satelite}\n`;
        });
        alert(lista);
    });
}
let opcaoUsuario = 0;
while (opcaoUsuario !== 6) {
    const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;
    opcaoUsuario = Number.parseInt(prompt(menu));
    switch (opcaoUsuario) {
        case 1:
            primeiroMenu();
            break;
        case 2:
            segundoMenu();
            break;
        case 3:
            terceiroMenu();
            break;
        case 4:
            quartoMenu();
            break;
        case 5:
            quintoMenu();
            break;
        case 6:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
