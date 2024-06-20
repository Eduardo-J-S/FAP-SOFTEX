#Escreva uma consulta(sql) que exiba todos os funcionários que começam com a letra A.
SELECT * FROM membros WHERE nome LIKE 'a%';

#Escreva uma consulta (sql) que exiba todos os funcionários , onde o cargo contenha a letra ‘e’.
SELECT * FROM membros WHERE cargo LIKE '%e%';

#Escreva uma consulta (sql) que exiba o nome e o cargo dos funcionários, onde o nome termine com a letra ‘a’ e o cargo começe com a letra ‘d’.
SELECT * FROM membros WHERE nome LIKE '%a' AND cargo LIKE 'd%';