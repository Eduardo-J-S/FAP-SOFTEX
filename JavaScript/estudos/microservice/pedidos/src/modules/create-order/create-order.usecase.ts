import { prismaClient } from "../../infra/database/prismaClient";

type CreateOrderResquest = {
    customerId: string;
    items: [
        {
            productId: string,
            quantity: number,
        },
    ];
}

export class CreateOrderUseCase {
    constructor() { }

    async execute(data: CreateOrderResquest) {
        
        if (!data.customerId) {
            throw new Error("Customer ID is required");
        }

        const order = await prismaClient.order.create({
            data: {
                customerId: data.customerId,
                status: "AGUARDANDO_PAGAMENTO", 
                OrderItems: {
                    createMany: {
                        data: data.items,
                    },
                },
            },
        })
        return order;
    }
}