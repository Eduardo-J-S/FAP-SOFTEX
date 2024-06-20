//Faça um Programa que converta metros para centímetros.

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a unidade de medida em metros: ", (medida) => {
    let medidaEmCm = parseFloat(medida) * 100;

    console.log(`${medida} metros em cm é: ${medidaEmCm}`);

    rl.close();
});