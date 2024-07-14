function calcularFatorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }

    let fatorial = 1;
    for(let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}

let num = prompt('Digite um número');
let resultado = calcularFatorial(num);
console.log(`${num}! = ${resultado}`);

// verifica se o número é válido
if (!isNaN(num) && num >= 0) {
    let resultado = calcularFatorial(num);
    console.log(`${num}! = ${resultado}`);
} else {
    console.log('Digite um número inteiro não negativo.');
}