

const fatorial = (n) => {
    let result = n;

    for (let i = n - 1; i > 0; i--) {
        result *= i;
    }

    return result;
}

const fatorialRecursivo = (n) => {
    if (n === 0 || n === 1) return 1;

    return n * fatorialRecursivo(n - 1);
}

console.log(fatorial(5))

console.log(fatorialRecursivo(5))
