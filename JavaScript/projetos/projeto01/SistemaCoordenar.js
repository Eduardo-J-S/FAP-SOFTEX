const Membro = require("./Membro");

class SistemaCoordenar {
  constructor() {
    this.membros = [];
  }

  adicionarMembro(id, nome) {
    if (this.encontrarMembroPorId(id)) {
      return false;
    }
    let novoId = 1;
    if (this.membros.length > 0) {
        novoId = this.membros[this.membros.length - 1].membro_id + 1;
    }
    this.membros.push(new Membro(novoId, nome));
    return true;
  }

  encontrarMembroPorId(id) {
    return this.membros.find((membro) => membro.membro_id === id);
  }

  verificarTarefaExiste(tarefa){
    return this.membros.some((membro) =>
        membro.tarefas.includes(tarefa)
    );
  }

  listarMembros() {
    if (this.membros.length > 0) {
      this.membros.forEach((membro) => {
        console.log(
          `ID Membro ${membro.membro_id} - Membro: ${
            membro.membro
          } - Tarefas: ${membro.listarTarefas()}`
        );
      });
    } else {
      console.log("Nenhum membro encontrado.");
    }
  }
}

module.exports = SistemaCoordenar;