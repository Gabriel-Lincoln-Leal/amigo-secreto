
let amigos = [];

function adicionarAmigo() {

    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
} 

