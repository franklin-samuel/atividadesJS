

const calcularIMC = (peso, altura) => peso / (altura * altura);

const classificarIMC = (imc) => {
    switch (true) {
        case imc < 18.5:
            return "Abaixo do peso";

        case imc < 25:
            return "Normal";

        case imc < 30:
            return "Sobrepeso";

        default:
            return "Obesidade";
    }
}

console.log(`${classificarIMC(calcularIMC(74, 1.81))}! IMC igual a: ${calcularIMC(74, 1.81).toFixed(2)}`)