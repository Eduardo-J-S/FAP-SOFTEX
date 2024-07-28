//Projeto simples 
// Descrição: Um editor revisa vários artigos. Cada artigo é revisado por um único editor.
// Relação: Um editor -> Muitos artigos
const readline = require("readline-sync");

const Editor = (id, nome, artigos = []) => ({
    id: id,
    nome: nome,
    artigos: artigos
})

const Artigo = (titulo, autor = []) => ({
    titulo: titulo,
    autor: autor
})

let editores = [];

let adicionarEditor = () => {
    let nomeEditor = readline.question("Digite o nome do editor a ser adicionado: ");

    let novoId = 1;
    if (editores.length > 0) {
        novoId = editores[editores.length - 1].id + 1;
    }

    editores.push(Editor(parseInt(novoId), nomeEditor));
    console.log("Editor adicionado com sucesso.");
    menu();
};

let adicionarArtigoEditor = () => {
    let procurarEditor = parseInt(readline.question("Digite o ID do editor a ser adicionado um artigo: "));

    let editorAchado = editores.find(editor => editor.id === procurarEditor);

    if (editorAchado) {
        let titulo = readline.question("Digite o titulo do artigo: ");
        let quantidadeAutores = parseInt(readline.question(`Digite a quantidade de autores do artigo ${titulo}: `));

        autores = [];

        for (let index = 0; index < quantidadeAutores; index++) {
            entradaAutor = readline.question(`Nome do ${index + 1}º autor: `);
            autores.push(entradaAutor);
        }

        editorAchado.artigos.push(Artigo(titulo, autores));
        console.log("Artigo adicionado com sucesso!");
        menu();
    } else {
        console.log("Nenhum editor com esse ID achado.");
        menu();
    }
}


let visualizarEditores = () => {
    if (editores.length === 0) {
        console.log("Nenhum editor cadastrado");
        menu();
        return;
    }

    editores.forEach((e) => {
        console.log("=".repeat(30)); 
        console.log(`Editor ID: ${e.id}`);
        console.log(`Nome: ${e.nome}`);
        console.log("-".repeat(30)); 

        if (e.artigos.length === 0) {
            console.log("Nenhum artigo cadastrado");
        } else {
            e.artigos.forEach((artigo, index) => {
                console.log(`  Artigo ${index + 1}:`);
                console.log(`    Título: ${artigo.titulo}`);

                if (artigo.autor.length === 0) {
                    console.log("    Nenhum autor cadastrado");
                } else {
                    console.log("    Autores:");
                    artigo.autor.forEach((a, autorIndex) => {
                        console.log(`      ${autorIndex + 1}. ${a}`);
                    });
                }

                console.log("-".repeat(30)); 
            });
        }

        console.log("=".repeat(30)); 
        console.log(); 
    });

    menu();
}


let menu = () => {
    let entrada = parseInt(readline.question("Digite sua entrada numerica. [0] para sair do sistema [1] adicionar editor [2] adicionar artigo ao editor [3] Visualizar editores: "))
    switch (entrada) {
        case 0:
            console.log("Saindo do sistema.");
            break;
        case 1:
            adicionarEditor();
            break;
        case 2:
            adicionarArtigoEditor();
            break;
        case 3:
            visualizarEditores();
            break;
        default:
            console.log("Entrada inválida!");
            menu();
            break;
    }
}

menu();