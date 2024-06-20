//Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a primeira nota: ", (nota1) => {
    rl.question("Digite a segunda nota: ", (nota2) => {
        rl.question("Digite a terceira nota: ", (nota3) => {
            rl.question("Digite a quarta nota: ", (nota4) => {
                let media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4);

                console.log(`A média é: ${media}`);

                rl.close();
            });
        });
    });
});