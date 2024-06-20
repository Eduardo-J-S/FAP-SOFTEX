//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite quanto você ganha por hora: ", (ganhoHora) => {
    rl.question("Digite o número de horas trabalhadas: ", (horasTrabalhadas) => {
        let salario = parseFloat(horasTrabalhadas) * parseFloat(ganhoHora);
    
        console.log(`Total do seu salário no referido mês é: ${salario}`);
    
        rl.close();
    });
});