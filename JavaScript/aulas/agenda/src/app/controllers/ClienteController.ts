import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Cliente } from '../models/Cliente';
import { validate } from 'class-validator';

interface MysqlError extends Error {
    code: string;
    errno: number;
}

export type ClienteOutputDto = {
    id: string;
    nome: string;
    email: string;
}

export type ListClienteOutputDto = {
    clientes: {
        id: string;
        nome: string;
        email: string;
    }[]
}

export class ClienteController {
    // Método para listar todos os clientes
    async getAllClientes(req: Request, res: Response) {
        try {
            const aClientes = await AppDataSource.getRepository(Cliente).find();

            const clientes = aClientes.map((p) => {
                return {
                    id: p.id,
                    nome: p.nome,
                    email: p.email,
                }
            })

            const output: ListClienteOutputDto = {
                clientes
            }

            return res.json(output);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar clientes', error });
        }
    }

    // Método para criar um novo cliente
    async createCliente(req: Request, res: Response) {
        const { nome, email } = req.body;

        try {
            const cliente = new Cliente();
            cliente.nome = nome;
            cliente.email = email;

            // Validação
            const errors = await validate(cliente);
            if (errors.length > 0) {
                return res.status(400).json({ message: 'Erro de validação', errors });
            }

            await AppDataSource.getRepository(Cliente).save(cliente);

            const output: ClienteOutputDto = {
                id: cliente.id,
                nome: cliente.nome,
                email: cliente.email
            }

            return res.status(201).json(output);
        } catch (error) {
            const mysqlError = error as MysqlError;  // Fazendo o cast para `MysqlError`
            if (mysqlError.code === 'ER_DUP_ENTRY' || mysqlError.errno === 1062) {
                return res.status(400).json({ message: 'E-mail já está em uso' });
            }
            return res.status(500).json({ message: 'Erro ao criar cliente', error });
        }
    }
}
