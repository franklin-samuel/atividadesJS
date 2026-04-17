const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = ''
let dataNasc = 0

const anoAtual = 2026

const calcIdadeAprox = (dataNasc) => anoAtual - dataNasc;

rl.question("Digite seu nome: ", (nomeInput) => {
    nome = nomeInput;
    rl.question("Digite seu ano de nascimento: ", (dataNascInput) => {
        dataNasc = dataNascInput;
        console.log(`Olá, ${nome}! Você tem aproximadamente ${calcIdadeAprox(dataNasc)} anos`);
        rl.close();
    });
});




