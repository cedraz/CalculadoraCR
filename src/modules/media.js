export { calculaMedia }

function calculaMedia(notas, pesos) {
    let sum = 0
    let sumPesos = 0
    for (let i in notas) {
        sum += Number(notas[i] * pesos[i])
        sumPesos += Number(pesos[i])
    }

    // console.log('pesos', pesos);
    // console.log('soma dos pesos', sumPesos);
    // console.log('soma das notas', sum);
    return (sum / sumPesos).toFixed(1)
}
