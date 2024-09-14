# Microservices Project

Este projeto implementa um conjunto de microserviços para gerenciar clientes, produtos, e pedidos. Cada serviço é independente e se comunica por meio de mensagens usando o Apache Kafka.

## Tecnologias Usadas
- Node.js
- TypeScript
- Prisma ORM
- Kafka
- PostgreSQL

## Rotas Disponíveis

1. Customers (Clientes)
- Endpoint: `http://localhost:3001/customers`
- Método: `POST`
- Exemplo de Request Body:
```typescript
{
  "name": "Adonai",
  "email": "adonai@teste.com",
  "password": "adonas",
  "phone": "88899996"
}
```

2. Products (Produtos)
- Endpoint: `http://localhost:3003/products`
- Método: `POST`
- Exemplo de Request Body:
```typescript
{
  "name": "Teclado bom",
  "code": "9586",
  "quantity": 200,
  "price": 150.00
}
```

3. Orders (Pedidos)
- Endpoint: `http://localhost:3002/orders`
- Método: `POST`
- Exemplo de Request Body:
```typescript
{
  "customerId": "a76d4057-d345-47fb-854c-88a9c78d8e0c",
  "items": [
    {
      "productId": "1a23e6c8-0727-417d-ab06-8293ee70ce3a",
      "quantity": 5
    }
  ]
}
```

4. Update Order Status (Atualizar Status do Pedido)
- Endpoint: `http://localhost:3002/orders`
- Método: `PATCH`
- Exemplo de Request Body:
```typescript
{
  "id": "4295831f-05eb-45c3-a82f-2e8e85b4469b",
  "status": "PAGAMENTO_APROVADO"
}
```

## Instruções de Execução
1. Instale as dependências com npm install em cada microserviço.
2. Inicie cada serviço individualmente com npm run dev.
3. Certifique-se de que o Kafka e o PostgreSQL estão configurados corretamente.

## Estrutura do Projeto
### O projeto contém os seguintes microserviços:
- Customers Service: Gerencia clientes.
- Products Service: Gerencia produtos.
- Orders Service: Gerencia pedidos.

Cada serviço tem sua própria rota e banco de dados.