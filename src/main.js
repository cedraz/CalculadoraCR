const input = document.querySelector('.pedro');

const button = document.querySelector('.button');

const resposta = document.querySelector('.resposta');

button.addEventListener('click', () => {
    const div = document.createElement('div');
    div.innerHTML = Number(input.value) * 2;
    resposta.appendChild(div);
});

multiplica(Number(input.value));