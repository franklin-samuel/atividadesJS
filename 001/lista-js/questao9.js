const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const hasCarteirinhaToBoolean = (hasCareteirinha) => {
    const value = hasCareteirinha.toLowerCase();

    return value === 's';
}

const calcTicketValue = (idade, hasCarteirinha) => {

    switch (true) {

        case idade <= 12:
            return 15

        case (13 <= idade && idade <= 25) && hasCarteirinha:
            return 20

        case 13 <= idade && idade <= 25:
            return "Não dizia na questão :("

        case 26 <= idade && idade <= 59:
            return 30

        case idade >= 60:
            return 15

    }

}


rl.question("Digite a idade: ", (idade) => {
    if (13 <= idade && idade <= 25) {
        rl.question("Digite se tem carteirinha(S/N): ", (hasCarteirinha) => {
            console.log(`Valor do ingresso: ${calcTicketValue(idade, hasCarteirinhaToBoolean(hasCarteirinha))}`)
            rl.close();
        });
    } else {
        console.log(`Valor do ingresso: ${calcTicketValue(idade, false).toFixed(2)}`)
        rl.close();
    }
});