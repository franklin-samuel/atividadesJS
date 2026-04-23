const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const saudacao = (hora) => {
    switch (true) {

        case 6 <= hora && hora <= 11:
            return 'Bom dia!'

        case 12 <= hora && hora <= 17:
            return 'Boa tarde!'

        case 18 <= hora && hora <= 23:
            return 'Boa noite!'

        default:
            return 'Madrugada.'

    }
}


rl.question("Digite a hora: ", (horaInput) => {
    console.log(saudacao(horaInput))
    rl.close();
});