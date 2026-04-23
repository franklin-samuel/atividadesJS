const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const aprovado = (nota) => nota >= 60 ? "Aprovado" : "Reprovado";


const converteParaConceito = (nota) => {

    switch (true) {
        case nota >= 90:
            return "A"

        case nota >= 80:
            return "B"

        case nota >= 70:
            return "C"

        case nota >= 60:
            return "D"

        default:
            return "F"
    }

}


rl.question("Digite a nota: ", (notaInput) => {
    console.log(`Nota conceito: ${converteParaConceito(notaInput)}! ${aprovado(notaInput)}`)
    rl.close();
});