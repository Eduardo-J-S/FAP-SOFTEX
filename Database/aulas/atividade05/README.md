# Sistema de Gerenciamento de Consultas Médicas

## Descrição

Este projeto é um sistema de gerenciamento de consultas médicas, que permite registrar consultas entre médicos e pacientes, acompanhando diagnósticos, receitas médicas e observações relevantes. O sistema considera que cada médico tem uma especialidade específica e pode atender múltiplos pacientes ao longo do tempo, e cada paciente pode ser atendido por diferentes médicos dependendo das necessidades de saúde individuais e das especialidades requeridas.

## Entidades e Atributos

### Entidade: Médico
- **CRM** (INT, Primary Key): Número de registro no Conselho Regional de Medicina.
- **Nome** (VARCHAR(60)): Nome do médico.
- **Gênero** (CHAR(1)): Gênero do médico.
- **Telefone** (VARCHAR(14)): Telefone do médico.
- **Endereço**
  - **Rua** (VARCHAR(60))
  - **Número** (VARCHAR(10))
  - **Bairro** (VARCHAR(45))
  - **Cidade** (VARCHAR(45))
  - **Estado** (CHAR(2))
  - **CEP** (VARCHAR(10))
- **Especialidade** (VARCHAR(45)): Especialidade médica do médico.

### Entidade: Paciente
- **CPF** (VARCHAR(11), Primary Key): Número de CPF do paciente.
- **Nome** (VARCHAR(60)): Nome do paciente.
- **Gênero** (CHAR(1)): Gênero do paciente.
- **Telefone** (VARCHAR(14)): Telefone do paciente.
- **Data de Nascimento** (DATE): Data de nascimento do paciente.

### Entidade: Consulta
- **Número de Consulta** (INT, Primary Key): Número único da consulta.
- **Data Marcada** (DATETIME): Data e hora marcadas para a consulta.
- **Diagnóstico** (VARCHAR(45)): Diagnóstico médico da consulta.
- **Receita** (VARCHAR(45)): Receita médica prescrita na consulta.
- **Observações** (VARCHAR(60)): Observações pertinentes da consulta.
- **Medico_CRM** (INT, Foreign Key): Referência ao médico que realizou a consulta.
- **Paciente_CPF** (VARCHAR(11), Foreign Key): Referência ao paciente que teve a consulta.

## Relacionamentos

- Um médico pode realizar várias consultas.
- Um paciente pode ter várias consultas.
- Cada consulta é realizada por um médico e é para um paciente.

## Modelo Entidade-Relacionamento (MER)

![MER](https://github.com/Eduardo-J-S/FAP-SOFTEX/blob/main/Database/aulas/atividade05/Conceitual_clinica_medica.png)

### Descrição do MER

O MER descreve as relações entre as entidades Médico, Paciente e Consulta. O diagrama mostra que:

- A entidade **Médico** possui atributos como CRM, Nome, Gênero, Telefone, Endereço e Especialidade.
- A entidade **Paciente** possui atributos como CPF, Nome, Gênero, Telefone e Data de Nascimento.
- A entidade **Consulta** possui atributos como Número de Consulta, Data Marcada, Diagnóstico, Receita, Observações.

## Modelo de Entidade-Relacionamento Derivado (DER)

O DER refina o MER e transforma as entidades e relacionamentos em tabelas e colunas no banco de dados.

### DER

![DER](https://github.com/Eduardo-J-S/FAP-SOFTEX/blob/main/Database/aulas/atividade05/modelo_logico_clinica_medica.png)

## Modelo Físico

[SCRIPTS](https://github.com/Eduardo-J-S/FAP-SOFTEX/blob/main/Database/aulas/atividade05/modelo_fisico_clinica_medica.sql)


