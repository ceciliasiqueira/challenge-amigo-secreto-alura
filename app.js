let amigos = [];
console.log(amigos[0]);

function adicionarAmigo() {
    let campo = document.querySelector('input').value;

    if (campo.trim() === '') {
        alert('Por favor, insira um nome válido!');
        console.log('Por favor, insira um nome válido!');
        return;
    }

    amigos.push(campo);
    console.log(amigos);

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

    limparCampo();
}

function limparCampo() {
    const campo = document.querySelector('input');
    campo.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum amigo foi adicionado para sortear.');
        return;
    }

    const escolhido = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${escolhido}</li>`;
}