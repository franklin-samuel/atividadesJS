const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5]


let sum = 0;
let avg;
let acimaDaMediaCount = 0;

for (nota of notas) {
    sum += nota;
}

avg = sum / notas.length;

for (nota of notas) {
    if (nota > avg) acimaDaMediaCount++;
}

console.log(`Média da turma foi igual a: ${avg.toFixed(2)}, ${acimaDaMediaCount} ficaram acima da média`);