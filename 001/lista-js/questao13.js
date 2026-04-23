const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tabuada = [];

const getTabuada = (number) => {

    for (let i = 1; i <= 10; i++) {

        tabuada.push(`${number} x ${i} = ${number * i}`)

    }

    return tabuada;
}


rl.question("Digite um número: ", (number) => {
    console.log(getTabuada(number));
    rl.close();
});

// professor pediu string, fiz string.