CREATE DATABASE clinica_medica_alternativa;

use clinica_medica_alternativa;

CREATE TABLE medico(
    CRM INT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    genero CHAR(1),
    especialidade VARCHAR(45) NOT NULL
);

CREATE TABLE paciente(
    CPF VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    genero CHAR(1) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE endereco_medico(
    endereco_id INT PRIMARY KEY AUTO_INCREMENT,
    CRM INT,
    rua VARCHAR(60),
    numero VARCHAR(10),
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    estado CHAR(2),
    cep VARCHAR(10),
    FOREIGN KEY (CRM) REFERENCES medico(CRM)
);


CREATE TABLE endereco_paciente(
    endereco_id INT PRIMARY KEY AUTO_INCREMENT,
    CPF VARCHAR(11),
    rua VARCHAR(60),
    numero VARCHAR(10),
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    estado CHAR(2),
    cep VARCHAR(10),
    FOREIGN KEY (CPF) REFERENCES paciente(CPF)
);

CREATE TABLE telefone_medico(
    telefone_id INT PRIMARY KEY AUTO_INCREMENT,
    CRM INT,
    telefone VARCHAR(14) NOT NULL,
    FOREIGN KEY (CRM) REFERENCES medico(CRM)
);

CREATE TABLE telefone_paciente(
    telefone_id INT PRIMARY KEY AUTO_INCREMENT,
    CPF VARCHAR(11),
    telefone VARCHAR(14) NOT NULL,
    FOREIGN KEY (CPF) REFERENCES paciente(CPF)
);

CREATE TABLE consulta(
    numero_consulta INT PRIMARY KEY,
    data_marcada DATETIME NOT NULL,
    diagnostico VARCHAR(45),
    receita VARCHAR(45),
    observacoes VARCHAR(60),
    medico_CRM INT,
    paciente_CPF VARCHAR(11),
    FOREIGN KEY (medico_CRM) REFERENCES medico(CRM),
    FOREIGN KEY (paciente_CPF) REFERENCES paciente(CPF)
);
