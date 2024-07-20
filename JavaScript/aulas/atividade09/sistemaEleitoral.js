const rl = require("readline-sync")

let quantidadePessoas = parseInt(rl.question("Digite a quantidade de pessoas que irão votar: "))

let canditadoUm = 0;
let canditadoDois = 0;
let canditadoTres = 0;

for (let index = 0; index < quantidadePessoas; index++) {
    console.log(`Pessoa ${index + 1} digite qual canditado irá votar`)
    let voto = parseInt(rl.question("Cantidato 1 [1] - Candidato 2 [2] - Candidato 3 [3]: "))

    if (voto === 1) {
        canditadoUm++;
    } else if(voto === 2){
        canditadoDois++;
    } else if(voto === 3){
        canditadoTres++;
    } else {
        console.log("Voto nulo!")
    }
}

console.log(`Votos candidato 1: ${canditadoUm}`);
console.log(`Votos candidato 2: ${canditadoDois}`);
console.log(`Votos candidato 3: ${canditadoTres}`);

let segundoTurno = "Iremos para o segundo turno!"

if (canditadoUm === canditadoDois && canditadoDois === canditadoTres) {
    console.log(`Os tres candidatos empataram! - ${segundoTurno}`)
} else if((canditadoUm === canditadoDois)) {
    console.log(`Canditado 1 empatou com o candidato 2! - ${segundoTurno}`)
} else if((canditadoUm === canditadoTres)) {
    console.log(`Canditado 1 empatou com o candidato 3! - ${segundoTurno}`)
} else if((canditadoDois === canditadoTres)) {
    console.log(`Canditado 2 empatou com o candidato 3! - ${segundoTurno}`)
} else {
    let vencedor = Math.max(canditadoUm, canditadoDois, canditadoTres);

    if (canditadoUm === vencedor) {
        console.log("Canditado 1 foi o vencedor das eleições!")
    } else if((canditadoDois === vencedor)) {
        console.log("Canditado 2 foi o vencedor das eleições!")
    } else if((canditadoTres === vencedor)) {
        console.log("Canditado 3 foi o vencedor das eleições!")
    }
}
