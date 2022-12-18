import { media } from "./media.js";

function novaMateria(nome, divPai) {
    const table = document.createElement('form');
    const tr = document.createElement('tr');
    const nomeMateria = document.createElement('td');
    const p1 = document.createElement('input');
    const p2 = document.createElement('input');
    const p3 = document.createElement('input');
    const pe1 = document.createElement('input');
    const pe2 = document.createElement('input');
    const pe3 = document.createElement('input');
    const ch = document.createElement('input');

    const mediaDaMateria = media([p1.value, p2.value, p3.value], [pe1.value, pe2.value, pe3.value]);

    nomeMateria.innerHTML = nome;
    const array = [p1, p2, p3, pe1, pe2, pe3, ch];
    
    tr.appendChild(nomeMateria)
    for (let tag of array) {
        tag.type = "number"
        tr.appendChild(tag);
    }
    
    table.appendChild(tr);
    divPai.appendChild(table);
    return array;
}

export { novaMateria }