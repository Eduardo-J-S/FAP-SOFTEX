#Propor consultas em SQL que utilize o ORDER BY e BETWEEN.

#Ordenando nome do funcionario e a descrição de sua tarefa por nome
SELECT m.nome, t.descricao
FROM membros m
INNER JOIN tarefas t 
ON m.membro_id = t.membro_id
ORDER BY m.nome;

#Ordenando nome do funcionario e a descrição de sua tarefa por descrição
SELECT m.nome, t.descricao
FROM tarefas t 
INNER JOIN membros m
ON m.membro_id = t.membro_id
ORDER BY t.descricao;

#selecionando membros com o id entre 1 e 3
SELECT nome FROM membros WHERE membro_id BETWEEN 1 AND 3;

SELECT m.nome, t.descricao, t.data_inicio, t.data_finalizacao
FROM membros m
INNER JOIN tarefas t 
ON m.membro_id = t.membro_id
WHERE m.membro_id BETWEEN 1 AND 6
ORDER BY m.nome;

#1.Liste todos os membros e suas respectivas tarefas ordenadas pelo nome do membro e pela data de início das tarefas 
#(assumindo que há uma coluna data_inicio na tabela tarefas)
SELECT membros.nome, tarefas.descricao, tarefas.data_inicio
FROM membros
INNER JOIN tarefas
ON membros.membro_id = tarefas.membro_id
ORDER BY membros.nome, tarefas.data_inicio;

#2.Exiba todos os membros cujo membro_id está entre 2 e 5, ordenados pelo cargo.
SELECT * FROM membros 
WHERE membro_id BETWEEN 2 AND 5 
ORDER BY cargo;

#3.Liste todas as tarefas cujas descrições contêm a palavra 'manutenção', ordenadas pela descrição.
SELECT * FROM tarefas WHERE descricao LIKE '%manutenção%' ORDER BY descricao;

#4.Exiba os membros e suas tarefas para os membro_id entre 1 e 4, ordenados pelo nome do membro e pela descrição da tarefa.
SELECT m.membro_id ,m.nome, t.descricao
FROM membros m
INNER JOIN tarefas t 
ON m.membro_id = t.membro_id
WHERE m.membro_id BETWEEN 1 AND 4
ORDER BY m.nome;

#5.Liste todos os membros e a quantidade de tarefas que cada um possui, ordenados pela quantidade de tarefas em ordem decrescente.
INSERT INTO tarefas(tarefa_id, descricao, membro_id, data_inicio, data_finalizacao) 
VALUES (7, "Participar da manutenção do módulo de login.", 2, "2024-07-20", "2024-08-20");

SELECT m.nome, count(t.tarefa_id) AS qantd_taferas
FROM membros m
LEFT JOIN tarefas t
ON m.membro_id = t.membro_id
GROUP BY m.nome
ORDER BY qantd_taferas DESC;

#6.Encontre todos os membros que possuem um membro_id entre 1 e 3 e ordene-os pelo membro_id em ordem decrescente.
SELECT * FROM membros WHERE membro_id  BETWEEN 1 AND 3 ORDER BY membro_id DESC;

#7.Exiba todas as tarefas cujas descrições começam com a letra 'C' ou 'A', ordenadas pela descrição. 
SELECT * FROM tarefas WHERE descricao LIKE 'c%' OR descricao LIKE 'a%' ORDER BY descricao;

#8.Liste os membros e suas tarefas para aqueles cujo membro_id está entre 2 e 6, ordenados pelo cargo do membro.
SELECT m.nome, m.cargo, t.descricao, t.data_finalizacao
FROM membros m
INNER JOIN tarefas t
ON m.membro_id = t.membro_id
WHERE m.membro_id BETWEEN 2 AND 6
ORDER BY m.cargo;

#9.Exiba todos os membros e suas respectivas tarefas para membro_id entre 3 e 7, ordenados pelo nome do membro em ordem decrescente. 
SELECT m.nome, t.descricao
FROM membros m
LEFT JOIN tarefas t
ON m.membro_id = t.membro_id
WHERE m.membro_id BETWEEN 3 AND 7
ORDER BY m.nome DESC;

#10.Encontre todas as tarefas associadas aos membros cujo membro_id está entre 4 e 8, ordenadas pela descrição da tarefa em ordem decrescente.
SELECT t.descricao ,m.nome
FROM tarefas t
INNER JOIN membros m
ON t.membro_id = m.membro_id
WHERE m.membro_id BETWEEN 4 AND 8
ORDER BY t.descricao DESC;
