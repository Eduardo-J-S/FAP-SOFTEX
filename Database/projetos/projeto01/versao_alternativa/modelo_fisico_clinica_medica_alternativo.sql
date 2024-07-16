CREATE DATABASE clinica_medica_alternativa;

use clinica_medica_alternativa;

CREATE TABLE medico(
    medico_id INT PRIMARY KEY AUTO_INCREMENT,
	CRM VARCHAR(12) UNIQUE,
    nome VARCHAR(60) NOT NULL,
    genero CHAR(1),
    especialidade VARCHAR(45) NOT NULL
);

CREATE TABLE paciente(
    paciente_id INT PRIMARY KEY AUTO_INCREMENT,
	CPF VARCHAR(11) UNIQUE,
    nome VARCHAR(60) NOT NULL,
    genero CHAR(1) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE endereco_medico(
    endereco_id INT PRIMARY KEY AUTO_INCREMENT,
    medico_id INT,
    rua VARCHAR(60),
    numero VARCHAR(10),
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    estado CHAR(2),
    cep VARCHAR(10),
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id)
);


CREATE TABLE endereco_paciente(
    endereco_id INT PRIMARY KEY AUTO_INCREMENT,
    paciente_id INT,
    rua VARCHAR(60),
    numero VARCHAR(10),
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    estado CHAR(2),
    cep VARCHAR(10),
    FOREIGN KEY (paciente_id) REFERENCES paciente(paciente_id)
);

CREATE TABLE telefone_medico(
    telefone_id INT PRIMARY KEY AUTO_INCREMENT,
	medico_id INT,
    telefone VARCHAR(14) NOT NULL,
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id)
);

CREATE TABLE telefone_paciente(
    telefone_id INT PRIMARY KEY AUTO_INCREMENT,
    paciente_id INT,
    telefone VARCHAR(14) NOT NULL,
    FOREIGN KEY (paciente_id) REFERENCES paciente(paciente_id)
);

CREATE TABLE consulta(
    numero_consulta INT PRIMARY KEY,
    data_marcada DATETIME NOT NULL,
    diagnostico VARCHAR(45),
    receita VARCHAR(45),
    observacoes VARCHAR(60),
    medico_id INT,
     paciente_id INT,
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id),
    FOREIGN KEY (paciente_id) REFERENCES paciente(paciente_id)
);
