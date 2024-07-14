function calcularAreaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura * largura);

    console.log(`A área equivale a ${area} metros quadrados e o perimetro equivale a ${perimetro} metros.`)
}

let altura = 4;
let largura = 5;
calcularAreaEPerimetro(altura, largura);