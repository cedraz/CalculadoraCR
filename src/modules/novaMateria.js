export { novaMateria }
function novaMateria(nome, divPai) {
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const nomeMateria  =document.createElement('td');
    const p1  =document.createElement('input');
    const p2  =document.createElement('input');
    const p3  =document.createElement('input');
    const pe1  =document.createElement('input');
    const pe2  =document.createElement('input');
    const pe3  =document.createElement('input');
    const ch  =document.createElement('input');

    nomeMateria.innerHTML = nome
    const array = [nomeMateria, p1, p2, p3, pe1, pe2, pe3, ch];

    for (let tag of array) {
        tr.appendChild(tag)
    }

    table.appendChild(tr);
    divPai.appendChild(table);
}