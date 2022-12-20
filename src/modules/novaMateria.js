export { novaMateria }

function novaMateria(nome, divPai) {
    const tr = document.createElement('tr');
    const nomeMateria = document.createElement('td');
    const dados = document.createElement('td')
    const p1 = document.createElement('input');
    const p2 = document.createElement('input');
    const p3 = document.createElement('input');
    const pe1 = document.createElement('input');
    const pe2 = document.createElement('input');
    const pe3 = document.createElement('input');
    const ch = document.createElement('input');

    nomeMateria.innerHTML = nome;
    
    tr.classList.add('materia');
    dados.classList.add
    p1.classList.add('p1');
    p2.classList.add('p2');
    p3.classList.add('p3');
    pe1.classList.add('pe1');
    pe2.classList.add('pe2');
    pe3.classList.add('pe3');
    ch.classList.add('ch');

    const array = [p1, p2, p3, pe1, pe2, pe3, ch];
    
    for (let tag of array) {
        tag.classList.add('input-materia');
        tag.type = "number";
        dados.appendChild(tag);
    }
    
    tr.appendChild(nomeMateria);
    tr.appendChild(dados);
    divPai.appendChild(tr);
}
