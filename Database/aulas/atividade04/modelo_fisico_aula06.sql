#Propor consultas em SQL que utilize o ORDER BY e BETWEEN.
SELECT m.nome, t.descricao
FROM membros m
INNER JOIN tarefas t 
ON m.membro_id = t.membro_id
ORDER BY m.nome;

SELECT nome FROM membros WHERE membro_id BETWEEN 1 AND 3;

SELECT m.nome, t.descricao, t.data_inicio, t.data_finalizacao
FROM membros m
INNER JOIN tarefas t 
ON m.membro_id = t.membro_id
WHERE m.membro_id BETWEEN 1 AND 6
ORDER BY m.nome;

#1.Liste todos os membros e suas respectivas tarefas ordenadas pelo nome do membro e pela data de início das tarefas (assumindo que há uma coluna data_inicio na tabela tarefas)
#2.Exiba todos os membros cujo membro_id está entre 2 e 5, ordenados pelo cargo.
#3.Liste todas as tarefas cujas descrições contêm a palavra 'relatório', ordenadas pela descrição.
#4.Exiba os membros e suas tarefas para os membro_id entre 1 e 4, ordenados pelo nome do membro e pela descrição da tarefa.
#5.Liste todos os membros e a quantidade de tarefas que cada um possui, ordenados pela quantidade de tarefas em ordem decrescente.
#6.Encontre todos os membros que possuem um membro_id entre 1 e 3 e ordene-os pelo membro_id em ordem decrescente.
#7.Exiba todas as tarefas cujas descrições começam com a letra 'A' ou 'B', ordenadas pela descrição. 
#8.Liste os membros e suas tarefas para aqueles cujo membro_id está entre 2 e 6, ordenados pelo cargo do membro e pela data de finalização das tarefas (assumindo que há uma coluna data_finalizacao na tabela tarefas).alter
#9.Exiba todos os membros e suas respectivas tarefas para membro_id entre 3 e 7, ordenados pelo nome do membro em ordem decrescente. 
#10.Encontre todas as tarefas associadas aos membros cujo membro_id está entre 4 e 8, ordenadas pela descrição da tarefa em ordem decrescente.