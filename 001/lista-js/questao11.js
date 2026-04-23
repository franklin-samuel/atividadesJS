

const parOuImpar = (number) => number % 2 === 0 ? 'Par' : 'Ímpar'

for (let i = 1; i <= 20; i++) {
    console.log(`${i} - ${parOuImpar(i)}`)
}