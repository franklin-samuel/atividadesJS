const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let celsius = 0

const convertToFahrenheit = (celsius) => celsius * (9/5) + 32;

rl.question("Digite a temperatura em Celsius: ", (celsiusInput) => {
    celsius = celsiusInput;
    console.log(`${celsius}ºC equivale a ${convertToFahrenheit(celsius)}ºF`);
    rl.close();
});