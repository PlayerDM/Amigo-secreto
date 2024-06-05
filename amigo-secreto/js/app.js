let amigos = [];

function adicionar(){
    let nomes = document.getElementById('nome-amigo');
    if (nomes.value === '') {
        alert('Você deve adicionar um nome!!!');
        return; 
    }

    if(amigos.includes(nomes.value)){
        alert('Nome já adicionado!');
        return;  
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(nomes.value);

    if (lista.textContent == ''){
        lista.textContent = nomes.value;
    } else {
        lista.textContent = lista.textContent + ', '+ nomes.value
    }
    nomes.value = '';
}

function sortear(){
    if (amigos.length < 4){
        alert ('Deve haver pelo menos 4 nomes!!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i ++){
        let proximoIndice = (i + 1) % amigos.length; 
        sorteio.innerHTML += amigos[i] + ' --> ' + amigos[proximoIndice] + '<br>';
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}