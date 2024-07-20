CREATE SCHEMA sistema_eleitoral;

use sistema_eleitoral;

CREATE TABLE Eleitores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE
    -- Outros campos relevantes, como endereço, data de nascimento, etc.
);

CREATE TABLE Candidatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
    -- Outros campos relevantes, como partido político, número do candidato, etc.
);

CREATE TABLE Votos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_eleitor INT,
    id_candidato INT,
    FOREIGN KEY (id_eleitor) REFERENCES Eleitores(id),
    FOREIGN KEY (id_candidato) REFERENCES Candidatos(id)
);


-- Inserir eleitores fictícios
INSERT INTO Eleitores (nome, cpf) VALUES ('João da Silva', '123.456.789-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Maria Oliveira', '987.654.321-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Pedro Souza', '456.789.123-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Ana Santos', '321.654.987-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Carlos Pereira', '789.123.456-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Mariana Costa', '654.321.987-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Lucas Oliveira', '234.567.890-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Isabela Silva', '890.123.456-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Rafaela Almeida', '567.890.123-00');
INSERT INTO Eleitores (nome, cpf) VALUES ('Felipe Santos', '123.890.567-00');


INSERT INTO Candidatos (nome) VALUES ('Candidato 1');
INSERT INTO Candidatos (nome) VALUES ('Candidato 2');
INSERT INTO Candidatos (nome) VALUES ('Candidato 3');

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (1, 1);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (2, 2);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (3, 3);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (4, 1);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (5, 2);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (6, 3);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (7, 1);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (8, 2);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (9, 3);

INSERT INTO Votos (id_eleitor, id_candidato) VALUES (10, 1);

#1. O cliente precisa de alguns relatórios:
#a. Todos os eleitores
SELECT * FROM Eleitores;

#b. Todos os candidatos
SELECT * FROM Candidatos;

#c. Todos os eleitores que o CPF começe com o número 1
SELECT * FROM Eleitores WHERE cpf LIKE "1%";

#d. Total de eleitores
SELECT COUNT(*) AS "Total de Eleitores" FROM Eleitores;

#Exercícios:
#a. Total de votos
SELECT COUNT(*) AS "Total de votos" FROM Votos;

#b. Total de votos por candidato.
SELECT Candidatos.nome, count(*) AS "Total de votos por candidato"
FROM Candidatos
INNER JOIN Votos ON Candidatos.id = Votos.id_candidato
GROUP BY Candidatos.nome;

#c. Total de eleitores por gênero
ALTER TABLE Eleitores add genero char(1);

UPDATE Eleitores
SET genero = "M"
WHERE id IN (1, 3, 5, 7, 10);

UPDATE Eleitores
SET genero = "F"
WHERE id IN (2, 4, 6, 8, 9);

SELECT Eleitores.genero, COUNT(Eleitores.id) AS "Total eleitores por gênero"
FROM Eleitores
GROUP BY Eleitores.genero;