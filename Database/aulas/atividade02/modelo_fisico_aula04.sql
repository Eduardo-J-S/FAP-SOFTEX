#UPDATE (alterar)
UPDATE membros SET nome = "André Luiz"
WHERE membro_id = 1;

SELECT * FROM membros;

#DELETE (exlcuir)
DELETE FROM membros
WHERE membro_id = 1;

#ALTERANDO TAMANHO COLUNA CARGO DA TABELA MEMBROS
ALTER TABLE membros MODIFY cargo varchar(60);

#Inserir cinco registros na tabela membro;
INSERT INTO membros(membro_id, nome, cargo, genero) 
VALUES (2, "João Silva", "Desenvolvedor Full Stack", "M"),
(3, "Maria Santos", "Analista de Banco de Dados", "F"),
(4, "Pedro Oliveira", "Engenheiro de Software", "M"),
(5, "Ana Costa", "Administrador de Redes", "F"),
(6, "Carlos Souza", "Especialista em Segurança da Informação", "M");

#Inserir cinco registros na tabela tarefas, cada tarefa deve estar associada a um membro da equipe;
INSERT INTO tarefas(tarefa_id, descricao, membro_id, data_inicio, data_finalizacao) 
VALUES (2, "Desenvolver novo módulo de login para o sistema.", 2, "2024-06-20", "2024-07-20"),
(3, "Realizar manutenção preventiva nos servidores.", 4, "2024-06-20", "2024-07-20"),
(4, "Criar documentação técnica do projeto XYZ.", 5, "2024-06-20", "2024-07-20"),
(5, "Testar e validar integração com API externa.", 3, "2024-06-20", "2024-07-20"),
(6, "Implementar melhorias na interface do usuário.", 6, "2024-06-20", "2024-07-20");

SELECT * FROM tarefas;

#Alterar o cargo da funcionária Ana Costa para Administrador de Rede Sênior.
UPDATE membros SET cargo = "Administrador de Rede Sênior." WHERE membro_id = 5;

#Criar um relatório que exiba o nome, cargo, descrição da tarefa, data inicial e data final.
SELECT membros.nome, membros.cargo, tarefas.descricao, tarefas.data_inicio, tarefas.data_finalizacao
FROM membros
INNER JOIN tarefas
ON membros.membro_id = tarefas.membro_id;



