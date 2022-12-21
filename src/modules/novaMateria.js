export { novaMateria }

function novaMateria(nome, divPai, cabecalho) {
    const divMateria = document.createElement('div');
    const divNomeDaMateria = document.createElement('div');
    const nomeDaMateria = document.createElement('span');
    const valores = document.createElement('div')
    const p1 = document.createElement('input');
    const p2 = document.createElement('input');
    const p3 = document.createElement('input');
    const pe1 = document.createElement('input');
    const pe2 = document.createElement('input');
    const pe3 = document.createElement('input');
    const ch = document.createElement('input');

    divNomeDaMateria.appendChild(nomeDaMateria);
    nomeDaMateria.innerHTML = nome

    if (cabecalho) {
        const divCabecalho = document.createElement('div');
        divCabecalho.classList.add('cabecalho')
        divCabecalho.innerHTML = `
            <td>Nome da Matéria</td>
            <td>Av. 1</td>
            <td>Av. 2</td>
            <td>Av. 3</td>
            <td>Peso 1</td>
            <td>Peso 2</td>
            <td>Peso 3</td>
            <td>Carga Horária</td>
        `
        divPai.appendChild(divCabecalho);
    }

    divMateria.classList.add('materia');
    valores.classList.add('valores');
    divNomeDaMateria.classList.add('nomeDaMateria')
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
        
        valores.appendChild(tag);
    }
    
    divMateria.appendChild(divNomeDaMateria);
    divMateria.appendChild(valores);
    divPai.appendChild(divMateria);
}
