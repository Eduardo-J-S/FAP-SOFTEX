//Sua tarefa é elaborar uma lista com cinco produtos que estão
//faltando na sua casa. Para isso, você vai criar um programa
//em JavaScript que solicita o nome dos cinco produtos ao
//usuário e, em seguida, exibe essa lista na tela.

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let listaProdutosFaltantes = [];
let count = 0;

const solicitaProduto = () => {
    rl.question(`Digite o ${count + 1}º item da lista de compras: `, (item) => {
        listaProdutosFaltantes.push(item);
        count++;
        if(count < 5){
                solicitaProduto();
        } else {
            console.log("Os produtos que faltam comprar são: ");
            listaProdutosFaltantes.forEach((produto, index) => {
                console.log(`${index + 1}: ${produto}`);
            })
            rl.close()
        }
    })
}

solicitaProduto();