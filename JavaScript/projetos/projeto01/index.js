const readline = require("readline");
const SistemaCoordenar = require("./SistemaCoordenar");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sistema = new SistemaCoordenar();

const membros = () => {
  rl.question("Digite o id do membro a ser adicionado: ", (id) => {
    if (id.trim() === "") {
      console.log("Id do membro não pode ser vazio.");
      menuMembros();
      return;
    }

    let membroEcontrado = sistema.encontrarMembroPorId(parseInt(id));
    if (membroEcontrado) {
      console.log(`Membro com o id ${id} já cadastrado`);
      console.log(
        `Dados do cliente de id ${id}: Nome - ${membroEcontrado.membro}, Tarefas - ${membroEcontrado.tarefas}`
      );
      menuMembros();
      return;
    }

    rl.question("Digite o nome do membro a ser adicionado: ", (nome) => {
      if (nome.trim() === "") {
        console.log("Nome do membro não pode ser vazio.");
        menuMembros();
        return;
      }

      if (sistema.adicionarMembro(id, nome)) {
        console.log("Membro cadastrado com sucesso!");
      }
      menuMembros();
    });
  });
};

const tarefas = () => {
  rl.question(
    "Digite o id do membro a quem quer atribuir uma tarefa: ", (id) => {
      if (id.trim() === "") {
        console.log("Id do membro não pode ser vazio.");
        menuMembros();
        return;
      }

      const membro = sistema.encontrarMembroPorId(parseInt(id));

      if (!membro) {
        console.log("Nenhum membro com esse id encontrado.");
        menuMembros();
        return;
      }

      rl.question(
        `Digite a tarefa que quer atribuir ao membro de nome ${membro.membro}: `,
        (descricao) => {
          if (sistema.verificarTarefaExiste(descricao)) {
            console.log("Tarefa já designada a um membro.");
          } else {
            membro.adicionarTarefa(descricao);
            console.log("Tarefa designada com sucesso ao membro.");
          }
          menuMembros();
        }
      );
    }
  );
};

const editarTarefaMembro = () => {
  rl.question(
    "Digite o id do membro a quem quer editar uma tarefa: ", (id) => {
      if (id.trim() === "") {
        console.log("Id do membro não pode ser vazio.");
        menuMembros();
        return;
      }

      const membro = sistema.encontrarMembroPorId(parseInt(id));

      if (!membro) {
        console.log("Nenhum membro com esse id encontrado.");
        menuMembros();
        return;
      }

      console.log(membro.tarefas)
      rl.question(
        `Digite a tarefa que quer editar do membro de nome ${membro.membro}: `, (editar) => {
          const index = membro.tarefas.indexOf(editar);
          if (index !== -1) {
            rl.question(
              `Edite a tarefa de nome: ${editar}, do membro ${membro.membro}, para o novo nome: `, (tarefaEditada) => {
                membro.editarTarefa(index, 1, tarefaEditada);
                console.log("Tarefa editada com sucesso.");
                menuMembros();
              }
            );
          } else {
            console.log(`Tarefa não existente para o membro ${membro.membro}.`);
          }
          menuMembros();
        }
      );
    }
  );
}

const excluirTarefaMembro = () => {
  rl.question(
    "Digite o id do membro a quem quer excluir uma tarefa: ", (id) => {
      if (id.trim() === "") {
        console.log("Id do membro não pode ser vazio.");
        menuMembros();
        return;
      }

      const membro = sistema.encontrarMembroPorId(parseInt(id));

      if (!membro) {
        console.log("Nenhum membro com esse id encontrado.");
        menuMembros();
        return;
      }

      console.log(membro.tarefas)
      rl.question(
        `Digite a tarefa que quer excluir do membro de nome ${membro.membro}: `, (excluir) => {
          const index = membro.tarefas.indexOf(excluir);
          if (index !== -1) {
            rl.question(
              `Deseja realmente excluir a tafera de nome ${excluir} do membro ${membro.membro}: [S/N] `, (decisao) => {
                if (decisao.toUpperCase() === "S") {
                  membro.excluirTarefa(index, 1);
                  console.log("Tarefa excluida com sucesso.");
                } else {
                  console.log("Tarefa não excluida.");
                }
                menuMembros();
              }
            );
          } else {
            console.log(`Tarefa não existente para o membro ${membro.membro}.`);
          }
          menuMembros();
        }
      );
    }
  );
}

const listarMembros = () => {
  sistema.listarMembros();
  menuMembros();
};

const menu =
  "\n======== MENU ========\n" +
  "1 - Adicionar membros\n" +
  "2 - Designar tarefa a um membro\n" +
  "3 - Editar tarefa de um membro\n" +
  "4 - Excluir tarefa de um membro\n" +
  "5 - Listar membros\n" +
  "0 - Sair do Sistema\n" +
  "======================\n" +
  "Opção: ";

const menuMembros = () => {
  rl.question(`${menu} \n======================\n`, (opcao) => {
    console.log("");
    switch (parseInt(opcao)) {
      case 0:
        console.log("Finalizando programa.");
        rl.close();
        break;
      case 1:
        membros();
        break;
      case 2:
        tarefas();
        break;
      case 3:
        editarTarefaMembro();
        break;
      case 4:
        excluirTarefaMembro();
        break;
      case 5:
        listarMembros();
        break;
      default:
        console.log(`Opção ${opcao} inválida.`);
        menuMembros();
        break;
    }
  });
};

menuMembros();
