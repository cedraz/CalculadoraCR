import { novaMateria } from "./modules/novaMateria.js";
import { calculaMedia } from "./modules/media.js";
import { bubbleSort } from "./modules/bubbleSort.js";

const divMaterias = document.querySelector('.materias');
const inputNovaMateria = document.querySelector('.input-nome-materia');
const criaMateria = document.querySelector('.botao-nova-materia');
const botaoCalculaCR = document.querySelector('.calcula-cr');
const divCR = document.querySelector('.cr');

let nomeDaMateria = ""
let materias = [];
let cabecalho = true

criaMateria.addEventListener('click', () => {
    nomeDaMateria = inputNovaMateria.value;
    novaMateria(nomeDaMateria, divMaterias, cabecalho);
    cabecalho = false
    inputNovaMateria.value = "";
});

document.body.addEventListener('keypress', (e) => {
    nomeDaMateria = inputNovaMateria.value;
    if (e.key === "Enter") {
        novaMateria(inputNovaMateria.value, divMaterias, cabecalho);
        inputNovaMateria.value = "";
    }
});

function pegaValores() {
    materias = []
    const trs = document.querySelectorAll('.materia');

    for (let td of trs) {
        let valoresDosInputs = [];
        let media = 0
        
        for (let input of td.childNodes[1].childNodes) {
            valoresDosInputs.push(input.value);
            media = calculaMedia(valoresDosInputs.slice(0,3), valoresDosInputs.slice(3, 6));
        }
        materias.push({
            nome: td.childNodes[0].innerText,
            media: media,
            CH: valoresDosInputs[6]
        });
    }
}

function calculaCR() {
    pegaValores();
    const medias = [];
    const CH = []

    for (let materia of materias) {
        medias.push(materia.media);
        CH.push(materia.CH);
    }

    return [calculaMedia(medias, CH), medias];
}

botaoCalculaCR.addEventListener('click', () => {
    const CR = calculaCR();
    CR[1] = bubbleSort(CR[1].map((elem) => {
        return Number(elem)
    }))
    
    divCR.innerHTML = `
        Seu CR foi de: ${CR[0]} <br>
        Suas médias foram: ${CR[1]}
    `
})