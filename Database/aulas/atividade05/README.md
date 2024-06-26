# Sistema de Gerenciamento de Consultas Médicas

## Descrição

Este projeto é um sistema de gerenciamento de consultas médicas, que permite registrar consultas entre médicos e pacientes, acompanhando diagnósticos, receitas médicas e observações relevantes. O sistema considera que cada médico tem uma especialidade específica e pode atender múltiplos pacientes ao longo do tempo, e cada paciente pode ser atendido por diferentes médicos dependendo das necessidades de saúde individuais e das especialidades requeridas.

## Entidades e Atributos

1. **Medico**
    - **CRM (VARCHAR(12), Primary Key)**: Número de registro no Conselho Regional de Medicina.
    - **nome (VARCHAR(45), NOT NULL)**: Nome do médico.
    - **genero (CHAR(1))**: Gênero do médico.
    - **especialidade (VARCHAR(45), NOT NULL)**: Especialidade médica.

2. **Paciente**
    - **CPF (VARCHAR(11), Primary Key)**: Número de CPF do paciente.
    - **nome (VARCHAR(60), NOT NULL)**: Nome do paciente.
    - **genero (CHAR(1), NOT NULL)**: Gênero do paciente.
    - **data_nascimento (DATE)**: Data de nascimento do paciente.

3. **Consulta**
    - **consulta_id (INT, Primary Key)**: Identificador único da consulta.
    - **data_marcada (DATETIME, NOT NULL)**: Data e hora marcada para a consulta.
    - **diagnostico (VARCHAR(45))**: Diagnóstico médico.
    - **receita (VARCHAR(45))**: Receita médica prescrita.
    - **observacoes (VARCHAR(60))**: Observações relevantes da consulta.
    - **medico_CRM (VARCHAR(12))**: Chave estrangeira referenciando o CRM do médico na tabela Médico.
    - **paciente_CPF (VARCHAR(11))**: Chave estrangeira referenciando o CPF do paciente na tabela Paciente.

4. **Telefone**
    - **telefone_id (INT, Primary Key)**: Identificador único do telefone.
    - **telefone (VARCHAR(15))**: Número de telefone.
    - **medico_CRM (VARCHAR(12))**: Chave estrangeira referenciando o CRM do médico na tabela Médico.
    - **paciente_CPF (VARCHAR(11))**: Chave estrangeira referenciando o CPF do paciente na tabela Paciente.

5. **Endereco**
    - **endereco_id (INT, Primary Key)**: Identificador único do endereço.
    - **medico_CRM (VARCHAR(12))**: Chave estrangeira referenciando o CRM do médico na tabela Médico.
    - **rua (VARCHAR(60))**: Nome da rua.
    - **numero (VARCHAR(10))**: Número do endereço.
    - **bairro (VARCHAR(45))**: Nome do bairro.
    - **cidade (VARCHAR(45))**: Nome da cidade.
    - **estado (CHAR(2))**: Sigla do estado.
    - **cep (VARCHAR(10))**: CEP do endereço.
 

## Modelo Entidade-Relacionamento (MER)

![MER](https://github.com/Eduardo-J-S/FAP-SOFTEX/blob/main/Database/aulas/atividade05/Conceitual_clinica_medica.png)

## Modelo de Entidade-Relacionamento Derivado (DER)

O DER refina o MER e transforma as entidades e relacionamentos em tabelas e colunas no banco de dados.

### DER

![DER](https://github.com/Eduardo-J-S/FAP-SOFTEX/blob/main/Database/aulas/atividade05/modelo_logico_clinica_medica.png)

## Modelo Físico

[SCRIPTS](https://github.com/Eduardo-J-S/FAP-SOFTEX/blob/main/Database/aulas/atividade05/modelo_fisico_clinica_medica.sql)

## Considerações
- Este sistema permite o registro detalhado de médicos, pacientes, consultas, telefones e endereços.
- As tabelas estão relacionadas através de chaves estrangeiras para garantir a integridade referencial dos dados.
- Cada entidade tem seus atributos específicos bem definidos, facilitando a organização e consulta das informações.


