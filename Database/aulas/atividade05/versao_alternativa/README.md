# Clínica Médica Alternativa
Este projeto implementa o sistema de gerenciamento de uma clínica médica alternativo.

## Estrutura do Banco de Dados

### Tabelas

1. **Médico**
    - **CRM (INT, Primary Key)**: Número de registro no Conselho Regional de Medicina.
    - **nome (VARCHAR(60), NOT NULL)**: Nome do médico.
    - **genero (CHAR(1))**: Gênero do médico.
    - **especialidade (VARCHAR(45), NOT NULL)**: Especialidade médica.

2. **Paciente**
    - **CPF (VARCHAR(11), Primary Key)**: Número de CPF do paciente.
    - **nome (VARCHAR(60), NOT NULL)**: Nome do paciente.
    - **genero (CHAR(1), NOT NULL)**: Gênero do paciente.
    - **data_nascimento (DATE)**: Data de nascimento do paciente.

3. **Endereço Médico**
    - **endereco_id (INT, Primary Key, AUTO_INCREMENT)**: Identificador do endereço.
    - **CRM (INT)**: Chave estrangeira referenciando a tabela Médico.
    - **rua (VARCHAR(60))**: Rua do endereço.
    - **numero (VARCHAR(10))**: Número do endereço.
    - **bairro (VARCHAR(45))**: Bairro do endereço.
    - **cidade (VARCHAR(45))**: Cidade do endereço.
    - **estado (CHAR(2))**: Estado do endereço.
    - **cep (VARCHAR(10))**: CEP do endereço.

4. **Endereço Paciente**
    - **endereco_id (INT, Primary Key, AUTO_INCREMENT)**: Identificador do endereço.
    - **CPF (VARCHAR(11))**: Chave estrangeira referenciando a tabela Paciente.
    - **rua (VARCHAR(60))**: Rua do endereço.
    - **numero (VARCHAR(10))**: Número do endereço.
    - **bairro (VARCHAR(45))**: Bairro do endereço.
    - **cidade (VARCHAR(45))**: Cidade do endereço.
    - **estado (CHAR(2))**: Estado do endereço.
    - **cep (VARCHAR(10))**: CEP do endereço.

5. **Telefone Médico**
    - **telefone_id (INT, Primary Key, AUTO_INCREMENT)**: Identificador do telefone.
    - **CRM (INT)**: Chave estrangeira referenciando a tabela Médico.
    - **telefone (VARCHAR(14), NOT NULL)**: Número de telefone.

6. **Telefone Paciente**
    - **telefone_id (INT, Primary Key, AUTO_INCREMENT)**: Identificador do telefone.
    - **CPF (VARCHAR(11))**: Chave estrangeira referenciando a tabela Paciente.
    - **telefone (VARCHAR(14), NOT NULL)**: Número de telefone.

7. **Consulta**
    - **numero_consulta (INT, Primary Key)**: Número único de identificação da consulta.
    - **data_marcada (DATETIME, NOT NULL)**: Data e hora da consulta.
    - **diagnostico (VARCHAR(45))**: Diagnóstico médico.
    - **receita (VARCHAR(45))**: Receita médica prescrita.
    - **observacoes (VARCHAR(60))**: Observações pertinentes.
    - **medico_CRM (INT)**: Chave estrangeira referenciando a tabela Médico.
    - **paciente_CPF (VARCHAR(11))**: Chave estrangeira referenciando a tabela Paciente.

## Modelo de Entidade-Relacionamento Derivado (DER)

O DER refina o MER e transforma as entidades e relacionamentos em tabelas e colunas no banco de dados.

### DER

![DER](https://github.com/Eduardo-J-S/FAP-SOFTEX/blob/main/Database/aulas/atividade05/versao_alternativa/modelo_logico_clinica_medica_alternativo.png)

## Considerações
- As tabelas `endereco_medico` e `endereco_paciente` armazenam múltiplos endereços para médicos e pacientes, respectivamente.
- As tabelas `telefone_medico` e `telefone_paciente` armazenam múltiplos telefones para médicos e pacientes, respectivamente.
- A tabela `consulta` registra as consultas realizadas entre médicos e pacientes, incluindo diagnósticos, receitas e observações.