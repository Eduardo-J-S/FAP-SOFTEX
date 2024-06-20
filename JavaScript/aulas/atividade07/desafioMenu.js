//Agora que aprenderam o comando console.log(), criem um menu de
//cadastro simples.

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let listaClientes = [];
const menu = "======== MENU ========\n"
+ "1 - Listar Clientes\n" 
+ "2 - Cadastrar Cliente\n"
+ "3 - Editar Cliente\n"
+ "4 - Remover Cliente\n"
+ "0 - Sair do Sistema\n"
+ "======================\n"
+ "Opção: ";

const menuClientes = () => {
    rl.question(`${menu} \n======================\n` , (opcao) => {
        switch (parseInt(opcao)) {
            case 0:
                console.log("Finalizando programa.")
                rl.close();
                break;
            case 1:
                listarClientes();
                break;
            case 2:
                cadastrarCliente();
                break;
            case 3:
                editarCliente();
                break;
            case 4:
                removerCliente();
                break;
            default:
                console.log(`Opção ${opcao} inválida.`);
                menuClientes();
                break;
        }
        
    });
};

const listarClientes = () => {
    if (listaClientes.length > 0){
        console.log("Listando os clientes: ")
        listaClientes.forEach((clinte) => {
            console.log(clinte);
        })
    } else {
        console.log("Nenhum cliente encontrado.")
    }
    menuClientes();
}

const cadastrarCliente = () => {
    rl.question("Nome do cliente para ser cadastrado: ", (nome) => {
        listaClientes.push(nome);
        console.log(`Cliente ${nome} cadastrado com sucesso.`)

        menuClientes();
    })
}

const editarCliente = () => {
    rl.question("Nome do cliente para ser editado: ", (nome) => {
        const index = listaClientes.indexOf(nome);

        if(index !== -1){
            rl.question(`Novo nome do cliente ${nome}: `, (novoNome) => {
                listaClientes.splice(index, 1, novoNome);
                console.log(`Cliente ${nome} editado com sucesso para ${novoNome}!`);
                menuClientes();
            });
        }else {
            console.log(`Cliente ${nome} não encontrado na lista.`)
            menuClientes();
        }
    });
}

const removerCliente = () => {
    rl.question("Nome do cliente para ser removido: ", (nome) => {
        const index = listaClientes.indexOf(nome);

        if(index !== -1){
            listaClientes.splice(index, 1);
            console.log(`Cliente ${nome} removido com sucesso!`)
        }else {
            console.log("Cliente não encontrado na lista.")
        }
        menuClientes();
    })
}



menuClientes();