CREATE DATABASE clinica_medica;

use clinica_medica;

CREATE TABLE medico(
	medico_id INT PRIMARY KEY AUTO_INCREMENT,
	CRM VARCHAR(12) UNIQUE,
    nome VARCHAR(45) NOT NULL,
    genero CHAR(1),
    especialidade VARCHAR(45) NOT NULL
);

CREATE TABLE especialidade (
    especialidade_id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(45) NOT NULL
);

CREATE TABLE medico_especialidade (
    medico_id INT,
    especialidade_id INT,
    PRIMARY KEY (medico_id, especialidade_id),
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id),
    FOREIGN KEY (especialidade_id) REFERENCES especialidade(especialidade_id)
);

CREATE TABLE paciente(
	paciente_id INT PRIMARY KEY AUTO_INCREMENT,
	CPF VARCHAR(11) UNIQUE,
    nome VARCHAR(60) NOT NULL,
    genero CHAR(1) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE consulta(
	consulta_id INT PRIMARY KEY AUTO_INCREMENT,
    data_marcada DATETIME NOT NULL,
    diagnostico VARCHAR(45),
    receita VARCHAR(45),
    observacoes VARCHAR(60),
    medico_id INT,
    paciente_id INT,
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id),
    FOREIGN KEY (paciente_id) REFERENCES paciente(paciente_id)
);

CREATE TABLE telefone(
	telefone_id INT PRIMARY KEY AUTO_INCREMENT,
	telefone VARCHAR(15),
    medico_id INT,
    paciente_id INT,
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id),
    FOREIGN KEY (paciente_id) REFERENCES paciente(paciente_id)
);

CREATE TABLE endereco(
	endereco_id INT PRIMARY KEY AUTO_INCREMENT,
    medico_id INT,
    rua VARCHAR(60),
    numero VARCHAR(10),
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    estado CHAR(2),
    cep VARCHAR(20),
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id)
);
