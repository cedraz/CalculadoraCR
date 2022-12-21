export { novaMateria }

function novaMateria(nome, divPai, cabecalho) {
    const tr = document.createElement('tr');
    const nomeDaMateria = document.createElement('p')
    const p1 = document.createElement('input');
    const p2 = document.createElement('input');
    const p3 = document.createElement('input');
    const pe1 = document.createElement('input');
    const pe2 = document.createElement('input');
    const pe3 = document.createElement('input');
    const ch = document.createElement('input');

    nomeDaMateria.innerHTML = nome

    if (cabecalho) {
        const novoTr = document.createElement('tr');
        novoTr.classList.add('cabecalho')
        novoTr.innerHTML = `
            <td>Nome da Matéria</td>
            <td>Av. 1</td>
            <td>Av. 2</td>
            <td>Av. 3</td>
            <td>Peso 1</td>
            <td>Peso 2</td>
            <td>Peso 3</td>
            <td>Carga Horária</td>
        `
        divPai.appendChild(novoTr);
    }

    tr.classList.add('materia');
    p1.classList.add('p1');
    p2.classList.add('p2');
    p3.classList.add('p3');
    pe1.classList.add('pe1');
    pe2.classList.add('pe2');
    pe3.classList.add('pe3');
    ch.classList.add('ch');

    const array = [p1, p2, p3, pe1, pe2, pe3, ch];
    
    tr.appendChild(nomeDaMateria);

    for (let tag of array) {
        tag.classList.add('input-materia');
        tag.type = "number";
        tr.appendChild(tag);
    }
    
    divPai.appendChild(tr);
}
