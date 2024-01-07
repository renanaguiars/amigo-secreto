let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos'); 

    if(amigo.value == '') {
        alert('Informe o nome do amigo!')
    } else {
        let nome = amigo.value.toUpperCase();
        validarLista(nome, lista);
    }
    console.log(amigos)
    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {

    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    let listaSorteio = document.getElementById('lista-sorteio')
    embaralha(amigos);

    for(let i = 0; i < amigos.length; i++) {

        if(i == amigos.length - 1) {
            listaSorteio.innerHTML += amigos[i] + ' => ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += amigos[i] + ' => ' + amigos[i+1] + '<br>';
        }
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let listaSorteio = document.getElementById('lista-sorteio')
    listaSorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos'); 
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function validarLista(nomeAmigo, minhaLista) {
    if (minhaLista.textContent == '') {
        minhaLista.textContent = nomeAmigo;
    } else {
        minhaLista.textContent += ', ' + nomeAmigo;
    }

    if(amigos.includes(nomeAmigo)) {
        alert('Esse amigo já está na minhaLista!')
    } else {
        amigos.push(nomeAmigo);
    }
    
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}


// Algoritmo de Fisher-Yates, para embaralhar um array
function embaralha(lista) {
    for(let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice-1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice-1]];
    }
}