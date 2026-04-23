const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const aprovado = (nota) => nota >= 60 ? "Aprovado" : "Reprovado";


rl.question("Digite a nota: ", (notaInput) => {
    console.log(aprovado(notaInput))
    rl.close();
});