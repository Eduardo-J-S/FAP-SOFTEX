const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sistemaCoordenar = [
  {
    membro: "nomeMembro",
    tarefa: ["tarefa 1", "tarefa 2"],
  },
  {
    membro: "outroMembro",
    tarefa: ["tarefa 3", "tarefa 4"],
  },
];

const membros = () => {
  rl.question("Digite o nome do membro a ser adcionado: ", (nome) => {
    let membroCorrespondente = sistemaCoordenar.find(
      (membros) => membros.membro === nome
    );
    if (!membroCorrespondente) {
      sistemaCoordenar.push({ membro: nome, tarefa: [] });
      console.log("Membro cadastrado com sucesso!");
    } else {
      console.log("Membro já cadastrado");
    }
    menuMembros();
  });
};

const tarefas = () => {
  rl.question(
    "Digite o nome do membro a quem quer atribuir uma tarefa: ", (nome) => {
      rl.question(
        `Digite o tarefa que quer atribuir ao membro ${nome}: `, (descricao) => {
          let membroCorrespondente = sistemaCoordenar.find(
            (membros) => membros.membro === nome
          );

          //Aqui membroCorrespondenteFilter é um array, não um objeto único
          //Tentar acessar .tarefa diretamente causará um erro
          //let membroCorrespondenteFilter = sistemaCoordenar.find(membros => membros.membro === nome);  Erro: membroCorrespondenteFilter.tarefa.push is not a function

          if (membroCorrespondente) {

            let tarefaJaDesignada = sistemaCoordenar.some(membro =>
              membro.tarefa.some(tar => tar === descricao)
            );
            
            if (tarefaJaDesignada) {
              console.log("Tarefa já designada a um membro.");
            } else {
              membroCorrespondente.tarefa.push(descricao);
              console.log(membroCorrespondente);
              console.log("Tarefa designada com sucesso a um membro.");
            }

            // let interromper = false;

            // for (let i = 0; i < sistemaCoordenar.length; i++) {
            //   for (let j = 0; j < sistemaCoordenar[i].tarefa.length; j++) {
            //     let tar = sistemaCoordenar[i].tarefa[j];
            //     if (tar === descricao) {
            //       interromper = true;
            //       break;
            //     }
            //   }
            //   if (interromper) {
            //     console.log("Tarefa já designada a um membro.");
            //     break;
            //   }
            // }

            // if (!interromper) {
            //   membroCorrespondente.tarefa.push(descricao);
            //   console.log(membroCorrespondente);
            //   console.log("Tarefa designada com sucesso a um membro.");
            // }
          } else {
            console.log("Nenhum membro com esse nome encontrado.");
          }
          menuMembros();
        }
      );
    }
  );
};

const listarMembros = () => {
  if (sistemaCoordenar.length > 0) {
    for (let i = 0; i < sistemaCoordenar.length; i++) {
      console.log(`Membro: ${sistemaCoordenar[i].membro} - Tarefas: ${sistemaCoordenar[i].tarefa.length > 0 ? 
        sistemaCoordenar[i].tarefa : "nenhuma tarefa atribuida."
      }`);
    }
  } else {
    console.log("Nenhum membro encontrado.");
  }
  menuMembros();
};

const menu =
  "\n======== MENU ========\n" +
  "1 - Adicionar membros\n" +
  "2 - Designar tarefa a um membro\n" +
  "3 - Listar membros\n" +
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
        listarMembros();
        break;
      default:
        console.log(`Opção ${opcao} inválida.`);
        menuClientes();
        break;
    }
  });
};

menuMembros();
