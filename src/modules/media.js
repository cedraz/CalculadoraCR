export { media }
function media(notas, pesos) {
    let sum = 0
    let sumPesos = 0
    for (let i in notas) {
        sum += notas[i] * pesos[i]
        sumPesos += pesos[i]
    }
    return (sum / sumPesos).toFixed(1)
}
