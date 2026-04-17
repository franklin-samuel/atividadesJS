const a = 20
const b = 10

const somar = (a, b) => a + b
const subtrair = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b
const resto = (a, b) => a % b

function doAll(a, b) {
    const result = []
    result.push(somar(a, b))
    result.push(subtrair(a, b))
    result.push(multiplicar(a, b))
    result.push(dividir(a, b))
    result.push(resto(a, b))

    return `Soma: ${result[0]}, Subtração: ${result[1]}, Multiplicação: ${result[2]}, Divisão: ${result[3]}, Resto: ${result[4]}`
}

console.log(doAll(a, b))

