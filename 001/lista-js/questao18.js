

const ehPrimo = (number) => {

    let divisoresCount = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisoresCount++
        }
    }

    return divisoresCount === 2;
}

for (let i = 2; i <= 50; i++) {
    if (ehPrimo(i)) console.log(i)
}

