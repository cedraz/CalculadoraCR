import { novaMateria } from "./modules/novaMateria.js";

const materias = document.querySelector('.materias');
const inputNovaMateria = document.querySelector('.input-nome-materia');
const criaMateria = document.querySelector('.botao-nova-materia');

criaMateria.addEventListener('click', () => {
    novaMateria(inputNovaMateria.value, materias);
});
