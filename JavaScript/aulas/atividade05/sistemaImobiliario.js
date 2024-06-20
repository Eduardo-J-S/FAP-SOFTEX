//Sistema imobiliário

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite quanto você ganha por hora: ", (imovelTipo) => {
    rl.question("Digite o número de horas trabalhadas: ", (imovelArea) => {
        rl.question("Digite a unidade de medida em metros: ", (imovelValorMetroQuadrado) => {
            let valorAluguel = parseFloat(imovelArea) * parseFloat(imovelValorMetroQuadrado);
        
            console.log("===== Valor do Aluguel =====");
            console.log(`${imovelTipo} - Área: ${imovelArea} m² - Valor do aluguel: R$ ${valorAluguel}`);
        
            rl.close();
        });
    });
});