const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularMaior = (a, b, c) => {

    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }

}


rl.question("Digite o valor de A: ", (a) => {
    rl.question("Digite o valor de B: ", (b) => {
        rl.question("Digite o valor de C: ", (c) => {
            console.log(`O maior entre A, B e C é: ${calcularMaior(a, b, c)}`)
            rl.close()
        })
    });
});