const operacoes = [
    { a: 10, b: 5, op: "soma" },
    { a: 20, b: 4, op: "divisao" },
    { a: 7, b: 0, op: "divisao" },
    { a: 3, b: 8, op: "multiplicacao" }
];

const calculadora = (a, b, op) => {

    switch (true) {

        case op === 'soma':
            return a + b

        case op === 'subtracao':
            return a - b

        case op === 'multiplicacao':
            return a * b

        case op === 'divisao':
            return b === 0 ? 'Não é possível dividir por zero' : a / b

    }
}

const execute = (operacoes) => {

    for (const { a, b, op } of operacoes) {
        console.log(calculadora(a, b, op));
    }

}

execute(operacoes)