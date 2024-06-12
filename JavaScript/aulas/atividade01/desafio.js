//calculadora de IMC e de quantidade de água necessária por dia.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularConsumoAgua(peso) {
    return peso * 0.035;
}

function calcularIMC(peso, alturaCm) {
    const alturaM = alturaCm / 100;
    return peso / (alturaM * alturaM);
}

function identificarPossivelProblemaSaude(imc){
    let resultado = "";

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = "Obesidade grau 1 (leve)";
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = "Obesidade grau 2 (moderada)";
    } else {
        resultado = "Obesidade grau 3 (mórbida)";
    }

    return resultado;
}

rl.question('Digite o nome: ', (nome) => {
    rl.question('Digite o número do WhatsApp: ', (whatsapp) => {
        rl.question('Digite o peso (em kg): ', (peso) => {
            rl.question('Digite a altura (em cm): ', (altura) => {
                peso = parseFloat(peso);
                altura = parseFloat(altura);

                const consumoAgua = calcularConsumoAgua(peso);
                const imc = calcularIMC(peso, altura);
                const resultadoImc = identificarPossivelProblemaSaude(imc);

                console.log(`\nNome do paciente: ${nome}`);
                console.log(`Número do WhatsApp: ${whatsapp}`);
                console.log(`Consumo diário recomendado de água (em litros): ${consumoAgua.toFixed(2)}`);
                console.log(`Seu Índice de Massa Corporal(IMC) é: ${imc.toFixed(2)} kg/m2`);
                console.log(`De acordo com a Organização Mundial da Saúde, você tem ${resultadoImc} para a sua altura.`);

                rl.close();
            });
        });
    });
});

