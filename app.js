//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function adicionarAmigo() {

    let amigo = document.querySelector('.input-name').value;

    if (amigo == '') {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo);
        listaAmigos(amigos);
    }
    limparCampo();
}

function listaAmigos(amigos) {

    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
    let nomeAmigo = amigos[i];

    let itemLista = document.createElement('li');
    itemLista.textContent = nomeAmigo;

    lista.appendChild(itemLista);
  }

}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}

function limparCampo () {
    amigo = document.querySelector('.input-name');
    amigo.value = '';
}