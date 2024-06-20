CREATE DATABASE startup;

use startup;

CREATE TABLE membros(
membro_id INT PRIMARY KEY,
nome VARCHAR(20),
cargo VARCHAR(20)
);

CREATE TABLE tarefas(
tarefa_id INT PRIMARY KEY,
descricao VARCHAR(50),
membro_id INT,
FOREIGN KEY (membro_id) REFERENCES
membros(membro_id)
);

INSERT INTO membros(membro_id, nome, cargo) VALUES(
1, "Paulo", "Programador 1");

INSERT INTO tarefas(tarefa_id, descricao, membro_id)
VALUES (1, "Criar a classe produto", 1);

SELECT nome, cargo FROM membros;
SELECT descricao FROM tarefas;

#Como recuperar os dados nome do membro e a tarefa atribuida a ele?
SELECT membros.nome, tarefas.descricao
FROM membros
INNER JOIN tarefas
ON membros.membro_id = tarefas.tarefa_id;

#Como adicionar a coluna genero na tabela membros?
ALTER TABLE membros ADD genero CHAR(1);

SELECT * FROM membros;

#Como adicionar a coluna data_inicio na tabela tarefas?
ALTER TABLE tarefas ADD data_inicio DATE;

SELECT * FROM tarefas;

#Alterar a tabela membros, coluna genero, alterar o genero de cada usuário. Exemplo: André - M
UPDATE membros SET genero = "M" WHERE membro_id = 1;

#Criar a coluna data_finalizacao na tabela tarefas.
ALTER TABLE tarefas ADD data_finalizacao DATE;

#Na tabela tarefas, alterar as colunas data_inicio e data_fim, colocar a data de hoje.
UPDATE tarefas SET data_inicio = "2024-06-20", data_finalizacao = "2024-07-20" WHERE membro_id = 1;

#Realizar uma consulta na tabela membros, onde o genero seja F.
SELECT * FROM membros WHERE genero = "F";
