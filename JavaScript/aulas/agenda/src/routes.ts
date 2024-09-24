import { Router } from 'express';
import { ClienteController } from './app/controllers/ClienteController';

const router = Router();
const clienteController = new ClienteController();

// Rota para listar todos os clientes
router.get('/clientes', clienteController.getAllClientes.bind(clienteController));

// Rota para criar um novo cliente
router.post('/clientes', clienteController.createCliente.bind(clienteController));

export default router;
