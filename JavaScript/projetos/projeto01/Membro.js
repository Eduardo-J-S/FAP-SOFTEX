class Membro {
  constructor(id, nome) {
    this.membro_id = id;
    this.membro = nome;
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
    return true;
  }

  editarTarefa(index, tarefaEditada) {
    this.tarefas.splice(index, 1, tarefaEditada)
    return true;
  }

  excluirTarefa(index) {
    this.tarefas.splice(index, 1)
    return true;
  }

  listarTarefas() {
    return this.tarefas.length > 0 ? this.tarefas : "nenhuma tarefa atribuída.";
  }
}

module.exports = Membro;
