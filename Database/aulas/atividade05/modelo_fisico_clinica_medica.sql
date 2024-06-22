CREATE DATABASE clinica_medica;

use clinica_medica;

CREATE TABLE medico(
	CRM INT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    genero CHAR(1),
    telefone VARCHAR(14) NOT NULL,
    rua VARCHAR(60),
    numero VARCHAR(10),
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    estado CHAR(2),
    cep VARCHAR(10),
    especialidade VARCHAR(45) NOT NULL
);

SELECT * FROM medico;

CREATE TABLE paciente(
	CPF VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    genero CHAR(1) NOT NULL,
    telefone VARCHAR(14) NOT NULL,
    data_nascimento DATE
);

SELECT * FROM paciente;

CREATE TABLE consulta(
	numero_consulta INT PRIMARY KEY,
    data_marcada DATETIME NOT NULL,
    diagnostico VARCHAR(45),
    receita VARCHAR(45),
    observacoes VARCHAR(60),
    medico_CRM INT,
    paciente_CPF VARCHAR(10),
    FOREIGN KEY (medico_CRM) REFERENCES medico(CRM),
    FOREIGN KEY (paciente_CPF) REFERENCES paciente(CPF)
);

SELECT * FROM consulta;