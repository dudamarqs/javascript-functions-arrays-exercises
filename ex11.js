function calcularAreaEPerimetro(raio) {
    area = Math.PI * (raio * raio);
    perimetro = 2 * Math.PI * raio;

    console.log(`A área da sala circular equivale a ${area} metros quadrados e o perímetro equivale a ${perimetro} metros.`)
}

raio = 7.5;
calcularAreaEPerimetro(raio);