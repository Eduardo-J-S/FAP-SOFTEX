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