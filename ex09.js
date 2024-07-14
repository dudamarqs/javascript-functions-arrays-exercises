function converterParaDolar(dolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = cotacaoDolar * reais;
    return valorEmReais; 
}

let dolar = 250; // valor aleatório
let valorEmReais = converterParaDolar(dolar);
console.log(`${dolar} dólares, convertendo para R$, equivale a ${valorEmReais}.`);